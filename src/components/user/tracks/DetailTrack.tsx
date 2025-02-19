'use client'

//CHAKRA
import { 
  Flex, 
  Text,
  useColorModeValue 
} from "@chakra-ui/react";

//INTERNAL COMPONENTS
import { Track } from "types/track";

export default function DetailTrack(props: {
  track: Track | undefined
  [x: string]: any 
}) {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { track } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');

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
        mb="9px"
      >
        {track?.date}
      </Text>

      <Flex 
        direction="row" 
        gap="18px" 
        justifyContent="space-between"
      >
        <Flex 
          direction="column"
        >
          <Text 
            color={textColor} 
            fontSize="2xl" 
            fontWeight="700" 
            mt="0px"
          >
            Title
          </Text>
          <Text 
            color={textColor} 
            fontSize="lg" 
            fontWeight="400" 
            lineHeight="100%"
          >
            {track?.title}
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
				{track?.artist.name}
			</Text>

    </Flex>
  );
};
