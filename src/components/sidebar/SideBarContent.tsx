//CHAKRA
import {
  Box,
  Flex,
  Stack
} from "@chakra-ui/react";

//INTERNAL COMPONENTS
import Brand from "components/sidebar/SideBarBrand";
import SideBarLinks from "components/sidebar/SideBarLinks";
import SidebarCard from "components/sidebar/SidebarCard";
import { IRoute } from "types/navigation";

// FUNCTIONS
function SidebarContent(props: {
  routes: IRoute[];
  hovered?: boolean;
  mini?: boolean;
}) {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { routes, mini, hovered } = props;
  
  //STATES
  
  // SIDEBAR
  return (
    <Flex 
      direction="column" 
      height="100%" 
      ps={{base: "24px", lg:"12px"}} 
      pe="24px" 
      pt="24px" 
      pb="24px" 
      borderRadius="30px"
    >
      <Brand />
      <Stack 
        direction="column" 
        mb="auto" 
        mt="8px"
      >
        <Box
          ms={mini && hovered === false 
            ? "-16px" : "unset"}
        >
          <SideBarLinks 
            mini={mini} 
            hovered={hovered} 
            routes={routes} 
          />
        </Box>
      </Stack>
      <Flex
        mt="64px"
        mb="32px"
        borderRadius="30px"
        justifyContent="center"
        alignItems="center"
      >
        <SidebarCard 
          mini={mini} 
          hovered={hovered} 
        />
      </Flex>
    </Flex>
  );
};

export default SidebarContent;
