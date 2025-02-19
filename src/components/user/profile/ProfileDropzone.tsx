'use client'

//CHAKRA
import { 
  Icon, 
  Flex, 
  useColorModeValue, 
  useToast 
} from "@chakra-ui/react";

//REACT
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

//REACT ICONS
import { MdEdit } from "react-icons/md";

//INTERNAL COMPONENTS
import { FileValidators } from "utils/validator-files";

function ProfileDropzone( props:{ [x:string]:any} ) {
  const { updateUrl, ...rest } = props;
  
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    validImage(file);
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg']
      },
    maxFiles: 1, 
    onDrop
  });

  //TOASTS
  const showError = (message: string, seconds: number = 10) => {
    return toast({
      position: 'top-right',
      title: 'Oops!',
      description: message,
      status: 'error',
      duration: seconds*1000,
      isClosable: true,
    });
  };

  //VARIABLES
  const toast = useToast();
  const buttonColor = useColorModeValue('white', 'white');
  const buttonBg = useColorModeValue('navy.500', 'navy.900');
  const hoverButton = useColorModeValue({ bg: 'navy.900' },{  bg: 'navy.500' });
  const activeButton = useColorModeValue({ bg: 'navy.900' }, { bg: 'navy.500' });

  //STATES
  
  //FUNCTIONS
  const validImage =  (file: File) => {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = async () => {
      if (FileValidators.isValidFormatProfile(file)) {
        if (FileValidators.isValidSize(file, 512000)) {
          if (img.width === img.height) {
                saveProfilePicture(file);
          } else {
            showError('The profile picture must be a square');
          }
        } else {
          showError('The profile picture must be less than 512KB');
        }
      } else {
        showError('Invalid format (Should be PNG, JPG or JPEG)');
      }
    };
  };

  const saveProfilePicture = async (file?: File) => {
    console.log(file);//replace this line with your code
  };

  return (
    <Flex
      align="center"
      justify="center"
      bg={buttonBg}
      border="1px solid"
      color={buttonColor}
      borderColor={buttonColor}
      borderRadius={{base: "16px", xl: "32px"}}
      _hover={hoverButton}
      _active={activeButton}
      _focus={activeButton}
      w={{base: "30px", lg: "35px", "2xl":"45px"}}
      h={{base: "30px", lg: "35px", "2xl":"45px"}}
      zIndex={10}
      cursor="pointer"
      {...getRootProps({ className: "dropzone" })}
      {...rest}
    >
      <input
        {...getInputProps()}
      />
      <Icon 
        as={MdEdit} 
        width={{base: "12px", lg: "18px", "2xl":"22px"}} 
        height={{base: "12px", lg: "18px", "2xl":"22px"}} 
        color={buttonColor} 
      />
    </Flex>
  );
};

export default ProfileDropzone;
