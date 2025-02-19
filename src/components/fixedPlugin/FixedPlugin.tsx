'use client';

//CHAKRA
import { 
  Button, 
  Icon, 
  useColorMode 
} from "@chakra-ui/react";

//REACT ICONS 
import { 
  IoMdMoon, 
  IoMdSunny 
} from "react-icons/io";

export default function FixedPlugin(props: { [x: string]: any }) {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  //STATES

  //FUNCTIONS

  return (
    <Button
      {...rest}
      h="60px"
      w="60px"
      zIndex="99"
      bgGradient="linear(to-b, brand.400, brand.600)"
      position="fixed"
      variant="no-effects"
      left={""}
      right={"35px"}
      bottom="30px"
      border="0px solid"
      borderColor="#6A53FF"
      borderRadius="50px"
      onClick={toggleColorMode}
      display="flex"
      p="0px"
      alignItems="center"
      justifyContent="center"
    >
      <Icon
        h="24px"
        w="24px"
        color="white"
        as={colorMode === "light" ? IoMdMoon : IoMdSunny}
      />
    </Button>
  );
};
