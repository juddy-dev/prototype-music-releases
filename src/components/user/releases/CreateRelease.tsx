'use client'

//CHAKRA
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";

//REACT
import React, { 
  useContext, 
  useEffect, 
  useState 
} from "react";

//INTERNAL COMPONENTS
import { HSeparatorLight } from "components/separator/Separator";
import { LoadingContext } from "contexts/LoadingContext";
import CreateTrack from "../tracks/CreateTrack";
import AddDetailRelease from "./AddDetailRelease";
import AddDistributionRelease from "./AddDistributionRelease";
import TrackSimpleTable from "../tracks/TrackSimpleTable";
import Card from "components/card/Card";
import { Release } from "types/release";
import { Distribution } from "types/distribution";
import { ArtistLabel } from "types/artist-label";
import { Track } from "types/track";

//DATA
import dataArtistLabel from "variables/users/dataArtistLabel";
import dataDistribution from "variables/users/dataDistribution";
import dataRelease from "variables/users/dataReleases";

export default function CreateRelease(props: { idRelease: number, onSavedRelease}) {
  const { idRelease, onSavedRelease } = props;

  //CONTEXT
  const loader = useContext(LoadingContext);

  useEffect( () => {
    //@ts-ignore
    loader.setLoading(false);
    loadDistributions();
    loadListArtistLabels();
    loadRelease();
  }, [idRelease]);

  //VARIABLES
  const ARTIST = 'ARTIST';
  const LABEL = 'LABEL';
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const bgTabsInactive = useColorModeValue('gray.500', 'gray.700');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeBullets, setActiveBullets] = useState({
    details: true,
    track: false,
    distribution: false
  });
  const trackTab = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const detailTab = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const distributionTab = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  //STATES
  const [ listDistributions, setListDistributions] = useState([] as Distribution[]);
  const [ listTracks, setListTracks ] = useState([] as Track[]);
  const [ listArtist, setListArtist ] = useState([] as ArtistLabel[]);
  const [ listLabel, setListLabel ] = useState([] as ArtistLabel[]);
  const [ idsDistribution, setIdDistribution ] = useState([]);
  const [ isFormValid, setIsFormValid ] = useState(false);
  const [ release, setRelease ] = useState(new Release());
  const [ formRelease, setFormRelease] = useState({});
  const [ idTrack, setIdTrack ] = useState(0);

  //FUNCTIONS
  const loadDistributions = async () => {
    setListDistributions(dataDistribution);
  };

  const activateDetailTab = () => {
    setActiveBullets({
      details: true,
      track: false,
      distribution: false
    });
  };

  const activateTrackTab = () => {
    goToTabTracks();
  };
  
  const activateDistributionTab = () => {
    setActiveBullets({
      details: true,
      track: true,
      distribution: true
    });
  };

  const loadListArtistLabels = async () => {
    setListLabel(dataArtistLabel?.filter(resp => resp.type === LABEL));
    setListArtist(dataArtistLabel?.filter(resp => resp.type === ARTIST));
  };

  const handleFormValidation = (isValid) => {
    setIsFormValid(isValid);
  };

  const updateRelease = async () => {
    console.log(formRelease);//replace this line with your code
    setActiveBullets({
      details: true,
      track: true,
      distribution: false
    });
  }

  const goToTabTracks = async () => {
    if (isFormValid) {
      updateRelease();
    }
  }

  const loadRelease = async () => {
    setRelease(dataRelease.filter(data => data.id == idRelease)[0]);
    setListTracks(dataRelease.filter(data => data.id == idRelease)[0].tracks ?? []);
  };

  useEffect( () => {
    if (!isOpen) {
      setIdTrack(0);
    }
  }, [isOpen]);

  useEffect( () => {
    if (!!idTrack && idTrack > 0) {
      onOpen();
    }
  }, [idTrack]);

  const createTrack = async () => {
    setIdTrack(999);
  };

  const saveDistributions = async () => {
    onSavedRelease();
  }

  const saveListDistribution = (data: any) => {
    console.log(idsDistribution);//replace this line with your code
    setIdDistribution(
      data.map( name => listDistributions?.find(distribution => distribution.name === name)?.id)
    );
  }

  return (
    <Flex
      direction="column"
      minH="100vh"
      align="center"
      position="relative"
    >
      <Box
        h="35vh"
        bgGradient="linear(to-b, brand.400, brand.600)"
        position="absolute"
        w="100%"
        borderRadius="30px"
      />

      <Tabs
        variant="unstyled"
        mt={{ base: "30px", md: "90px" }}
        zIndex="0"
        w="100%"
        display="flex"
        flexDirection="column"
      >
        <TabList
          display="flex"
          alignItems="center"
          alignSelf="center"
          justifySelf="center"
        >
          <Tab
            _focus={{ border: "0px", boxShadow: "unset" }}
            /* @ts-ignore */
            ref={detailTab}
            w={{ sm: "96px", md: "200px", lg: "250px" }}
            onClick={activateDetailTab}
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: "96px", md: "200px", lg: "250px" },
                height: "3px",
                bg: activeBullets.track ? "white" : bgTabsInactive,
                left: { sm: "12px", md: "20px", xl: "30px" },
                top: {
                  sm: activeBullets.details ? "6px" : "4px"
                },
                position: "absolute",
                bottom: activeBullets.details ? "40px" : "38px",

                transition: "all .3s ease",
              }}
            >
              <Box
                zIndex="1"
                border="2px solid"
                borderColor={activeBullets.details ? "white" : "brand.400"}
                bgGradient="linear(to-b, brand.400, brand.600)"
                w={{base: "16px", "2xl": "21px"}}
                h={{base: "16px", "2xl": "21px"}}
                mb="8px"
                borderRadius="50%"
              />
              <Text
              fontSize={{base:"md", "2xl":"xl", "3xl":"2xl"}}
                color={activeBullets.details ? "white" : "gray.300"}
                fontWeight={activeBullets.details ? "bold" : "normal"}
                display={{ sm: "none", md: "block" }}
              >
                Details
              </Text>
            </Flex>
          </Tab>
          <Tab
            _focus={{ border: "0px", boxShadow: "unset" }}
            /* @ts-ignore */
            ref={trackTab}
            w={{ sm: "96px", md: "200px", lg: "250px" }}
            onClick={activateTrackTab}
            isDisabled={!isFormValid}
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: "96px", md: "200px", lg: "250px" },
                height: "3px",
                bg: activeBullets.distribution ? "white" : bgTabsInactive,
                left: { sm: "12px", md: "28px" },
                top: "6px",
                position: "absolute",
                bottom: activeBullets.track ? "40px" : "38px",

                transition: "all .3s ease",
              }}
            >
              <Box
                zIndex="1"
                border="2px solid"
                borderColor={activeBullets.track ? "white" : "brand.400"}
                bgGradient="linear(to-b, brand.400, brand.600)"
                w={{base: "16px", "2xl": "21px"}}
                h={{base: "16px", "2xl": "21px"}}
                mb="8px"
                borderRadius="50%"
              />
              <Text
              fontSize={{base:"md", "2xl":"xl", "3xl":"2xl"}}
                color={activeBullets.track ? "white" : "gray.300"}
                fontWeight={activeBullets.track ? "bold" : "normal"}
                display={{ sm: "none", md: "block" }}
              >
                Tracks
              </Text>
            </Flex>
          </Tab>
          <Tab
            _focus={{ border: "0px", boxShadow: "unset" }}
            /* @ts-ignore */
            ref={distributionTab}
            w={{ sm: "96px", md: "200px", lg: "250px" }}
            onClick={activateDistributionTab}
            isDisabled={!isFormValid}
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
            >
              <Box
                zIndex="1"
                border="2px solid"
                borderColor={activeBullets.distribution 
                  ? "white" : "brand.400"}
                bgGradient="linear(to-b, brand.400, brand.600)"
                w={{base: "16px", "2xl": "21px"}}
                h={{base: "16px", "2xl": "21px"}}
                mb="8px"
                borderRadius="50%"
              />
              <Text
              fontSize={{base:"md", "2xl":"xl", "3xl":"2xl"}}
                color={activeBullets.distribution ? "white" : "gray.300"}
                fontWeight={activeBullets.distribution ? "bold" : "normal"}
                display={{ sm: "none", md: "block" }}
              >
                Distribution
              </Text>
            </Flex>
          </Tab>
        </TabList>
        <TabPanels 
          mt="24px" 
          maxW={{ md: "90%", lg: "100%" }} 
          mx="auto"
        >
          <TabPanel
            w={{ sm: "90%", md: "80%", lg: "75%" }}
            p="0px"
            mx="auto"
          >
            <AddDetailRelease 
              onFormValidation={handleFormValidation}
              onFormData={setFormRelease}
              artists={listArtist} 
              labels={listLabel}
              release={release}
            >
              <Flex 
                justify="end" 
                mt="32px"
              >
                <Button
                  variant="darkBrand"
                    fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                  borderRadius="16px"
                  w={{ base: "128px", md: "148px" }}
                  h="46px"
                  onClick={ () => trackTab.current.click() }
                  isDisabled={!isFormValid}
                >
                  Next
                </Button>
              </Flex>
            </AddDetailRelease>
          </TabPanel>
          
          <TabPanel
            w={{ sm: "90%", md: "85%", lg: "75%" }}
            p="0px"
            mx="auto"
          >
            <Card 
              p="30px"
            >
              <Text 
                color={textColor} 
                fontSize={{base:"2xl", "2xl":"4xl", "3xl":"5xl"}}  
                fontWeight="700" mb="20px"
              >
                Add tracks
              </Text>
              <Flex 
                direction="column" 
                w="100%"
              >
                <Button
                  variant="light"
                  fontSize={{base:"md", "2xl":"xl", "3xl":"2xl"}}
                  borderRadius="16px"
                  minW={{ base: "130px", md: "150px" }}
                  minH="46px"
                  alignSelf="end"
                  onClick={createTrack}
                >
                  Add new track
                </Button>

                <Flex 
                  direction="row" 
                  gap="20px"
                >
                  <HSeparatorLight 
                    mt="32px" 
                    mb="32px"
                  />
                  <Text
                      color={textColor}
                      fontWeight="400"
                      fontSize={{base:"md", "2xl":"xl", "3xl":"2xl"}}
                      minW= {{base: "100px", xl: "128´x", "2xl": "156px"}}
                      textAlign="center"
                      alignSelf="center"
                    >
                      Tracks added
                    </Text>
                  <HSeparatorLight 
                    mt="32px" 
                    mb="32px"
                  />
                </Flex>

                <TrackSimpleTable 
                  tableData={listTracks}
                />

                <Flex 
                  justify="space-between" 
                  mt="24px"
                >
                  <Button
                    variant="light"
                    fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                    borderRadius="16px"
                    w={{ base: "128px", md: "148px" }}
                    h="46px"
                    onClick={() => detailTab.current.click()}
                  >
                    Prev
                  </Button>

                  <Button
                    variant="darkBrand"
                     fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                    borderRadius="16px"
                    w={{ base: "128px", md: "148px" }}
                    h="46px"
                    ms="auto"
                    onClick={() => distributionTab.current.click()}
                  >
                    Next
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </TabPanel>
          <TabPanel
            w={{ sm: "90%", md: "80%", lg: "75%" }}
            p="0px"
            mx="auto">
              <AddDistributionRelease 
                distributions={listDistributions}
                selected={saveListDistribution}
                preloaded={release.distributions}
              >
                <Flex 
                  justify="space-between" 
                  mt="32px"
                >
                  <Button
                    variant="light"
                    fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                    borderRadius="16px"
                    w={{ base: "128px", md: "148px" }}
                    h="46px"
                    onClick={() => trackTab.current.click()}
                  >
                    Prev
                  </Button>
                  <Button
                    variant="darkBrand"
                    fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                    borderRadius="16px"
                    w={{ base: "128px", md: "148px" }}
                    h="46px"
                    onClick={saveDistributions}
                  >
                    Save
                  </Button>
                </Flex>
              </AddDistributionRelease>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Modal 
        onClose={onClose} 
        size="full" 
        isOpen={isOpen} 
        scrollBehavior="inside"
        motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader 
            fontSize={{base:"xl", "2xl":"2xl", "3xl":"3xl"}}
          >
            New track
          </ModalHeader>
          <ModalCloseButton 
            fontSize={{base:"sm", "2xl":"lg", "3xl":"xl"}}
          />
          <ModalBody>
            <CreateTrack 
              artists={listArtist}
              idTrack={idTrack}
              onSavedTrack={onClose}
            >
            </CreateTrack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

