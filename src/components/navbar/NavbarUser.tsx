/* eslint-disable */

//CHAKRA
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

//REACT
import { 
  useEffect, 
  useState, 
  useContext 
} from "react";

//INTERNAL COMPONENTS
import { ConfiguratorContext } from "contexts/ConfiguratorContext";
import NavbarUserLinks from "components/navbar/NavbarLinksUser";

export default function NavbarUser(props: {
  secondary: boolean;
  brandText: string;
  pageText: string;
  logoText: string;
  fixed: boolean;
  previousPage: string;
  onOpen: (...args: any[]) => any;
  [x: string]: any;
}) {

  //CONTEXT
  const context = useContext(ConfiguratorContext);
  const { mini, hovered } = context;

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, []);

  //TOASTS
  
  //VARIABLES
  const { secondary, brandText, pageText, previousPage } = props;

  let mainText = useColorModeValue('navy.700', 'white');
  let secondaryText = useColorModeValue('gray.700', 'white');
  let navbarPosition = 'fixed' as const;
  let navbarFilter = 'none';
  let navbarBackdrop = 'blur(20px)';
  let navbarShadow = 'none';
  let navbarBg = useColorModeValue('transparent', 'transparent');
  let navbarBorder = 'transparent';
  let secondaryMargin = '0px';
  let paddingX = '15px';
  let gap = '0px';
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  //STATES
  // @ts-ignore
  const [scrolled, setScrolled] = useState(false);

  //FUNCTIONS

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.2s, 0.2s, 0.2s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      display={secondary ? "block" : "flex"}
      minH="75px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
      px={{ sm: paddingX, md: "10px" }}
      ps={{ xl: "12px" }}
      pt="8px"
      w={
        mini === false
          ? {
              base: "calc(100vw - 6%)",
              md: "calc(100vw - 8%)",
              lg: "calc(100vw - 6%)",
              xl: "calc(100vw - 365px)",
              "2xl": "calc(100vw - 365px)",
            }
          : mini === true && hovered === true
          ? {
              base: "calc(100vw - 6%)",
              md: "calc(100vw - 8%)",
              lg: "calc(100vw - 6%)",
              xl: "calc(100vw - 365px)",
              "2xl": "calc(100vw - 365px)",
            }
          : {
              base: "calc(100vw - 6%)",
              md: "calc(100vw - 8%)",
              lg: "calc(100vw - 6%)",
              xl: "calc(100vw - 185px)",
              "2xl": "calc(100vw - 200px)",
            }
      }
      top={{ base: "12px", md: "16px", xl: "18px" }}
    >
      <Flex
        w="100%"
        flexDirection={{
          base: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
        mb={gap}
      >
        <Box 
          mb={{ sm: "8px", md: "0px" }}
        >
          { pageText !== brandText &&
          <Breadcrumb>
            <BreadcrumbItem 
              color={secondaryText} 
              fontSize={{base:"sm", "2xl":"lg","3xl":"xl"}}
            >
              <BreadcrumbLink 
                href={previousPage} 
                color={secondaryText} 
                fontSize={{base:"sm", "2xl":"lg","3xl":"xl"}}
              >
               {pageText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          }          
          
          <Link
            color={mainText}
            cursor="default"
            bg="inherit"
            borderRadius="inherit"
            fontWeight="bold"
            fontSize={{base:"2xl", "3xl":"4xl"}}
            _hover={{ color: { mainText } }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            {brandText}
          </Link>
        </Box>
        <Box 
          ms="auto" 
          mt="12px" 
          w={{ sm: "100%", md: "unset" }}
        >
          <NavbarUserLinks />
        </Box>
      </Flex>
    </Box>
  );
};
