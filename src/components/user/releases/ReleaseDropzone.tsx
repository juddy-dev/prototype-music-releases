//CHAKRA
import { Button, 
  Flex, 
  useColorModeValue, 
  useToast 
} from "@chakra-ui/react";

//REACT
import { useState, 
  useCallback, 
  useEffect
} from "react";

//REACT-DROPZONE
import { useDropzone } from "react-dropzone";

//INTERNAL COMPONENTS
import { FileValidators } from "utils/validator-files";

function ReleaseDropzone(props: { content: JSX.Element | string, urlRelease: string, idRelease: number, [x: string]: any }) {
  const { content, urlRelease, idRelease, ...rest } = props; 

  useEffect(() => {
    setPreviewUrl(urlRelease);
  }, [urlRelease]);

  // STATE
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    validImage(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    maxFiles: 1,
    onDrop,
  });

  const validImage = (file: File) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.onload = async () => {
      if (FileValidators.isValidFormatProfile(file)) {
        if (FileValidators.isValidSize(file, 10000000)) {
          if (img.width === img.height) {
              saveCover(file);
          } else {
            showError("The release picture must be a square");
          }
        } else {
          showError("The release picture must be less than 10MB");
        }
      } else {
        showError("Invalid format (Should be PNG, JPG or JPEG)");
      }
    };
  };

  const saveCover = async (file: File) => {
    console.log(file);//replace this line with your code
  };

  const bg = useColorModeValue("gray.100", "navy.700");
  const borderColor = useColorModeValue("gray.300", "whiteAlpha.100");

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
      position="relative" 
      {...rest}
    >
      <input {...getInputProps()} />
      {previewUrl ? (
        <img
          src={previewUrl}
          alt="Preview"
          style={{
            position: "absolute", 
            top: 0,
            left: 0,
            width: "100%", 
            height: "100%", 
            objectFit: "cover" as React.CSSProperties['objectFit'],
            borderRadius: "16px", 
          }}
        />
      ) : (
        <Button variant="no-effects">{content}</Button>
      )}
    </Flex>
  );
}

export default ReleaseDropzone;
