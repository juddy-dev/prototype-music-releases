'use client'

//CHARKA
import {
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

//REACT ICONS
import { 
  MdCheckCircle, 
  MdOutlineError, 
  MdOutlineMusicNote 
} from "react-icons/md";

//INTERNAL COMPONENTS
import { Track } from "types/track";
import Card from "components/card/Card";
import DetailTrack from "./DetailTrack";

export default function TrackCard(props: {
  track: Track
}) {
  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { track } = props;
  const textColor = useColorModeValue('navy.700', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const colorIcon = useColorModeValue('brand.300', 'white');
  const colorIconSuccess = useColorModeValue('green.900','green.500');

  //STATES

  //FUNCTIONS

  return (
    <Card 
      p="20px" 
      cursor="pointer" 
      onClick={onOpen}
    >
      <Flex 
        direction={{ base: "column" }} 
        justify="start" 
        gap="6px"
      >
        <Flex 
          direction={{ base: "row" }} 
          justify="space-between"
        >
          <Icon 
            as={MdOutlineMusicNote}
            color={iconColor}
            w={{base: "18px", "2xl": "32px"}}
            h={{base: "18px", "2xl": "32px"}}
            mt="5px"
          />
            <Flex 
              flexDirection="column" 
              justify="space-between" 
              h="100%" 
              w="85%"
            >
              <Flex 
                direction="column"
              >
                <Flex 
                  justifyContent="space-between"
                >
                  <Text
                    color={textColor}
                    fontSize={{ base: "xl", lg: "lg", "2xl": "2xl" }}
                    mb="5px"
                    fontWeight="bold"
                    me="14px"
                  >
                    {track.title}
                  </Text>

                    {track.state !== "COMPLETE" && 
                      <Icon as={MdOutlineError}
                        key="complete"
                        color={colorIcon}
                        width={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
                        height={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
                    />}

                    {track.state == "COMPLETE" && 
                      <Icon as={MdCheckCircle}
                        key="complete"
                        color={colorIconSuccess}
                        width={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
                        height={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
                    />}
                </Flex>
                <Text
                  color="secondaryGray.600"
                  fontSize={{ base: "sm", lg: "md", "2xl": "xl" }}
                  fontWeight="500"
                  me="14px"
                >
                  {track.artist.name}
                </Text>
            </Flex>
          </Flex>
        </Flex>

        <Text
          color={textColor}
          fontSize={{ base: "md", lg: "lg", "2xl": "xl" }}
          fontWeight="bold"
        >
          {track.date}
        </Text>
      </Flex>

    {/* MODAL TRACK DETAILS */}
    <Modal 
      onClose={onClose} 
      size={{base:"md", xl:"lg", "2xl": "2xl", "3xl": "4xl"}}  
      isOpen={isOpen} 
      scrollBehavior="inside"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader 
          fontSize={{base:"xl", "2xl":"2xl", "3xl":"3xl"}}
        >
          Track details
        </ModalHeader>
          <ModalCloseButton 
            fontSize={{base:"sm", "2xl":"lg", "3xl":"xl"}}
          />
          <ModalBody 
            p="24px"
          >
          <DetailTrack 
            track={track}
          >
            </DetailTrack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Card>    
  );
};
