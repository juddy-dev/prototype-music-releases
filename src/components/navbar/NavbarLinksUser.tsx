'use client';

//CHAKRA
import {
  Box,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

//REACT
import { useContext } from "react";

//REACT ICONS

//NETX JS
import { useRouter } from "next/navigation";

//INTERNAL COMPONENTS
import { SidebarResponsive } from "components/sidebar/Sidebar";
import { ClientContext } from "contexts/ClientContext";
import Configurator from "components/navbar/Configurator";
import routes from "routes";

//AWS
import { Amplify } from "aws-amplify";
import { signOut } from "aws-amplify/auth";
import configAws from "aws-exports";
import { LoadingContext } from "contexts/LoadingContext";

//AWS CONFIGURATION
Amplify.configure(configAws);

export default function NavBarLinksUser() {
  //CONTEXT
  const clientContext = useContext(ClientContext);
  const loader = useContext(LoadingContext);
  const { name, nameInShort } = clientContext;
  
  //VARIABLES
  let menuBg = useColorModeValue('white', 'navy.800');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
  const shadow = useColorModeValue( 
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
  );
  const router = useRouter();

  //STATES
  

  //FUNCTIONS
  const logOut = async () => { 
    //@ts-ignore
    loader.setLoading(true);
    await signOut({ global: true });
    router.push('/auth/sign-in');
  };

  const profileSettings = async () => { 
    router.push('/user/profile');
  };

  return (
    <Flex
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
      bg={menuBg}
      p="10px"
      borderRadius="30px"
      boxShadow={shadow}
      justifyContent="space-between"
    >
      <SidebarResponsive 
        routes={routes} 
      />

      <Flex
        w={{ sm: "100%", md: "auto" }}
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        gap="12px"
      >
        <Configurator />
        <Menu>
          <MenuButton 
            p="0px" 
            style={{ position: "relative" }}
          >
            <Box
              _hover={{ cursor: "pointer" }}
              color="white"
              bgGradient="linear(to-b, brand.400, brand.600)"
              w={{base: "40px", "2xl": "60px"}}
              h={{base: "40px", "2xl": "60px"}}
              borderRadius={"50%"}
            />
            <Center 
              top={0} 
              left={0} 
              position={"absolute"} 
              w={"100%"} 
              h={"100%"}
            >
              <Text 
                fontSize={{base: "md", xl:"lg", "3xl": "2xl"}} 
                fontWeight="bold" 
                color={"white"}
              >
                {nameInShort}
              </Text>
            </Center>
          </MenuButton>
          <MenuList
            boxShadow={shadow}
            p="0px"
            mt="10px"
            borderRadius="20px"
            bg={menuBg}
            border="none"
            w={{base: "256px", lg: "312px", "2xl":"380px", "3xl":"480px"}}
          >
            <Flex 
              w="100%"
            >
              <Text
                p={{base:"16px", xl:"21px", "3xl":"32px"}}
                w="100%"
                borderBottom="1px solid"
                borderColor={borderColor}
                fontSize={{base: "md", "2xl": "2xl", "3xl": "3xl"}}
                fontWeight="700"
                color={textColor}
              >
                👋&nbsp; Hey, {name}
              </Text>
            </Flex>
            <Flex 
              flexDirection="column" 
              p={{base:"10px", xl:"21px", "3xl":"32px"}} 
              gap={{base: "3px", xl:"15px", "3xl":"24px"}}
            >
              <MenuItem
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
                borderRadius="8px"
                px="14px"
                onClick={profileSettings}
              >
                <Text 
                fontSize={{base: "sm", xl:"lg", "3xl": "2xl"}}
                >
                  Profile Settings
                </Text>
              </MenuItem>

              <MenuItem
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
                color="red.400"
                borderRadius="8px"
                px="14px"
                onClick={logOut}
              >
                <Text 
                  fontSize={{base: "sm", xl:"lg", "3xl": "2xl"}}
                >
                  Log out
                </Text>
              </MenuItem>
            </Flex>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
