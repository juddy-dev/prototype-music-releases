'use client'

//CHAKRA
import { 
  Flex, 
  Text, 
  Spinner, 
  AspectRatio 
} from "@chakra-ui/react";

//REACT
import { useEffect } from "react";

//NEXT JS
import { useRouter } from "next/navigation";

//ASSETS
import illustration from "/public/img/auth/init.png";

//INTERNAL COMPONENTS
import { Image } from "components/image/Image";

//AWS
import { Amplify } from "aws-amplify";
import { getCurrentUser } from "aws-amplify/auth";

import configAws from "aws-exports";

//AWS CONFIGURATION
Amplify.configure(configAws);

export default function Home({}) {

  //CONTEXT

  useEffect(()=> {
    AccessLoggedInState();
  }, []);

  //TOASTS
  
  //VARIABLES
  const router = useRouter();

  //STATES

  //FUNCTIONS
  const AccessLoggedInState = async () => {
    try {
        await getCurrentUser();
        router.push('/user/dashboards');
        
    } catch(error) {
        router.push('/auth/sign-in');
    }
  };

  return (
    <Flex
      direction="column"
      justifySelf="center"
      alignContent="center"
      h="100vh"
      w="100%"
      pt="12px"
      pb="64px"
      pr="64px"
      pl="64px"
      bgGradient="linear(to-b, brand.400, brand.600)"
    >      
      <AspectRatio 
        w="100%" 
        maxW={{sm:"100vw", md:"30vw"}} 
        ratio={1 / 1} 
        alignSelf="center"
      >      
        <Image 
          src={illustration} 
          w="100%" alt=""
        /> 
      </AspectRatio>
      <Text
        fontSize="md"
        color="white"
        fontWeight="normal"
        w="100%"
        textAlign="center"
        mt="9px"
        mb="9px"
      >
        please wait while we redirect you...
      </Text>
      <Spinner 
        color="white" 
        size="lg" 
        speed="0.75s"
        alignSelf="center"
      />      
    </Flex>
  );
};
