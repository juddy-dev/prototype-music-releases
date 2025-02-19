'use client';

//CHAKRA
import { 
  Box, 
  Flex, 
  SimpleGrid 
} from "@chakra-ui/react";

//REACT
import React, { 
  useContext,
  useEffect
 } from "react";

//INTERNAL COMPONENTS
import { LoadingContext } from "contexts/LoadingContext";
import { SidebarContext } from "contexts/SidebarContext";
import Banner from "components/user/profile/BannerProfile";
import SettingsProfile from "components/user/profile/SettingsProfile";

export default function Page() {

  //CONTEXT
  const loader = useContext(LoadingContext);
  const sidebar = useContext(SidebarContext);

  useEffect( () => {
    //@ts-ignore
    loader.setLoading(false);
    //@ts-ignore
    sidebar.setToggleSidebar(false);
  });

  //TOAST

  //VARIABLES

  //STATES

  //FUNCTIONS

  return (
    <Box  pt={{ base: "130px", lg: "100px", "2xl": "120px" }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, lg: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        {/* Column Left */}
        <Flex 
          direction="column" 
          gap="24px"
        >
          <Banner />
          <SettingsProfile />
        </Flex>
        {/* Column Right */}
        <Flex 
          direction="column"
        >
          
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
