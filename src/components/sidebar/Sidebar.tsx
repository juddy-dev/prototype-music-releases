'use client';

//CHAKRA
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  useColorModeValue,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

//REACT
import React, { 
  PropsWithChildren, 
  useContext 
} from "react";

//REACT ICONS
import { IoMenuOutline } from "react-icons/io5";

//INTERNAL COMPONENTS
import { IRoute } from "types/navigation";
import { ConfiguratorContext } from "contexts/ConfiguratorContext";
import SidebarContent from "components/sidebar/SideBarContent";

export interface SidebarProps extends PropsWithChildren {
  routes: IRoute[];
}

function Sidebar(props: { routes: IRoute[]; [x: string]: any }) {

  //CONTEXT
  const context = useContext(ConfiguratorContext);
  const { mini, hovered, setHovered } = context;
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { routes } = props;
  // this is for the rest of the collapses
  let variantChange = '0.2s linear';
  let shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'unset',
  );

  // Chakra Color Mode
  let sidebarBg = useColorModeValue('white', 'navy.800');
  let sidebarRadius = '30px';
  let sidebarMargins = '0px';

  // SIDEBAR

  return (
    <Box
      display={{ base: "none", xl: "block" }}
      position="fixed"
      minH="100%"
      onMouseEnter={() => {
        //@ts-ignore
        setHovered(true);
      }}
      onMouseLeave={() => {
        //@ts-ignore
        setHovered(false);
      }}
    >
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w={
          mini === false
            ? "285px"
            : mini === true && hovered === true
            ? "285px"
            : "120px"
        }
        ms={{ sm: "16px" }}
        my={{ sm: "16px" }}
        h="calc(100vh - 32px)"
        m={sidebarMargins}
        borderRadius={sidebarRadius}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <SidebarContent 
          mini={mini} 
          hovered={hovered} 
          routes={routes.filter(route => route.sidebar)} 
        />
      </Box>
    </Box>
  );
};

export function SidebarResponsive(props: {
  routes: IRoute[];
  [x: string]: any;
}) {
  let sidebarBackgroundColor = useColorModeValue('white', 'navy.800');
  let menuColor = useColorModeValue('gray.400', 'white');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { routes } = props;

  return (
    <Flex 
      display={{ sm: "flex", xl: "none" }} 
      alignItems="center"
    >
      <Flex 
        /* @ts-ignore*/
        ref={btnRef} 
        w="max-content" 
        h="max-content" 
        onClick={onOpen}
      >
        <Icon
          as={IoMenuOutline}
          color={menuColor}
          my="auto"
          w="20px"
          h="20px"
          me="10px"
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        /* @ts-ignore*/
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          w="285px"
          maxW="285px"
          ms={{ sm: "16px" }}
          my={{ sm: "16px" }}
          borderRadius="16px"
          bg={sidebarBackgroundColor}
        >
          <DrawerCloseButton
            zIndex="3"
            onClick={onClose}
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody 
            maxW="285px" 
            px="0rem" 
            pb="0"
          >
            <SidebarContent 
              mini={false} 
              routes={routes}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
// PROPS

export default Sidebar;
