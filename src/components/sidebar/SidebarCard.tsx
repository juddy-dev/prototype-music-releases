//CHAKRA
import { 
  Box, 
  Flex, 
  Text, 
  Badge, 
  Icon 
} from "@chakra-ui/react";

//REACT ICONS
import { BsArrowsAngleExpand } from "react-icons/bs";

//INTERNAL COMPONENTS
import LineChart from "components/charts/LineChart";
import {
  lineChartDataSidebar,
  lineChartOptionsSidebar,
} from "variables/charts";

export default function SidebarCard(props: {
  mini?: boolean;
  hovered?: boolean;
}) {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { mini, hovered } = props;

  //STATES

  //FUNCTIONS

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bgGradient="linear(to-b, brand.400, brand.600)"
      borderRadius="20px"
      ms={{ base: "auto", "2xl": "0px" }}
      me={{ base: "auto", "2xl": "0px" }}
      mb="32px"
      position="relative"
      maxW="100%"
      w="100%"
    >
      <Icon
        display={mini === true && hovered === false 
          ? "block" : "none"}
        h="26px"
        w="26px"
        my="100px"
        mx="20px"
        color="white"
        as={BsArrowsAngleExpand}
      />
      <Flex
        direction="column"
        mb="12px"
        align="center"
        justify="center"
        px="15px"
        pt="30px"
        display={
          mini === false
            ? "block"
            : mini === true && hovered === true
            ? "block"
            : "none"
        }
      >
        <Text
          display={
            mini === false
              ? "block"
              : mini === true && hovered === true
              ? "block"
              : "none"
          }
          fontSize={{ base: "lg", xl: "2xl", "3xl": "4xl" }}
          color="white"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          px="10px"
        >
          $3942.58
        </Text>
        <Text
          display={
            mini === false
              ? "block"
              : mini === true && hovered === true
              ? "block"
              : "none"
          }
          fontSize={{ base: "sm", "2xl": "lg", "3xl": "xl" }}
          color="white"
          px="10px"
          mb="14px"
          textAlign="center"
        >
          Total balance
        </Text>
        <Badge
          display={
            mini === false
              ? "block"
              : mini === true && hovered === true
              ? "block"
              : "none"
          }
          colorScheme="green"
          color="green.500"
          size="lg"
          maxW="max-content"
          mx="auto"
          borderRadius="58px"
          fontSize={{ base: "sm", "2xl": "lg", "3xl": "xl" }}
        >
          +2.45%
        </Badge>
        <Box
          h="160px"
          display={
            mini === false
              ? "block"
              : mini === true && hovered === true
              ? "block"
              : "none"
          }
        >
          <LineChart
            chartData={lineChartDataSidebar}
            chartOptions={lineChartOptionsSidebar}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
