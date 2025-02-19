//CHAKRA
import {
  Button,
  Box,
  Flex,
  Icon,
  Text,
  Image,
  useColorModeValue,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  SimpleGrid
} from "@chakra-ui/react";

//REACT
import { 
  useEffect, 
  useState, 
  useContext 
} from "react";

//REACT ICONS
import { MdSettings } from "react-icons/md";

//ASSETS
import Light from "/public/img/layout/Light.png";
import Dark from "/public/img/layout/Dark.png";

//INTERNAL COMPONENTS
import { ConfiguratorContext } from "contexts/ConfiguratorContext";
import { HSeparator } from "components/separator/Separator";
import ConfiguratorRadio from "./ConfiguratorRadio";
import { globalStyles } from "theme/styles";

export default function Configurator() {

  //CONTEXT
  const context = useContext(ConfiguratorContext);
  const { theme, setTheme } = context;
  
  useEffect(() => {
    if (theme?.colors.brand[500] === theme?.colors.brandOrange[500]) {
      setActive('orange');
    } else {
      setActive('peach');
    }
  }, [
    theme?.colors.brand,
    theme?.colors.brandOrange
  ]);

  //TOASTS

  //VARIABLES
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarIcon = useColorModeValue('gray.400', 'white');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderButton = useColorModeValue('secondaryGray.100', '#323B5D');
  const bgSeparator = useColorModeValue('secondaryGray.400', '#323B5D');
  const activeShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.22)',
    'none',
  );
  const activeBg = useColorModeValue('#F7F9FF', 'whiteAlpha.100');
  const Bg = useColorModeValue('white', 'navy.700');
  const drawerBg = useColorModeValue('white', 'navy.800');
  const circleBrandPeach = useColorModeValue('brandPeach.500', 'brandPeach.400');
  const circleBrandOrange = useColorModeValue('brandOrange.500', 'brandOrange.400');

  const shadowBrandPeach = useColorModeValue(
    '0px 6px 18px rgba(237, 102, 99, 0.5)',
    '0px 6px 18px rgba(254, 102, 100, 0.5)',
  );
  const shadowBrandOrange = useColorModeValue(
    '0px 6px 18px rgba(255, 163, 114, 0.5)',
    '0px 6px 18px rgba(255, 182, 142, 0.5)',
  );

  const configuratorShadow = useColorModeValue(
    '-20px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '-22px 32px 51px 4px #0B1437',
  );

  //STATES
  const [active, setActive] = useState('peach');

  //FUNCTIONS

  const setColorModeLight = async () => {
    setColorMode('light');
  }

  const setColorModeDark = async () => {
    setColorMode('dark');
  }

  const changeThemeOrange = async () => {
    const newTheme = {
      ...theme,
      colors: {
        ...theme?.colors,
        brand: globalStyles.colors.brandOrange,
        brandScheme: globalStyles.colors.brandOrange,
        brandTabs: globalStyles.colors.brandOrange
      },
    };
    localStorage.setItem('ctheme', JSON.stringify(theme));
    // @ts-ignore
    setTheme(newTheme);
  };

  const changeThemePeach = async () => {
    const newTheme = {
      ...theme,
      colors: {
        ...theme?.colors,
        brand: globalStyles.colors.brandPeach,
        brandScheme: globalStyles.colors.brandPeach,
        brandTabs: globalStyles.colors.brandPeach
      },
    };
    localStorage.setItem('ctheme', JSON.stringify(theme));
    // @ts-ignore
    setTheme(newTheme);
  };

  
  return (
    <>
      <Button
        variant="no-hover"
        bg="transparent"
        p="0px"
        paddingLeft="6px"
        minW="unset"
        minH="unset"
        h="18px"
        w="max-content"
        onClick={onOpen}
      >
        <Icon 
          me="10px" 
          w={{base: "18px", "2xl": "36px"}}
          h={{base: "18px", "2xl": "36px"}}
          color={navbarIcon} as={MdSettings} 
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        blockScrollOnMount={false}
      >
        <DrawerContent
          right={isOpen ? "" : "-110%"}
          boxShadow={configuratorShadow}
          w={{ base: "calc(100vw - 32px)", md: "400px", "2xl": "512px" }}
          maxW={{ base: "calc(100vw - 32px)", md: "400px", "2xl": "512px" }}
          ms={{ base: "0px", sm: "16px" }}
          me={{ base: "16px" }}
          my={{ sm: "16px" }}
          borderRadius="16px"
          bg={drawerBg}
        >
          <DrawerHeader
            w="100%"
            pt="24px"
            pb="0px"
            px="24px"
          >
            <DrawerCloseButton 
              color={textColor}
              fontSize={{base:"md", "2xl": "2xl"}} 
            />
            <Flex 
              alignItems="center"
            >
              <Flex
                h={{base: "48px", "2xl": "64px"}} 
                w={{base: "48px", "2xl": "64px"}}
                me="20px"
                justifyContent="center"
                alignItems="center"
                borderRadius="999px"
                bgGradient="linear(to-b, brand.400, brand.600)"
              >
                <Icon 
                  color="white" 
                  as={MdSettings} 
                  h={{base: "32px", "2xl": "48px"}} 
                  w={{base: "32px", "2xl": "48px"}}
                />
              </Flex>
              <Box>
                <Text 
                  color={textColor} 
                  fontSize={{base:"xl", "2xl": "4xl"}} 
                  fontWeight="700"
                >
                  Configurator
                </Text>
                <Text
                  display="flex"
                  color="secondaryGray.600"
                  fontSize={{base:"md", "2xl": "2xl"}}
                  fontWeight="500"
                >
                  Music releases
                </Text>
              </Box>
            </Flex>
            <HSeparator 
              my="30px" 
              bg={bgSeparator}
            />
          </DrawerHeader>
          <DrawerBody
            pt="0px"
            pb="24px"
            w="100%"
            maxW="unset"
          >
            <Flex 
              flexDirection="column"
            >
              <Text 
                color={textColor} 
                mb="12px" 
                fontWeight="700" 
                fontSize={{base:"md", "2xl": "2xl"}}
              >
                Color Mode
              </Text>
              <SimpleGrid 
                columns={2} 
                gap="20px" 
                mb="30px"
              >
                <ConfiguratorRadio
                  onClick={setColorModeLight}
                  active={colorMode === "dark" ? false : true}
                  label={
                  <Text 
                    fontSize={{base:"md", "2xl": "2xl"}}
                  >
                    Light
                  </Text>}
                >
                  <Image
                    alt=""
                    src={Light.src}
                    w="100%"
                    borderRadius="8px"
                  />
                </ConfiguratorRadio>
                <ConfiguratorRadio
                  onClick={setColorModeDark}
                  active={colorMode === "light" ? false : true}
                  label={
                    <Text 
                      fontSize={{base:"md", "2xl": "2xl"}}
                    >
                      Dark
                    </Text>}
                >
                  <Image
                    alt=""
                    src={Dark.src}
                    w="100%"
                    borderRadius="8px"
                  />
                </ConfiguratorRadio>
              </SimpleGrid>
              <Text 
                color={textColor} 
                mb="12px" 
                fontWeight="700" 
                fontSize={{base:"md", "2xl": "2xl"}}
              >
                Color presets
              </Text>
              <SimpleGrid 
                columns={2} 
                gap="20px"
              >
                <Button
                  onClick={() => changeThemePeach()}
                  h="max-content"
                  py="20px"
                  _hover={{ background: Bg, boxShadow: activeShadow }}
                  _focus={{ background: Bg, boxShadow: activeShadow }}
                  _active={{ background: activeBg, boxShadow: activeShadow }}
                  bg={active === "Peach" 
                    ? Bg 
                    : "transparent"}
                  boxShadow={active === "Peach" 
                    ? activeShadow 
                    : "none"}
                  border="1px solid"
                  borderColor={borderButton}
                >
                  <Flex
                    boxShadow={shadowBrandPeach}
                    bg={circleBrandPeach}
                    w={{base: "20px", "2xl": "40px"}}
                    h={{base: "20px", "2xl": "40px"}}
                    borderRadius="100%"
                  />
                </Button>
                <Button
                  onClick={() => changeThemeOrange()}
                  h="max-content"
                  py="20px"
                  border="1px solid"
                  _hover={{ background: Bg, boxShadow: activeShadow }}
                  _focus={{ background: Bg, boxShadow: activeShadow }}
                  _active={{ background: activeBg, boxShadow: activeShadow }}
                  bg={active === "orange" 
                    ? Bg 
                    : "transparent"}
                  boxShadow={active === "orange" 
                    ? activeShadow 
                    : "none"}
                  borderColor={borderButton}
                >
                  <Flex
                    boxShadow={shadowBrandOrange}
                    bg={circleBrandOrange}
                    w={{base: "20px", "2xl": "40px"}}
                    h={{base: "20px", "2xl": "40px"}}
                    borderRadius="100%"
                  />
                </Button>
              </SimpleGrid>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

