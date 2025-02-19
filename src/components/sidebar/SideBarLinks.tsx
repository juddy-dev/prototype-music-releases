'use client';

//CHAKRA
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Text,
  List,
  Icon,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

//REACT
import { 
  useCallback, 
  useContext 
} from "react";

//REACT ICONS
import { FaCircle } from "react-icons/fa";

//NEXT JS
import { usePathname } from "next/navigation";

//INTERNAL COMPONENTS
import { IRoute } from "types/navigation";
import { LoadingContext } from "contexts/LoadingContext";
import NavLink from "components/link/NavLink";

export function SidebarLinks(props: { routes: IRoute[]; [x: string]: any }) {

  //CONTEXT
  const loader = useContext(LoadingContext);
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const pathname = usePathname(); 
  
  let activeColor = useColorModeValue('gray.700', 'white');
  let inactiveColor = useColorModeValue('secondaryGray.600','secondaryGray.600');
  let activeIcon = useColorModeValue('brand.500', 'white');

  const { routes, hovered, mini } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName: string) => {
      return pathname?.includes(routeName);
    },
    [pathname],
  );

  //STATES

  //FUNCTIONS
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, key) => {
      if (route.collapse) {
        return (
          <Accordion 
            allowToggle key={key}
          >
            <AccordionItem 
              maxW="100%" 
              border="none" 
              key={key}
            >
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{
                  bg: "unset",
                }}
                _focus={{
                  boxShadow: "none",
                }}
                borderRadius="8px"
                w={{ sm: "100%", xl: "100%", "2xl": "95%" }}
                px="0px"
                py="0px"
                bg="transparent"
                ms={0}
              >
                {route.icon ? (
                  <Flex
                    align="center"
                    justifyContent={
                      mini === false
                        ? "space-between"
                        : mini === true && hovered === true
                        ? "space-between"
                        : "center"
                    }
                    w="100%"
                  >
                    <HStack
                      mb="6px"
                      spacing={
                        activeRoute(route.path.toLowerCase()) 
                        ? "22px" : "26px"
                      }
                    >
                      <Flex
                        w="100%"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeIcon
                              : inactiveColor
                          }
                          me={
                            mini === false
                              ? "12px"
                              : mini === true && hovered === true
                              ? "12px"
                              : "0px"
                          }
                          mt="6px"
                        >
                          {route.icon}
                        </Box>
                        <Text
                          display={
                            mini === false
                              ? "block"
                              : mini === true && hovered === true
                              ? "block"
                              : "none"
                          }
                          me="auto"
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeColor
                              : "secondaryGray.600"
                          }
                          fontWeight="500"
                        fontSize={{base: "md", "2xl": "xl", "3xl": "2xl" }}
                        >
                          {route.name}
                        </Text>
                      </Flex>
                    </HStack>
                    <AccordionIcon
                      display={
                        mini === false
                          ? "block"
                          : mini === true && hovered === true
                          ? "block"
                          : "none"
                      }
                      w={{base: "20px", "2xl": "28px", "3xl": "35px"}}
                      h={{base: "20px", "2xl": "28px", "3xl": "35px"}}
                      ms="auto"
                      color={"secondaryGray.600"}
                      transform={route.icon ? "translateX(0%)" : "translateX(-70%)"}
                    />
                  </Flex>
                ) : (
                  <Flex
                    pt="0px"
                    pb="10px"
                    justify="center"
                    alignItems="center"
                    w="100%"
                  >
                    <HStack
                      spacing={
                        activeRoute(route.path.toLowerCase()) 
                        ? "22px" : "26px"
                      }
                      ps={
                        mini === false
                          ? "34px"
                          : mini === true && hovered === true
                          ? "34px"
                          : "0px"
                      }
                    >
                      <Text
                        me="auto"
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeColor
                            : inactiveColor
                        }
                        fontWeight="500"
                        fontSize={{base: "md", "2xl": "xl", "3xl": "2xl" }}
                      >
                        {mini === false
                          ? route.name
                          : mini === true && hovered === true
                          ? route.name
                          : route.name[0]}
                      </Text>
                    </HStack>
                    <AccordionIcon
                      display={
                        mini === false
                          ? "block"
                          : mini === true && hovered === true
                          ? "block"
                          : "none"
                      }
                      ms="auto"
                      color={"secondaryGray.600"}
                      w={{base: "20px", "2xl": "28px", "3xl": "35px"}}
                      h={{base: "20px", "2xl": "28px", "3xl": "35px"}}
                    />
                  </Flex>
                )}
              </AccordionButton>
              <AccordionPanel
                display={
                  mini === false
                    ? "block"
                    : mini === true && hovered === true
                    ? "block"
                    : "flex"
                }
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                // bg="blue"
                pe="0px"
                py="0px"
                ps="0px"
              >
                { !!route.items &&
                <List>
                  {
                    route.icon
                      ? createLinks(route.items.filter(item => item.sidebar)) // for bullet accordion links
                      : createAccordionLinks(route.items.filter(item => item.sidebar)) // for non-bullet accordion links
                  }
                </List>}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <NavLink 
            href={route.layout + route.path} 
            onClick={() => 
              //@ts-ignore
              loader.setLoading(true)
            }
            key={key}
          >
            {route.icon ? (
              <Flex
                align="center"
                justifyContent="space-between"
                w="100%"
                ps="0px"
                mb="0px"
              >
                <HStack
                  mb="6px"
                  spacing={
                    activeRoute(route.path.toLowerCase()) 
                    ? "22px" : "26px"
                  }
                >
                  <Flex 
                    w="100%" 
                    alignItems="center" 
                    justifyContent="center"
                  >
                    <Box
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeIcon
                          : inactiveColor
                      }
                      me="12px"
                      mt="6px"
                    >
                      {route.icon}
                    </Box>
                    <Text
                      me="auto"
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : "secondaryGray.600"
                      }
                      fontWeight="500"
                        fontSize={{base: "md", "2xl": "xl", "3xl": "2xl" }}
                    >
                      {mini === false
                        ? route.name
                        : mini === true && hovered === true
                        ? route.name
                        : route.name[0]}
                    </Text>
                  </Flex>
                </HStack>
              </Flex>
            ) : (
              <ListItem>
                <Flex
                  ps={
                    mini === false
                      ? "34px"
                      : mini === true && hovered === true
                      ? "34px"
                      : "0px"
                  }
                  alignItems="center"
                  mb="8px"
                >
                  <Text
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight="500"
                        fontSize={{base: "md", "2xl": "xl", "3xl": "2xl" }}
                  >
                    {mini === false
                      ? route.name
                      : mini === true && hovered === true
                      ? route.name
                      : route.name[0]}
                  </Text>
                </Flex>
              </ListItem>
            )}
          </NavLink>
        );
      }
    });
  };

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createAccordionLinks = (routes: IRoute[]) => {
    return routes.map((route: IRoute, key: number) => {
      return (
        <NavLink 
          href={route.layout + route.path} 
          onClick={() => 
            //@ts-ignore
            loader.setLoading(true)
          }  key={key}>
          <ListItem
            ms={
              mini === false
                ? "28px"
                : mini === true && hovered === true
                ? "28px"
                : "0px"
            }
            display="flex"
            alignItems="center"
            mb="10px"
            key={key}
          >
            <Icon 
              w={{base:"6px", "2xl": "9px", "3xl": "12px"}}
              h={{base:"6px", "2xl": "9px", "3xl": "12px"}}
              me="8px" as={FaCircle} color={activeIcon} />
            <Text
              color={
                activeRoute(route.path.toLowerCase())
                  ? activeColor
                  : inactiveColor
              }
              fontWeight={
                activeRoute(route.path.toLowerCase()) 
                  ? "bold" : "normal"
              }
              fontSize={{base: "md", "2xl": "xl", "3xl": "2xl" }}
            >
              {mini === false
                ? route.name
                : mini === true && hovered === true
                ? route.name
                : route.name[0]}
            </Text>
          </ListItem>
        </NavLink>
      );
    });
  };
  //  BRAND
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
