'use client'

//CHAKRA
import {
  AspectRatio,
  Box,
  Icon,
  Flex,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";

//REACT ICONS
import { 
  MdCheckCircle, 
  MdEdit, 
  MdLink, 
  MdOutlineError 
} from "react-icons/md";

//NETX JS
import { useRouter } from "next/navigation";

//INTERNAL COMPONENTS
import Card from "components/card/Card";
import { Image } from "components/image/Image";
import { Release } from "types/release";
import { Validators } from "utils/validator";
import { ArtistLabel } from "types/artist-label";
import CreateRelease from "./CreateRelease";
import { useEffect } from "react";

export default function ReleaseCard(props: { release: Release, onCloseEdit }) {    
  const { release, onCloseEdit } = props;


  //VARIABLES
  const router = useRouter();
  const textColor = useColorModeValue('navy.700', 'white');
	const bgIconLink = useColorModeValue('brand.400', 'brand.600');
	const bgIconSuccess = useColorModeValue('transparent', 'transparent');
  const colorIconLink = useColorModeValue('white', 'white');
  const colorIcon = useColorModeValue('brand.300', 'white');
  const colorIconSuccess = useColorModeValue('green.900','green.500');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgIcon = useColorModeValue({ bg: 'transparent'},{ bg: 'transparent'});  
  const bgIconHover = useColorModeValue({ bg: 'transparent' },{ bg: 'transparent' });
  const bgIconFocus = useColorModeValue({ bg: 'transparent' },{ bg: 'transparent' });  
  const colorIconHover = useColorModeValue({ color: 'brand.800'},{ color: 'brand.400'});
  const colorIconFocus = useColorModeValue({ color: 'brand.900'},{ color: 'brand.400'});
  
  //STATES

  //USE EFFECT
  useEffect( () => {
    if (!isOpen) {
      onCloseEdit();
    }
  }, [isOpen]);

  //FUNCTIONS
  const redirect = () => {
    router.push('/user/distributions/releases/detail?id='+release?.id);
  };

  const isMultipleArtist = (artist: ArtistLabel) => {
    if (Validators.isValidNumber(artist?.id)) {
      return artist.name;
    }
    return 'Various Artist';
  }

  return (
    <Card 
      p="20px" 
      cursor="pointer"
    >
      <Flex 
        direction={{ base: "column" }} 
        justify="center" 
        gap="9px"
      >
        <Box 
          mb={{ base: "20px", "3xl": "20px" }} 
          position="relative"
        >
          <AspectRatio 
            ratio={7 / 5} 
            w="100%"
          >
            <Image
                src={release?.cover}
                w="100%"
                borderRadius="20px"
                alt=""
                onClick={redirect} 
            />
          </AspectRatio>
          <Icon 
            as={MdLink}
            position="absolute"
            top="5%"
            right="5%"
            key="complete"
            bg={bgIconLink}
            borderRadius="32px"
            p="3px"
            color={colorIconLink}
            h={{base:"40px", "2xl":"44px", "3xl":"48px"}}
            w={{base:"40px", "2xl":"44px", "3xl":"48px"}}
          />
        </Box>
        <Flex 
          flexDirection="column" 
          justify="space-between" 
          h="100%"
          onClick={redirect} 
        >
          <Flex direction="column">
            <Text
              color={textColor}
              fontSize={{ base: "xl", lg: "lg", "3xl": "2xl" }}
              mb="5px"
              fontWeight="bold"
              me="14px"
            >
              {release?.title}
            </Text>
            <Text
              color="secondaryGray.800"
              fontSize={{ base: "sm", lg: "md", "3xl": "xl" }}
              fontWeight="500"
              me="14px"
            >
              {isMultipleArtist(release?.artist)}
            </Text>

            <Flex 
              gap="12px" 
              alignItems="center"
            >
              {release?.state !== "COMPLETE" && 
                <Icon 
                  as={MdOutlineError}
                  key="complete"
                  color={colorIcon}
                  h={{base:"20px", "3xl":"40px"}}
                  w={{base:"20px", "3xl":"40px"}}
                />}
              {release?.state == "COMPLETE" && 
                <Icon as={MdCheckCircle}
                  key="complete"
                  bg={bgIconSuccess}
                  borderRadius="16px"
                  color={colorIconSuccess}
                  h={{base:"20px", "3xl":"40px"}}
                  w={{base:"20px", "3xl":"40px"}}
                />}
              <Text
                color="secondaryGray.600"
                fontSize={{ base: "sm", lg: "md", "3xl": "xl" }}
                fontWeight="400"
                me="14px"
              >
                {release?.state}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* ACTIONS */}
        <Flex 
          flexDirection="row" 
          justify="flex-end" 
          w="100%"
        >
          { release.idState == 2 &&
            <IconButton 
              aria-label="Edit"
              bg={bgIcon}
              _hover={bgIconHover}
              _active={bgIconFocus}
              _focus={bgIconFocus}
              onClick={onOpen}
              icon={
                <Icon 
                  as={MdEdit} 
                  width={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
                  height={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
                  color={colorIcon}
                  _hover={colorIconHover}
                  _active={colorIconFocus}
                  _focus={colorIconFocus} 
                />
              }
            />
          }
        </Flex>
      </Flex>

      {/* MODAL EDIT RELEASE */}
      <Modal
        onClose={onClose}
        size="full"
        isOpen={isOpen}
        scrollBehavior="inside"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader 
            fontSize={{ base: "xl", "2xl": "2xl", "3xl": "3xl" }}
          >
            Edit release
          </ModalHeader>
          <ModalCloseButton 
            fontSize={{ base: "sm", "2xl": "lg", "3xl": "xl" }} 
          />
          <ModalBody>
            <CreateRelease 
              idRelease={release?.id}
              onSavedRelease={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Card>
  );
};
