'use client'

//CHAKRA
import { 
  AspectRatio, 
  Icon, 
  Flex, 
  Text, 
  useColorModeValue
} from "@chakra-ui/react";

//REACT
import { useContext } from "react";

//REACT ICONS
import { MdVerified } from "react-icons/md";

//ASSETS
import blank_banner_dark from "/public/img/users/blank_banner_dark.jpg";
import blank_banner_light from "/public/img/users/blank_banner_light.jpg";
import blank_avatar from "/public/img/users/blank_profile.png";

//INTERNAL COMPONENTS
import { Avatar } from "components/image/Avatar";
import { Image } from "components/image/Image";
import { ClientContext } from "contexts/ClientContext";

export default function BannerDashboards() {
  //CONTEXT
  const clientContext = useContext(ClientContext);
  const { accountName, picture, banner } = clientContext;

  //VARIABLES
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('white !important','#111C44 !important');
  const blankBanner = useColorModeValue(blank_banner_light, blank_banner_dark);

  //STATES

  //FUNCTIONS 

  return (
    <Flex
      mb={"10px"}
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
    >
      <AspectRatio 
        ratio={ {sm: 3 / 1, md: 7 / 1 }} 
        width={"100%"}
      >
        <Image
          src={!!banner ? banner : blankBanner}
          w={{ base: "100%", "3xl": "100%" }}
          maxH={{ base: "100%", "3xl": "27.5vh" }}
          h={{ base: "160px", md: "100%" }}
          borderRadius="20px"
          alt=""
        />
      </AspectRatio>
        <Avatar
            src={!!picture ? picture : blank_avatar}
            h={{ xl: "170px", sm: "128px" }}
            w={{ xl: "170px", sm: "128px" }}
            border="10px solid"
            mt="-95px"
            mb="10px"
            borderColor={borderColor}
        />
      <Flex 
        align="center" 
        mb="20px"
      >
        <Text
        color={textColorPrimary}
        fontSize={{base: "2xl", lg: "5xl" }}
        fontWeight="700"
        mb="15px"
        lineHeight="100%"
    >
        {accountName}
        </Text>
        <Icon
        as={MdVerified}
        h="16px"
        w="16px"
        color="blue.500"
        mt="3px"
        />
      </Flex>
    </Flex>
  );
};
