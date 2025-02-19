'use client';

//CHAKRA
import { 
  ButtonProps,
  Button 
} from "@chakra-ui/react";

//NEXT JS
import NextLink, { 
  LinkProps as NextLinkProps 
} from "next/link";

type LinkProps = ButtonProps & NextLinkProps;

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  
  //STATES

  //FUNCTIONS

function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink 
      href={href} passHref legacyBehavior
    >
      <Button
        bg="none"
        _hover={{ bg: "none" }}
        textAlign="start"
        maxW="max-content"
        mx="unset"
        as="a"
        px="0px"
        h="max-content"
        {...props}
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default Link;
