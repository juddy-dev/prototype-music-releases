'use client'

//CHAKRA
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Text,
  useColorModeValue,
  Checkbox,
  Stack,
  CheckboxGroup,
  useCheckboxGroup,
  InputLeftElement,
  IconButton
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

//REACT
import * as React from "react";

//INTERNAL COMPONENTS
import { Image } from "components/image/Image";
import { Distribution } from "types/distribution";

// const columns = columnsDataCheck;
export default function ServiceDistributionTable(props: { tableData: Distribution[], saveSelected, fromRelease: Distribution[] }) {
  const { tableData, saveSelected, fromRelease } = props;

  React.useEffect( ()=> {
    setList(tableData);
  } , [tableData]);

  React.useEffect( ()=> {
    checkFromRelease()
  } , [fromRelease]);

  //VARIABLES
  const textColor = useColorModeValue('navy.700', 'white');
  const searchIconColor = useColorModeValue('gray.700', 'white');
  const inputBg = useColorModeValue('secondaryGray.300', 'navy.900');

  //STATES
  const [ selected, setSelected ] = React.useState(0);
  const [ list, setList ] = React.useState(tableData);
  const { value, setValue } = useCheckboxGroup({defaultValue: []});

  //FUNCTIONS

  const checkAll = () => {
    if (value.length != tableData.length){
      setValue(tableData.map(i => {return i.name;}));
      setSelected(tableData.length);
    }
  };

  const unCheckAll = () => {
    setValue([]);
    setSelected(0);
  };

  const checkItem = (name: string, checked: boolean) => {
    let list = [...value];
    if (checked) {
      list.push(name);
      setSelected(selected+1);
    } else {
      let index = value.findIndex(v => v == name);
      list.splice(index, 1);
      setSelected(selected-1);
    }
    setValue(list);
  };

  const filterDistribution = (value) => {
    setList(tableData.filter(data => data.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  };



  const checkFromRelease = () => {
    setSelected(fromRelease.length);
    setValue(fromRelease.map(distribution => distribution.name));
  };

  //USE EFFECT

  React.useEffect( () => {
    saveSelected(value);
  }, [value]);


  return (
    <Flex
      direction="column"
      w="100%"
      gap="24px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
      p="9px"
    >
      {
        value.length != tableData.length &&
        <Button
          variant="light"
          fontSize={{base:"md", "2xl":"xl", "3xl":"2xl"}}
          borderRadius="16px"
          minW={{ base: "130px", md: "150px" }}
          minH="46px"
          alignSelf="end"
          onClick={checkAll}
      >
        Distribute all
      </Button>      
      }
      <InputGroup 
        w="100%"
        minH="44px"
        h="fit-content"
        >
          <InputLeftElement>
            <IconButton
              aria-label="search"
              bg="inherit"
              borderRadius="inherit"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={
                <SearchIcon 
                  color={searchIconColor}
                  w={{base: "15px", "2xl": "21px", "3xl": "27px"}} 
                  h={{base: "15px", "2xl": "21px", "3xl": "27px"}} 
                />
              }
            />
          </InputLeftElement>

          <Input
            variant="search"
            fontSize={{base: "sm", "2xl": "2xl" }}
            bg={inputBg}
            color={textColor}
            fontWeight="500"
            _placeholder={{ 
              color: "gray.400",
              fontSize: {base: "sm", "2xl": "2xl" }
            }}
            borderRadius={"30px"}
            placeholder="Search..."
            onChange={ (e) => {filterDistribution(e.target.value)}}
          />
      </InputGroup>

      {selected != 0 && 
        <Flex 
          gap="15px" 
          justifyContent="start" 
          alignItems="center"
        >
          <Text
            color={textColor}
            fontSize={{base:"md", "3xl":"xl"}}
            ms="24px"
            fontWeight="700"
          >
            {selected} selected
          </Text>

          <Button 
            p="0px"
            variant="light"
            fontSize={{base:"sm", "2xl":"md", "3xl":"lg"}}
            borderRadius="16px"
            minW={{ base: "80px", md: "100px" }}
            minH="32px"
            onClick={unCheckAll}
          >
            Deselect all
          </Button>
        </Flex>}

      <CheckboxGroup 
        value={value}
      >
        <Stack 
          spacing={6} 
          direction="column" 
          w="100%"
        >
          {
            list.map((service, index) => (
              <Checkbox 
                key={index}
                size="lg"
                value={service.name}
                colorScheme="brandScheme"
                onChange={(e) => checkItem(service.name, e.target.checked)}
              >
                <Flex 
                  direction="row" 
                  gap="24px" 
                  align="center" 
                  justifyContent="start"
                >
                  <Box 
                    w={{base:"44px", "2xl":"56px"}} 
                    ml="24px"
                  >
                    <AspectRatio 
                      ratio={1/1}
                    >
                      <Image
                        src={service.picture}
                        w={"100%"}
                        alt={service.picture}
                      />
                    </AspectRatio>
                  </Box>
                  <Text 
                    color={textColor}
                    fontSize={{base:"md", "2xl":"xl", "3xl":"2xl"}}
                    fontWeight="700">
                    {service.name}
                  </Text>
                </Flex>
              </Checkbox>
            ))
          }
        </Stack>
      </CheckboxGroup>
    </Flex>
  );
};
