'use client';

//CHAKRA
import { 
  AspectRatio, 
  Box, 
  Grid
} from "@chakra-ui/react";

//REACT
import { 
  useContext, 
  useEffect, 
  useState
} from "react";

//NEXT JS
import { useSearchParams } from "next/navigation";

//INTERNAL COMPONENTS
import { Image } from "components/image/Image";
import { LoadingContext } from "contexts/LoadingContext";
import { SidebarContext } from "contexts/SidebarContext";
import InfoRelease from "components/user/releases/InfoRelease";
import { Release } from "types/release";

//DATA
import dataRelease from "variables/users/dataReleases";
import AnalyticsRelease from "components/user/releases/AnalyticsRelease";

export default function DetailRelease() {

  //CONTEXT
  const loader = useContext(LoadingContext);
  const sidebar = useContext(SidebarContext);

  //SEARCH PARAMS
  const searchParams = useSearchParams();
  const idRelease = new Number(searchParams.get('id')).valueOf();

  useEffect( () => {
    //@ts-ignore
    loader.setLoading(false);
    //@ts-ignore
    sidebar.setToggleSidebar(false);

    loadRelease();
  }, [idRelease]);
  
  //STATES
  const [ release, setRelease ] = useState(new Release());
  
  //FUNCTIONS
  const loadRelease = async () => {
    if (idRelease) {
      setRelease(dataRelease.filter(data => data.id == idRelease)[0]);
    }
  };

  return (
    <Box
      maxW="100%"
      pt={{ base: "130px", lg: "100px", "2xl": "120px" }}
    >
      <Grid
        maxW="100%"
        display={{ base: "block", lg: "grid" }}
        gridTemplateColumns="2.95fr 1fr"
      >
        <Box
          gridArea="1 / 1 / 2 / 2"
          me={{ lg: "20px" }}
          mb={{ base: "20px", lg: "0px" }}
        >
          <AspectRatio
            w="100%"
            maxW="100%"
            ratio={1130 / 636}
          >
            <Image
              src={release?.cover}
              w="100%"
              borderRadius="20px"
              alt=""
            />
          </AspectRatio>
        </Box> 
        <Box
          gridArea="1 / 2 / 2 / 2"
          me={{ lg: "20px" }}
          mb={{ base: "20px", lg: "0px" }}
        >
          <AnalyticsRelease />

        </Box> 
      </Grid>

      <InfoRelease
            release={release}
          />
    </Box>
  );  
};
