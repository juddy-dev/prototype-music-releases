//CHAKRA
import { 
  Flex, 
  useColorModeValue 
} from "@chakra-ui/react";

//ASSETS
import logoLight from "/public/img/others/logo_light.png";
import logoDark from "/public/img/others/logo_dark.png";

//INTERNAL COMPONENTS
import { Image } from "components/image/Image";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  //   Chakra color mode
  let logo = useColorModeValue(logoLight, logoDark);

  //STATES

  //FUNCTIONS

  return (
    <Flex 
      alignItems="center" 
      flexDirection="column"
    >
      <Image
        h="57px"
        w="83px"
        my="32px"
        src={logo}
        alt=""
      />
      <HSeparator 
        mb="20px" 
      />
    </Flex>
  );
};

export default SidebarBrand;
