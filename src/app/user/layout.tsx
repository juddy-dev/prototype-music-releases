'use client';

//CHAKRA
import { Portal, 
  Box,
  useColorMode,
  useDisclosure
} from "@chakra-ui/react";

//REACT
import React, { 
  useContext, 
  useState,
  useEffect 
} from "react";

//NEXT JS
import { 
  usePathname, 
  useRouter 
} from "next/navigation";

//INTERNAL COMPONENTS
import FooterUser from "components/footer/FooterUser";
import NavbarUser from "components/navbar/NavbarUser";
import Sidebar from "components/sidebar/Sidebar";
import { LoadingContext } from "contexts/LoadingContext";
import { ClientContext } from "contexts/ClientContext";
import { ConfiguratorContext } from "contexts/ConfiguratorContext";
import routes from "routes";
import {
  getActiveNavbar,
  getActivePrimaryRoute,
  getActiveRoute,
  getActiveRoutePreviousPage,
  isWindowAvailable,
} from "utils/navigation";
import { globalStyles } from "theme/styles";

//AWS
import { Amplify } from "aws-amplify";
import configAws from "aws-exports";
import { getCurrentUser } from "aws-amplify/auth";

//AWS CONFIGURATION
Amplify.configure(configAws);

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(()=> {
    AccessLoggedInState();
  }, []);

  // VARIABLES
  const pathname = usePathname();
  const router = useRouter();
  const loader = useContext(LoadingContext);
  const clientContext = useContext(ClientContext);
  if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  const context = useContext(ConfiguratorContext);
  const { theme, setTheme, mini, hovered, setHovered } = context;
  const { setColorMode } = useColorMode();
  const { onOpen } = useDisclosure()
  
  //STATES
  const [fixed] = useState(false);

  //FUNCTIONS

  const AccessLoggedInState = async () => {
    //@ts-ignore
    loader.setLoading(true);
    try {
      await getCurrentUser();
      setDefaultData();
      //@ts-ignore
      loader.setLoading(false);
    } catch(error) {
      router.push('/auth/sign-in');
    }
  };

  const setDefaultData = async() => {
    //@ts-ignore
    clientContext.setPicture(null);
    //@ts-ignore
    clientContext.setBanner(null);
    //@ts-ignore
    clientContext.setAccountName('juddy.dev');
    //@ts-ignore
    clientContext.setName('Juddy Test');
    //@ts-ignore
    clientContext.setNameInShort('JT');
    setThemePeach();
    setColorMode('dark');
  };

  const setThemePeach = async () => {
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
    <Box>
      <Sidebar 
        mini={mini} 
        routes={routes} 
        hovered={hovered} 
        setHovered={setHovered} 
      />
      <Box
        float="right"
        minHeight="100vh"
        height="100%"
        overflow="auto"
        position="relative"
        maxHeight="100%"
        w={
          mini === false
            ? { base: "100%", xl: "calc( 100% - 290px )" }
            : mini === true && hovered === true
            ? { base: "100%", xl: "calc( 100% - 290px )" }
            : { base: "100%", xl: "calc( 100% - 120px )" }
        }
        maxWidth={
          mini === false
            ? { base: "100%", xl: "calc( 100% - 290px )" }
            : mini === true && hovered === true
            ? { base: "100%", xl: "calc( 100% - 290px )" }
            : { base: "100%", xl: "calc( 100% - 120px )" }
        }
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
      >
        <Portal>
          <Box>
            <NavbarUser
              onOpen={onOpen}
              logoText="Music Releases"
              brandText={getActiveRoute(routes, pathname)}
              pageText={getActivePrimaryRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
              fixed={fixed}
              previousPage={getActiveRoutePreviousPage(routes, pathname)}
            />
          </Box>
        </Portal>
  
        <Box 
          mx="auto" 
          p={{ base: "20px", md: "30px" }} 
          pe="20px" 
          minH="100vh" 
          pt="50px"
        >
          {children}
        </Box>
        <Box>
          <FooterUser />
        </Box>
      </Box>
    </Box>
  );  
};
