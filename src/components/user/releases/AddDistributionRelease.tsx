'use client'

//CHAKRA
import {
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";

//REACT
import React from "react";

//INTERNAL COMPONENTS
import Card from "components/card/Card";
import ServiceDistributionTable from "./ServiceDistributionTable";

function AddDistributionRelease(props) {
  const {children, distributions, selected, preloaded} = props;

    //VARIABLES
    const textColor = useColorModeValue('secondaryGray.900', 'white');

    //STATES

    //FUNCTIONS

  return (
    <Card 
      p="30px"
    >
      <Text 
        color={textColor} 
        fontSize={{base:"2xl", "2xl":"4xl", "3xl":"5xl"}}  
        fontWeight="700" mb="20px"
      >
        Distribute
      </Text>
      <Flex 
        direction="column" 
        w="100%"
      >
        <ServiceDistributionTable 
          tableData={distributions}
          saveSelected={selected}
          fromRelease={preloaded}
        />
        {children}
      </Flex>
    </Card>
  );
};

export default AddDistributionRelease;
