'use client'

//CHAKRA
import {
    Box,
    Button,
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
import TrackDropzone from "./TrackDropzone";
import { Track } from "types/track";
import { Validators } from "utils/validator";

//DATA
import dataTracks from "variables/users/dataTracks";

function CreateTrack(props) {
  const { artists, idTrack, onSavedTrack } = props;

  useEffect( () => {
    loadTrack();
  }, [idTrack]);

  //VARIABLES
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const brand = useColorModeValue('brand.500', 'brand.400');

  //STATES
  const [ track, setTrack ] = useState(new Track());
  const [ isFormValid, setIsFormValid ] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    artist: "-1",
    idState: 2
  });

  //FUNCTIONS
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  
  const validateForm = () => {
    const isTitleValid = Validators.isValidText(formValues?.title);
    const isArtistValid = formValues.artist !== '-1';
    
    return isTitleValid 
    && isArtistValid;
  };


  const handleFormValidation = (isValid) => {
    setIsFormValid(isValid);
  };
 
  //USEEFFECT
  useEffect(() => {
    const isFormValid = validateForm();
    handleFormValidation(isFormValid); 
  }, [formValues]); 

  useEffect(() => {
    if (!!track) {
      setFormValues({
        title: track.title,
        artist: !!track?.artist?.id ? track?.artist?.id.toString(): '-1',
        idState: track.idState == 1 ? 2 : track.idState
      });

    }
  }, [track]);

  const loadTrack = async () => {
    setTrack(dataTracks.filter(data => data.id == idTrack)[0]);
  };

  const updateTrack = async () => {
    onSavedTrack();
  }


return (
  <Flex
    direction="column"
    minH="100vh"
    align="center"
    pt={{ sm: "15px", lg: "15px" }}
    position="relative"
    gap="24px"
  >
    <Card 
      p="30px"
    >
    <Text 
      color={textColor} 
      fontSize={{base:"2xl", "2xl":"4xl", "3xl":"5xl"}} 
      fontWeight="700" 
      mb="20px"
    >
      Add audio file
    </Text>
      <Flex 
        direction="column" 
        w="100%"
      >
        <SimpleGrid 
          columns={{base: 1, lg: 2}} 
          gap="60px"
        >
          <TrackDropzone
            idTrack={idTrack}
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
                  fontSize={{base:"lg", "2xl":"2xl", "3xl":"4xl"}}
                  fontWeight="400"
                  whiteSpace="pre-wrap"
                  color={textColor}
                >
                  Drop here, or{" "}
                <Text
                  as="span"                        
                  fontSize={{base:"lg", "2xl":"2xl", "3xl":"4xl"}}
                  fontWeight="500"
                  color={brand}
                >
                  browse
                </Text>
              </Text>
            </Box>
            }
          />

          <SimpleGrid 
            columns={1} 
            gap="9px"
          >
            <Text
              color={textColor}
              fontWeight="700"
              fontSize={{base:"lg", "2xl":"2xl", "3xl":"4xl"}}
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
            &middot; 2 channel (stereo)
            </Text>
            <Text
              color={textColor}
              fontWeight="400"
              fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
              textAlign="left"
            >
            &middot; WAV format
            </Text>
            <Text
              color={textColor}
              fontWeight="400"
              fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
              textAlign="left"
            >
            &middot; 16 - 24 bit depth
            </Text>
            <Text
              color={textColor}
              fontWeight="400"
              fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
              textAlign="left"
            >
            &middot; 44100Hz minimun sample rate
            </Text>
            <Text
              color={textColor}
              fontWeight="400"
              fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
              textAlign="left"
            >
            &middot; more than 2 seconds duration
            </Text>
          </SimpleGrid>
        </SimpleGrid>
      </Flex>
    </Card>

    <Card 
      p="30px"
    >
      <Text 
        color={textColor} 
        fontSize={{base:"2xl", "2xl":"4xl", "3xl":"5xl"}}  
        fontWeight="700" 
        mb="20px"
      >
        Add details
      </Text>
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
            Track title
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
            onChange={(e) => handleInputChange(e)} 
          />
        </Flex>

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
            Title version
          </FormLabel>
          <InputField
            fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
            minH="44px"
            mb="0px"
            mt="0px"            
            id="titleVersion"
          />
        </Flex>
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
          Artists
            <Text 
              color={brandStars}
            >
              *
            </Text>
        </FormLabel>
        <Select
          fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
          id="artist"
          variant="main"
          h="44px"
          maxH="44px"
          isRequired={true}
          value={formValues.artist}
          onChange={(e) => handleInputChange(e)} 
        >
          <option 
            value="-1"
          >
            Choose...
          </option>
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

      <Flex 
        justify="end" 
        mt="32px"
      >
        <Button
          variant="darkBrand"
          fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}}
          borderRadius="16px"
          w={{ base: "128px", md: "148px" }}
          h="46px"
          isDisabled={!isFormValid}
          onClick={updateTrack}
        >
          Save
        </Button>
      </Flex>

    </Card>

    </Flex>
  );
};

export default CreateTrack;
