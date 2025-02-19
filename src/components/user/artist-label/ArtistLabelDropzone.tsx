'use client'

//CHAKRA  
import { 
  Button, 
  Flex, 
  useColorModeValue 
} from "@chakra-ui/react";

//REACT
import { useDropzone } from "react-dropzone";

function ArtistLabelDropzone(props:{content:JSX.Element|string, [x:string]:any} ) {
  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { label, content, ...rest } = props;
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
    'image/png': ['.png'],
    'image/jpg': ['.jpg'],
    'image/jpeg': ['.jpeg']
    },
    maxFiles: 1
  });
  const bg = useColorModeValue('gray.100', 'navy.700');
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.100');

  //STATES

  //FUNCTIONS

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
      minH={{sm: "64px", md: "48px", xl:'128px'}}
      cursor="pointer"
      {...getRootProps({ className: 'dropzone' })}
      pt={{base: "64px !important", md: "32px !important"}}
      pb={{base: "64px !important", md: "32px !important"}}
      {...rest}
    >
      <input {...getInputProps()} />
      <Button 
        variant="no-effects"
      >
        {content}
      </Button>
    </Flex>
  );
};

export default ArtistLabelDropzone;
