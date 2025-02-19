'use client'

//CHAKRA
import { 
  Card, 
  Flex, 
  Text, 
  useColorModeValue 
} from "@chakra-ui/react";

export default function SettingsProfile() {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
	const bgCard = useColorModeValue('transparent', 'navy.800');
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'secondaryGray.600';

  //STATES

  //FUNCTIONS

  return (
    <Card 
      p="12px" 
      bg={bgCard}
    >
      <Flex 
        direction="column" 
        mb="40px" 
        ms="10px"
      >
        <Text 
          fontSize={{base: "xl", "2xl": "2xl", "3xl": "3xl"}} 
          color={textColorPrimary} 
          fontWeight="bold"
        >
          Account Settings
        </Text>
        <Text 
          fontSize={{base: "md", "2xl": "xl", "3xl": "2xl"}} 
          color={textColorSecondary}
        >
          Here you can change user account information
        </Text>
      </Flex>        
    </Card>
  );
};
