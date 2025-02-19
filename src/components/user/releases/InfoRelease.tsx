'use client'

//CHAKRA
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

//REACT
import { useState } from "react";

//INTERNAL COMPONENTS
import { Release } from "types/release";
import DetailRelease from "./DetailRelease";
import Card from "components/card/Card";
import TrackTableRelease from "./TrackTableRelease";

export default function InfoRelease(props: { release: Release | undefined, [x: string]: any }) {
  //CONTEXT
  
  //USEEFFECT

  //TOASTS

  // VARIABLES
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorTertiary = useColorModeValue('secondaryGray.600','secondaryGray.500');
  const { release } = props;

  // STATES
  let [tabState, setTabState] = useState('info');
  
  //FUNCTIONS

  return (
    <Card 
      mt="20px" 
      p={{ base: "20px", md: "20px 40px" }}
    >
      <Box 
        w="100%" 
        mb="40px"
      >
        <Flex 
          direction={{ base: "column", "3xl": "row" }}
        >
          <Box 
            me={{ md: "40px", "3xl": "40px" }}
          >
            <Tabs 
              variant="soft-rounded" 
              colorScheme="brandTabs" 
              mb="60px"
            >
              <TabList 
                overflowX={{ sm: "scroll", lg: "unset" }}
              >
                <Flex>
  
                  <Tab
                    pb="0px"
                    flexDirection="column"
                    onClick={() => setTabState("info")}
                    me="10px"
                    bg="unset"
                    _selected={{ bg: "none" }}
                    _focus={{ border: "none" }}
                    minW="max-content"
                  >
                    <Flex align="center">
                      <Text
                        color={tabState === "info" 
                          ? textColor 
                          : textColorTertiary
                        }
                        fontSize="lg"
                        fontWeight="500"
                      >
                        Information
                      </Text>
                    </Flex>
                    <Box
                      height="4px"
                      w="100%"
                      transition="0.1s linear"
                      bg={tabState === "info" 
                        ? "brand.500" 
                        : "transparent"
                      }
                      mt="15px"
                      borderRadius="30px"
                    />
                  </Tab>
  
                  <Tab
                    pb="0px"
                    flexDirection="column"
                    onClick={() => setTabState("track")}
                    bg="unset"
                    _selected={{ bg: "none" }}
                    _focus={{ border: "none" }}
                    minW="max-content"
                  >
                    <Flex align="center">
                      <Text
                        color={tabState === "track" 
                          ? textColor 
                          : textColorTertiary
                        }
                        fontSize="lg"
                        fontWeight="500"
                      >
                        Tracks
                      </Text>
                    </Flex>
                    <Box
                      height="4px"
                      w="100%"
                      transition="0.1s linear"
                      bg={tabState === "track" 
                        ? "brand.500" 
                        : "transparent"
                      }
                      mt="15px"
                      borderRadius="30px"
                    />
                  </Tab>
                </Flex>
              </TabList>
  
              <TabPanels pt="30px">
                <TabPanel px="0px">
                  <DetailRelease 
                    release={release} 
                  >
                  </DetailRelease> 
                </TabPanel>
                <TabPanel 
                  px="0px"
                >
                  <TrackTableRelease 
                    tableData={release?.tracks} 
                  /> 
                </TabPanel>
              </TabPanels>  
            </Tabs>
          </Box>
        </Flex>
      </Box>
    </Card>
  );   
};
