'use client';

// CHACKRA
import { 
  Box, 
  Flex, 
  Grid
} from "@chakra-ui/react";

//REACT
import React, {
  useContext, 
  useEffect, 
  useState
} from "react";

//INTERNAL COMPONENTS
import { LoadingContext } from "contexts/LoadingContext";
import { SidebarContext } from "contexts/SidebarContext";
import Banner from "components/user/dashboards/BannerDashboards";
import ReleaseTable from "components/user/releases/ReleaseTable";
import OverallRevenue from "components/user/dashboards/OverallRevenue";

//DATA
import dataRelease from "variables/users/dataReleases";
import { Release } from "types/release";

export default function Page() {

  //CONTEXT
  const loader = useContext(LoadingContext);
  const sidebar = useContext(SidebarContext);

  useEffect(() => {
    //@ts-ignore
    loader.setLoading(false);
    //@ts-ignore
    sidebar.setToggleSidebar(false);
    loadLastReleases();
  }, []);


  //STATES
  const [ listRelease, setListRelease ] = useState([] as Release[]);
  

  //FUNCTIONS
  const loadLastReleases = async () => {
    setListRelease(dataRelease
      .filter(data => data.idState == 3)
      .sort((a,b) => b.created_time.getTime() - a.created_time.getTime())
      .slice(0, 3));
  };

  const reLoadRelease = () => {
    loadLastReleases();
  }

  return (
    <Box
      pt={{ base: "130px", lg: "100px", "2xl": "120px" }}
    >
      <Box 
        display={{ base: "block", lg: "grid" }}
      >
        <Flex 
          flexDirection="column"
        >
          <Banner />
        </Flex>
      </Box>
  
      <Flex
        direction={{ base: "column", xl: "row" }}
        pt="20px"
      >
        <Flex
          direction="column"
          width="stretch"
        >
          <Grid
            mb="20px"
            gridTemplateColumns={{ base: "repeat(2, 1fr)", "2xl": "720fr 350fr" }}
            gap="20px"
            display={{ base: "block", lg: "grid" }}
          >
            <Flex
              gridArea={{ base: "1 / 1 / 2 / 3" }}
            >
              <OverallRevenue />
            </Flex>
          </Grid>
        </Flex>
      </Flex>
  
      <Flex
        direction="column"
        width="stretch"
        pt="10px"
      >
        <ReleaseTable 
          withTitle={true} 
          title="Releases"
          tableData={listRelease}
          withLastest={true}
          onCloseEdit={reLoadRelease} 
        />
      </Flex>
    </Box>
  );  
};
