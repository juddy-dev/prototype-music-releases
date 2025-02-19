'use client'
/*eslint-disable*/

//CHAKRA
import {
  Flex,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

//INTERNAL COMPONENTS
import Link from "components/link/Link";

export default function FooterUser() {
  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const textColor = useColorModeValue('gray.400', 'white');

  //STATES

  //FUNCTIONS

  return (
    <Flex
      zIndex="3"
      flexDirection={{ base: "column", xl: "row" }}
      alignItems={{ base: "center", xl: "start" }}
      justifyContent="space-between"
      px={{ base: "30px", md: "50px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{ base: "center", xl: "start" }}
        mb={{ base: "20px", xl: "0px" }}
        fontSize={{ base: "sm", "2xl": "2xl" }}
      >             
        {" "}
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="4px">
        juddy.dev All Rights Reserved.
        </Text>
      </Text>
  
      <List 
        display="flex"
      >
        <ListItem 
          me={{ base: "20px", md: "44px" }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href="mailto:dev@juddy.dev"
            fontSize={{ base: "sm", "2xl": "2xl" }}
          >
            Support
          </Link>
        </ListItem>      
        <ListItem 
          me={{ base: "20px", md: "44px" }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href=""
            fontSize={{ base: "sm", "2xl": "2xl" }}
          >
            Privacy policy
          </Link>
        </ListItem>
        <ListItem 
          me={{ base: "20px", md: "44px" }}
        >
          <Link
            fontWeight="500"
            color={textColor}
            href=""
            fontSize={{ base: "sm", "2xl": "2xl" }}
          >
            Terms & Conditions
          </Link>
        </ListItem>
      </List>
    </Flex>
  ); 
};
