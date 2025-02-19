'use client'

//CHAKRA
import { 
  Flex,
  Text, 
  useColorModeValue 
} from "@chakra-ui/react";

//INTERNAL COMPONENTS
import { Release } from "types/release";

export default function DetailRelease(props: {
  release: Release | undefined
  [x: string]: any 
}) {
  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { release } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  //STATES

  //FUNCTIONS

  return (
    <Flex 
      direction="column"
    >
      <Text 
        color={textColor} 
        fontSize="md" 
        fontWeight="400" 
        lineHeight="100%" 
        alignSelf="end"
      >
        {release?.date}
      </Text>

      <Flex 
        direction="row" 
        gap="18px" 
        justifyContent="space-between" 
        mt="20px"
      >
        <Flex 
          direction="column"
        >
          <Text 
            color={textColor} 
            fontSize="2xl" 
            fontWeight="700"
          >
            Title
          </Text>
          <Text 
            color={textColor} 
            fontSize="lg" 
            fontWeight="400" 
            lineHeight="100%"
          >
            {release?.title}
          </Text>
        </Flex>

      </Flex>

      <Text 
        color={textColor} 
        fontSize="2xl" 
        fontWeight="700" 
        mt="20px"
      >
				Artist
			</Text>
			<Text 
        color={textColor} 
        fontSize="lg" 
        fontWeight="400" 
        lineHeight="100%"
      >
				{release?.artist?.name}
			</Text>

    </Flex>
  );
};
