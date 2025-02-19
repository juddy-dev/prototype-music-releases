'use client'

//CHAKRA
import {
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue
} from "@chakra-ui/react";

//REACT
import React, { 
  useEffect, 
  useState 
} from "react";

//REACT ICONS
import { MdCloudUpload } from "react-icons/md";

//INTERNAL COMPONENTS
import { HSeparatorLight } from "components/separator/Separator";
import Card from "components/card/Card";
import InputField from "components/fields/InputField";
import ReleaseDropzone from "./ReleaseDropzone";
import { Validators } from "utils/validator";

function AddDetailRelease(props) {
  const {children, artists, release, onFormValidation, onFormData} = props;

  //VARIABLES
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const brand = useColorModeValue('brand.500', 'brand.400');

  //STATES
  const [idRelease, setIdRelease] = useState(0);
  const [urlCover, setUrlCover] = useState('');
  const [formValues, setFormValues] = useState({
    title: '',
    artist: '-1',
    idState: 2
  });

  //USEEFFECT
  useEffect(() => {
    const isFormValid = Object.values(formValues).every(value => value !== '');
    onFormValidation(isFormValid);
    onFormData(formValues);
  }, [formValues, onFormValidation]);

  useEffect(() => {
    if (!!release) {
      setIdRelease(release.id);
      setUrlCover(release.cover);
      setFormValues({
        title: release.title,
        artist: !!release.artist?.id ? release.artist?.id : '-1',
        idState: release.idState == 1 ? 2 : release.idState
      });
    }
  }, [release]);
  
  //FUNCTIONS
  const validateForm = () => {
    const isTitleValid = Validators.isValidText(formValues.title);

    return isTitleValid;
  };

  useEffect(() => {
    const isFormValid = validateForm();
    onFormValidation(isFormValid); 
    onFormData(formValues);
  }, [formValues, onFormValidation]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleArtistChange = (e) => {
    const { value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      artist: value,
    }));
  };



  return (
    <Card 
      p="30px"
    >
      <Text 
        color={textColor} 
        fontSize={{base:"2xl", "2xl":"4xl", "3xl":"5xl"}} 
        fontWeight="700" mb="20px"
      >
        Add release details
      </Text>
      <Flex 
        direction="column" 
        w="100%"
      >
        <SimpleGrid 
          columns={{base: 1, lg: 2}} 
          gap="20px"
        >
        <Flex 
          direction="column"
        >
          <FormLabel
            fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
            fontWeight="500"
            color={textColor}
            display="flex"
            mb="0px"
          >
            Release title
            <Text 
              color={brandStars}
            >
              *
            </Text>
          </FormLabel>
          <InputField
            fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
            minH="44px"
            mb="0px"
            mt="0px"
            id="title"
            isRequired={true}
            value={formValues.title} 
            onChange={handleInputChange}
          />
        </Flex>
        </SimpleGrid>
        <HSeparatorLight 
          mt="32px" 
          mb="32px"
        />
        <FormLabel
            fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
            fontWeight="500"
            color={textColor}
            display="flex"
            mb="0px"
          >
            Upload cover art
              <Text 
                color={brandStars}
              >
                *
              </Text>
        </FormLabel>
        <SimpleGrid 
          columns={{base: 1, lg: 2}} 
          gap="60px" 
          mt="9px"
        >
          <ReleaseDropzone
            idRelease={idRelease}
            urlRelease={urlCover}
            content={
              <Box>
                <Icon
                  as={MdCloudUpload}
                  w="48px"
                  h="48px"
                  color={textColor}
                />
                <Text
                  mx="auto"
                  fontSize={{base:"md", "2xl":"xl", "3xl":"2xl"}}
                  fontWeight="400"
                  whiteSpace="pre-wrap"
                  color={textColor}
                >
                  Drop here, or{" "}
                  <Text
                    as="span"
                    fontSize={{base:"md", "2xl":"xl", "3xl":"2xl"}}
                    fontWeight="500"
                    color={brand}
                  >
                    browse
                  </Text>
                </Text>
                <Text
                  fontSize={{base: "xs", lg: "sm", xl:"lg", "2xl":"xl"}}
                  fontWeight="400"
                  color="secondaryGray.500"                  
                >
                  PNG, JPG, JPEG and JFIF files are allowed
                </Text>
              </Box>
            }
          />
          <SimpleGrid columns={1}>
              <Text
                color={textColor}
                fontWeight="700"
                fontSize={{base:"lg", "2xl":"2xl", "3xl":"4xl"}}
                mx={{ base: "auto", lg: "unset" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Requirements
              </Text>
              <Text
                color={textColor}
                fontWeight="400"
                fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                textAlign="left"
              >
                Please ensure your cover art is square, less than 10 MB and a minimum of 1400px wide (3000px width is recommended for best results).
              </Text>
              <Text
                color={textColor}
                fontWeight="700"
                fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                mt="12px"
                textAlign={{ base: "center", lg: "left" }}
              >
                Your cover art cannot contain:
              </Text>
              <Text
                color={textColor}
                fontWeight="400"
                fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                ml="9px"
                mt="3px"
                textAlign="left"
              >
                &middot; Any text other than the release title and/or artist name
              </Text>
              <Text
                color={textColor}
                fontWeight="400"
                fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                ml="9px"
                mt="3px"
                textAlign="left"
              >
                &middot; Web URLs, social media handles/icons, or contact information
              </Text>
              <Text
                color={textColor}
                fontWeight="400"
                fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                ml="9px"
                mt="3px"
                textAlign="left"
              >
                &middot; Sexually explicit imagery
              </Text>
              <Text
                color={textColor}
                fontWeight="400"
                fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
                ml="9px"
                mt="3px"
                textAlign="left"
              >
                &middot; Third-party logos or trademarks without express written consent from the trademark holder
              </Text>
            </SimpleGrid>
        </SimpleGrid>
        <HSeparatorLight 
          mt="32px" 
          mb="32px"
        />
        <Flex 
          direction="column"
        >
          <FormLabel
            fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
            fontWeight="500"
            color={textColor}
            display="flex"
          >
              Choose Main Primary Artist
              <Text 
                color={brandStars}
              >
                *
              </Text>
          </FormLabel>
          <Select
              mt="9px"
              fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
              id="artist"
              variant="main"
              h="44px"
              maxH="44px"
              isRequired={true}
              onChange={handleArtistChange}
              value={formValues.artist} 
            >
            {
              artists.map( artist => (
              <option 
                key={artist.id} 
                value={artist.id}
              >
                {artist.name}
              </option>))
            }
          </Select>
        
        </Flex>
        <HSeparatorLight 
          mt="32px" 
          mb="32px"
          />
        {children}
      </Flex>
    </Card>
  );
};

export default AddDetailRelease;
