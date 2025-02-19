'use client'

//CHAKRA
import { Flex } from "@chakra-ui/react";

export default function IconBox(props: { icon: JSX.Element | string; [x: string]: any }) {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { icon, ...rest } = props;

  //STATES

  //FUNCTIONS

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"50%"}
      {...rest}
    >
      {icon}
    </Flex>
  );
};
