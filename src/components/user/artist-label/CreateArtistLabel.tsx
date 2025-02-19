'use client'

//CHAKRA
import {
    Box,
    Button,
    Flex,
    FormLabel,
    Icon,
    Radio,
    RadioGroup,
    Stack,
    Text,
    Textarea,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";

//REACT
import React, { 
  useState 
} from "react";

//REACT ICONS
import { MdCloudUpload } from "react-icons/md";

//INTERNAL COMPONENTS
import InputField from "components/fields/InputField";
import ArtistLabelDropzone from "./ArtistLabelDropzone";

function CreateArtistLabel(props) {
    const { label, onClose } = props;
    
    //VARIABLES
    const toast = useToast();
    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const brandStars = useColorModeValue('brand.500', 'brand.400');
    const brand = useColorModeValue('brand.500', 'brand.400');

    //TOASTS
    const showError = (message: string, seconds: number = 10) => {
      return toast({
      position: 'top-right',
      title: 'Oops!',
      description: message,
      status: 'error',
      duration: seconds * 1000,
      isClosable: true,
      });
    };
    
    //STATES
    const [ name, setName ] = useState('');
    const [ withSpotify, setWithSpotify ] = useState(false);
    const [ withApple, setWithApple ] = useState(false);
    const [ description, setDescription ] = useState('');
    const [ urlSpotify, setUrlSpotify ] = useState('');
    const [ urlApple, setUrlApple ] = useState('');

    //FUNCTIONS
    const checkSpotify = (value) => {
        setWithSpotify(value == 'Y');
    };

    const checkApple = (value) => {
        setWithApple(value == 'Y');
    };

    const createArtist = async () => {
      onClose();
    };

    const createLabel = async () => {
      onClose();
    };

    const save = () => {
      console.log(description);//replace this line with your code
      if (label && validLabelForm()) {
        createLabel();
      } else if (!label && validArtistForm()) {
        createArtist();

      } else {
        showError('Please complete the required fields');
      }
    };

    const validArtistForm = () => {
      let validApple = (withApple && urlApple) || !withApple;
      let validSpotify = (withSpotify && urlSpotify) || !withSpotify;
      return name && validApple && validSpotify;
    };

    const validLabelForm = () => {
      return name;
    };

  return (
    <Flex 
      direction="column" 
      w="100%" 
      gap="3px"
    >
      <FormLabel
        fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
        fontWeight="500"
        color={textColor}
        display="flex"
        mb="0px"
      >
        {label ? "Label image" : "Artist image"}
      </FormLabel>
      <ArtistLabelDropzone
        mb="9px" 
        label={label}
        content={
          <Box>
            <Icon
              as={MdCloudUpload}
              w={{base: "24px", lg:"30px", "2xl": "36px"}}
              h={{base: "24px", lg:"30px", "2xl": "36px"}}
              m={{base: "6px",  xl: "9px"}}
              color={textColor}
            />
            <Text
              mx="auto"
              fontSize={{base:"sm",  lg: "lg","2xl":"2xl", "3xl":"3xl"}}
              fontWeight="400"
              whiteSpace="pre-wrap"
              color={textColor}
              mb="6px"
            >
              Drop here, or{" "}
              <Text
                as="span"
                fontSize={{base:"sm",  lg: "lg","2xl":"2xl", "3xl":"3xl"}}
                fontWeight="500"
                color={brand}
              >
                browse
              </Text>
            </Text>
            <Text
              fontSize={{base:"xs", lg: "md", "2xl":"xl"}}
              fontWeight="400"
              color="secondaryGray.500"
            >
              PNG, JPG and JPEG files are allowed
            </Text>
          </Box>
        }
      />            
        <FormLabel
          fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
          fontWeight="500"
          color={textColor}
          display="flex"
          mb="0px"
        >
          Official name<Text color={brandStars}>*</Text>
        </FormLabel>
        <InputField
          mb="12px"
          fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
          minH="44px"
          id="name"
          isRequired={true}
          placeholder={label ? "" : "Official Artist/Band Name"}
          onChange={(e) => setName(e.target.value)}
        />
        { !label && 
          <FormLabel
            fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
            fontWeight="500"
            color={textColor}
            display="flex"
            mb="0px"
          >
              Artist Already on Spotify?
            <Text 
                color={brandStars}
            >
              *
            </Text>
          </FormLabel>
        }
        { !label &&             
          <RadioGroup 
            mb="12px" 
            onChange={(e) => checkSpotify(e)}
          >
            <Stack 
              direction={{base: "column", lg: "column" }} 
              gap="3px"
            >
            <Radio 
              value="N"
              size={{base:"sm", xl:"md", "2xl":"lg"}}
            >
              No, create a new Spotify profile for this artist.
            </Radio>
            <Radio 
              value="Y"
              size={{base:"sm", xl:"md", "2xl":"lg"}}
            >
              Yes
            </Radio>
            </Stack>
          </RadioGroup>
        }
        { withSpotify &&
          <InputField
            mb="12px"
            fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
            minH="44px"
            id="urlSpotify"
            isRequired={true}
            placeholder={label ? "" : "Artist Spotify Id"}
            onChange={(e) => setUrlSpotify(e.target.value)}
          />
        }
        { !label && 
          <FormLabel
            fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
            fontWeight="500"
            color={textColor}
            display="flex"
            mb="0px"
        >
          Artist Already on Apple Music?
            <Text 
              color={brandStars}
            >
              *
            </Text>
          </FormLabel>
        }
        { !label &&             
          <RadioGroup 
            mb="12px" 
            onChange={(e) => checkApple(e)}
          >
            <Stack 
              direction={{base: "column", lg: "column" }}  
              gap="3px"
            >
              <Radio 
                value="N"
                size={{base:"sm", xl:"md", "2xl":"lg"}}
              >
                No, create a new Apple Music/iTunes profile for this artist.
              </Radio>
              <Radio 
                value="Y"
                size={{base:"sm", xl:"md", "2xl":"lg"}}
              >
                Yes
              </Radio>
            </Stack>
          </RadioGroup>
        }
        { withApple &&
          <InputField
            mb="12px"
            fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
            minH="44px"
            id="urlApple"
            isRequired={true}
            placeholder={label ? "" : "Artist Apple Id"}
            onChange={(e) => setUrlApple(e.target.value)}
          />
        }
        <FormLabel
          fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
          fontWeight="500"
          color={textColor}
          display="flex"
          mb="0px"
        >
          {label ? "Description" : "Biografy"}
        </FormLabel>
        <Textarea 
          id="description"
          mb="9px"
          fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Flex 
          justify="end" 
          mt="9px" 
          mb="18px"
        >
          <Button
            variant="darkBrand"
            fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
            borderRadius="16px"
            w={{ base: "128px", md: "148px" }}
            h="46px"
            onClick={save}
          >
            {label ? "Add label" : "Add artist"}
          </Button>
        </Flex>
    </Flex>
  );
};

export default CreateArtistLabel;
