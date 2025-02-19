'use client'

//CHAKRA  
import { 
  AspectRatio, 
  Flex, 
  Text, 
  useColorModeValue, 
  Tag, 
  TagLabel,  
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

//REACT
import { useContext } from "react";

//ASSETS
import blank_banner_dark from "/public/img/users/blank_banner_dark.jpg";
import blank_banner_light from "/public/img/users/blank_banner_light.jpg";
import blank_avatar from "/public/img/users/blank_profile.png";

//INTERNAL COMPONENTS
import { ClientContext } from "contexts/ClientContext";
import { Avatar } from "components/image/Avatar";
import { Image } from "components/image/Image";
import ProfileDropzone from "components/user/profile/ProfileDropzone";
import BannerDropzone from "./BannerDropzone";

export default function BannerProfile() {
  //CONTEXT
  const clientContext = useContext(ClientContext);
  const { accountName, picture, banner, setPicture, setBanner } = clientContext;

  //VARIABLES
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('white !important','#111C44 !important');
  const brand = useColorModeValue('brand.500', 'brand.400');
  const brandLight = useColorModeValue('brand.100', 'brand.100');
  const bg = useColorModeValue('background.100', 'background.900');
  const bgBanner = useColorModeValue('background.900', 'background.100');
  const blankBanner = useColorModeValue(blank_banner_light, blank_banner_dark);

  //STATES

  //FUNCTIONS
  const updateAvatar = (url: any) => {
    //@ts-ignore
    setPicture(url);
  };

  const updateBanner = (url: any) => {
    //@ts-ignore
    setBanner(url);
  };

  return (
    <Flex
      mb="10px"
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
    >
      <Flex  
        direction="column"
        align="end"
        w="100%">
        <AspectRatio 
          ratio={ {sm: 4 / 1, md: 4 / 1 }}
          width="100%"
        >
          <Image 
            bg={bgBanner}
            src={!!banner ? banner : blankBanner}
            w={{ base: "100%", "3xl": "100%" }}
            maxH={{ base: "100%", "3xl": "27.5vh" }}
            h={{ base: "160px", md: "100%" }}
            borderRadius="20px"
            alt=""
          />
        </AspectRatio>
        <BannerDropzone
          updateUrl={updateBanner}
          mt={{ sm: "-45px", md: "-50px", xl: "-8%" }}
          me={{ sm: "3%", md: "4%", xl: "3%" }}
        >
        </BannerDropzone>
      </Flex>
      <Flex  
        justifyContent="center"
        align="center"
        direction="column"
        w="100%">
        <Avatar 
          bg={bg} 
          src={!!picture ? picture : blank_avatar}
          h={{ sm: "96px", xl: "128px", "2xl": "180px" , "3xl": "256px" }}
          w={{ sm: "96px", xl: "128px", "2xl": "180px" , "3xl": "256px" }}
          border="10px solid"
          mt="-75px"
          mb="10px"
          borderColor={borderColor}
        />
        <ProfileDropzone
          updateUrl={updateAvatar}
          mt={{ base: "-45px", md: "-50px", "2xl": "-60px" }}
          me={{ sm: "3%", md: "4%", xl: "1%" }}
          ms={{ base: "60px", md: "80px", "2xl": "128px", "3xl": "156px" }}
        >
        </ProfileDropzone>            
      </Flex>
      <Flex 
        align="center" 
        mb="10px" 
        mt="10px"
      >
        <Text
          color={textColorPrimary}
          fontSize={{base: "lg", lg: "xl", "2xl": "3xl", "3xl": "5xl"}}
          fontWeight="700"
          mb="15px"
          lineHeight="100%"
        >
          {accountName}
        </Text>
      </Flex>
      <Flex 
        hidden direction="column" 
        align="center" 
        mb="10px" 
        mt="10px" 
        gap="12px"
      >
        <Tag 
          size="sm" 
          key="tag1" 
          variant="outline" 
          colorScheme={textColorPrimary} 
          backgroundColor={brandLight} 
          p="12px"
        >
          <WarningTwoIcon 
            color={brand} 
            mr="6px"
          />
          <TagLabel 
            className="without-line-camp" 
            w="100%"
          >
            Please ensure your profile picture is square, less than 512KB (1080px width is recommended).
          </TagLabel>
        </Tag>
        <Tag 
          size="sm" 
          key="tag2" 
          variant="outline" 
          colorScheme={textColorPrimary} 
          backgroundColor={brandLight} 
          p="12px"
        >
          <WarningTwoIcon 
            color={brand} mr="6px"
          />
          <TagLabel 
            className="without-line-camp" 
            w="100%"
          >
            Please ensure your banner picture is rectangular, less than 512 KB (aspect ratio 5:1 is recommended).
          </TagLabel>
        </Tag>
      </Flex>
    </Flex>
  );
};
