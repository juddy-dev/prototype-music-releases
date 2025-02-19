'use client'

//CHAKRA
import { 
  Button, 
  Flex,   
  Text, 
  Icon,
  useColorModeValue,
  useToast 
} from "@chakra-ui/react";

//REACT
import { useState } from "react";
import { useDropzone } from "react-dropzone";

//REACT ICONS
import { FiMusic } from "react-icons/fi";

function TrackDropzone(props:{content:JSX.Element|string, idTrack: number, [x:string]:any}) { 
  const { content, idTrack, ...rest } = props;

  // CONTEXT

  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => handleFileDrop(acceptedFiles),
  });
  const bg = useColorModeValue("gray.100", "navy.700");
  const borderColor = useColorModeValue("gray.300", "whiteAlpha.100");

  //STATES
  const [audioFile, setAudioFile] = useState<File | null>(null);

  // TOASTS
  const toast = useToast();

  const showError = (message: string, seconds: number = 10) => {
    return toast({
      position: "top-right",
      title: "Oops!",
      description: message,
      status: "error",
      duration: seconds * 1000,
      isClosable: true,
    });
  };

  const showSuccess = (message: string, seconds: number = 5) => {
    return toast({
      position: "top-right",
      title: "Success!",
      description: message,
      status: "success",
      duration: seconds * 1000,
      isClosable: true,
    });
  };

  //FUNCTIONS
  const getBitDepthFromWavHeader = (arrayBuffer: ArrayBuffer): number | null => {
    const dataView = new DataView(arrayBuffer);
  
    if (dataView.byteLength < 44) { 
      console.error("Invalid WAV file (too short).");
      return null;
    }
  
    if (dataView.getUint32(0, false) !== 0x52494646) { 
      console.error("Not a valid WAV file.");
      return null;
    }
  
    const bitDepth = dataView.getUint16(34, true); 
    return bitDepth;
  };
  
  const handleFileDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (!file) {
      showError("No file was uploaded.");
      return;
    }

  if (!file.name.toLowerCase().endsWith(".wav")) {
    showError("Only WAV format is supported.");
    return;
  }

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);
    
    reader.onload = async () => {
      const arrayBuffer = reader.result as ArrayBuffer;

      try {
        const audioArrayBuffer = arrayBuffer.slice(0);

        const buffer = await audioContext.decodeAudioData(audioArrayBuffer);

        if (buffer.duration <= 2) {
           showError("The audio must be longer than 2 seconds.");
          return;
        }

        if (buffer.sampleRate < 44100) {
          showError("The sample rate must be at least 44100 Hz.");
          return;
        }

        if (buffer.numberOfChannels !== 2) {
          showError("The audio must be stereo (2 channels).");
          return;
        }

        const bitDepth = getBitDepthFromWavHeader(arrayBuffer);

        if (bitDepth === null) {
          showError("The file is not a valid WAV file.");
          return;
        }

        if (bitDepth < 16 || bitDepth > 24) {
          showError("The bit depth must be between 16 and 24.");
          return;
        }
        showSuccess("Audio track saved successfully.");
        setAudioFile(file);
        } catch (err) {
          console.error("Error decoding audio file:", err);
          showError("Error processing audio file.");
        }
      };
    };

  

  return (
    <Flex
      align="center"
      justify="center"
      bg={bg}
      border="1px dashed"
      borderColor={borderColor}
      borderRadius="16px"
      w="100%"
      maxW="100%"
      h="max-content"
      minH="130px"
      cursor="pointer"
      {...getRootProps({ className: "dropzone" })}
      pt="80px !important"
      pb="105px !important"
      {...rest}
    >
      <input {...getInputProps()} />
      <Button 
        variant="no-effects"
      >
        {audioFile ? (
          <Flex direction="column" align="center">
            <Icon as={FiMusic} boxSize={8} mb={2} />
            <Text>{audioFile.name}</Text>
            {/* OPCION DE REPRODUCIR EL AUDIO CON LA URL DE AWS */}
          </Flex>
        ) : (
          content
        )}
      </Button>
    </Flex>
  );
};

export default TrackDropzone;
