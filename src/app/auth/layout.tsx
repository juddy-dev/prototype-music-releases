'use client'

//CHAKRA
import { 
  Box, 
  useColorModeValue 
} from "@chakra-ui/react";

//REACT
import { PropsWithChildren } from "react";

//INTERNAL COMPONENTS
import { isWindowAvailable } from "utils/navigation";

interface AuthProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthProps) {
  //CONTEXT

  //TOASTS
  
  //VARIABLES
  const authBg = useColorModeValue('white', 'navy.900');

  //STATES

  //FUNCTIONS
  if (isWindowAvailable()) document.documentElement.dir = 'ltr';

  return (
    <Box>
        <Box
          bg={authBg}
          float="right"
          minHeight="100vh"
          height="100%"
          position="relative"
          w="100%"
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Box mx="auto" minH="100vh">
            {children}
          </Box>
        </Box>
    </Box>
  );
};
