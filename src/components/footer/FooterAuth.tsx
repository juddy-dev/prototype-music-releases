'use client';
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

export default function FooterAuth() {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  let textColor = useColorModeValue('gray.400', 'white');
  let linkColor = useColorModeValue('gray.400', 'white');

  //STATES

  //FUNCTIONS

  return (
    <Flex
      zIndex="3"
      flexDirection={{ base: "column", lg: "row" }}
      alignItems={{ base: "center", xl: "start" }}
      justifyContent="space-between"
      px={{ base: "30px", md: "0px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{ base: "center", xl: "start" }}
        mb={{ base: "20px", lg: "0px" }}
        fontSize={{base: "md", "2xl": "xl" }}
      >
        {" "}
        &copy; {new Date().getFullYear()}
        <Text 
          as="span" 
          fontWeight="500" 
          ms="4px"
        >
          juddy.dev All Rights Reserved.
        </Text>
      </Text>
      <List 
        display="flex"
      >
        <ListItem
          me={{ base: "20px", md: "44px"}}
        >
          <Link
            bg="none"
            _hover={{ bg: "none" }}
            fontWeight="500"
            color={linkColor}
            href="mailto:dev@juddy.dev"
            fontSize={{base: "sm", "2xl": "2xl" }}
          >
            Support
          </Link>
        </ListItem>
        <ListItem
          me={{ base: "20px", md: "44px"}}
        >
          <Link
            bg="none"
            _hover={{ bg: "none" }}
            fontWeight="500"
            color={linkColor}
            href=""
            fontSize={{base: "sm", "2xl": "2xl" }}
          >
            Privacy policy
          </Link>
        </ListItem>
        <ListItem
          me={{ base: "20px", md: "44px"}}
        >
          <Link
            bg="none"
            _hover={{ bg: "none" }}
            fontWeight="500"
            color={linkColor}
            href=""
            fontSize={{base: "sm", "2xl": "2xl" }}
          >
            Terms & Conditions
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
};
