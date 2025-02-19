'use client'

//CHAKRA
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";

//TANSTACK
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

//REACT 
import * as React from "react";

//REACT ICONS}
import { 
  MdCheckCircle, 
  MdEdit, 
  MdLink, 
  MdOutlineError 
} from "react-icons/md";

//NEXT JS
import { useRouter } from "next/navigation";

//INTERNAL COMPONENTS
import { Release } from "types/release";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import CreateRelease from "./CreateRelease";
import { ArtistLabel } from "types/artist-label";
import { Validators } from "utils/validator";

const columnHelper = createColumnHelper<Release>();

// const columns = columnsDataCheck;
export default function ReleaseTable(props: { tableData: any, withTitle: boolean, title?: string, withLastest: boolean, onCloseEdit }) {
  const { tableData, withTitle, title, withLastest, onCloseEdit } = props;

  React.useEffect(() => {
    setData([...tableData]);
  }, [tableData]);

  //VARIABLES
  const router = useRouter();
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'secondaryGray.400');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100'); 
  const bgIcon = useColorModeValue({ bg: 'transparent'},{ bg: 'transparent'});  
  const bgIconHover = useColorModeValue({ bg: 'transparent' },{ bg: 'transparent' });
  const bgIconFocus = useColorModeValue({ bg: 'transparent' },{ bg: 'transparent' });  
  const colorIcon = useColorModeValue('brand.400', 'white');
  const colorIconHover = useColorModeValue({ color: 'brand.800'},{ color: 'brand.400'});
  const colorIconFocus = useColorModeValue({ color: 'brand.900'},{ color: 'brand.400'});
  const colorIconSuccess = useColorModeValue('green.900','green.500');
  const brandLight = useColorModeValue('brand.100', 'brand.100');
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const columns = [
    columnHelper.accessor('cover', {
      id: 'cover',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          color="gray.400"
        >
          COVER
        </Text>
      ),
      cell: (info: any) => (
        <Flex 
          align="center"
        >
          <Box 
            w="70%"
          >
            <AspectRatio 
              ratio={1/1}
            >
              <Image
                src={info.getValue()}
                w="100%"
                borderRadius="20px"
                alt=""
                />
            </AspectRatio>
          </Box>
        </Flex>
      ),
    }),
    columnHelper.accessor('title', {
      id: 'title',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          color="gray.400"
        >
          TITLE
        </Text>
      ),
      cell: (info: any) => (
        <Flex 
          align="center"
        >
          <Flex 
            direction="column"
          >
            <Text 
              color={textColor} 
              fontWeight="700"
            >
              {info.getValue()}
            </Text>
          </Flex>
        </Flex>
      ),
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          color="gray.400"
        >
          DATE
        </Text>
      ),
      cell: (info) => (
        <Text 
          color={textColor}
          fontWeight="600"
        >
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('artist', {
      id: 'artist',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          color="gray.400"
        >
          ARTIST
        </Text>
      ),
      cell: (info) => (
        <Text 
          color={textColor}
          fontWeight="600">
            {isMultipleArtist(info.getValue())}
        </Text>
      ),
    }),
    columnHelper.accessor('state', {
      id: 'state',
      size: 128,
      maxSize: 128,
      minSize: 128,
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          color="gray.400"
        >
          STATUS
        </Text>
      ),
      cell: (info) => (
        <Flex 
          direction="row" 
          w="100%" 
          justifyContent="start" 
          alignItems="center"
        >
          {info.getValue() !== "COMPLETE" && 
            <Icon 
              as={MdOutlineError}
              key="complete"
              borderRadius="16px"
              color={colorIcon} 
              width={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
              height={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
            />
          }

          {info.getValue() == "COMPLETE" && 
            <Icon 
              as={MdCheckCircle}
              key="complete"
              borderRadius="16px"
              color={colorIconSuccess} 
              width={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
              height={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
          />
          }
        </Flex>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      cell: (info) => (      
      <Flex 
        direction="row" 
        justifyContent="space-between" 
        gap="18px"
      >
        <IconButton 
          aria-label="link"
          bg={bgIcon}
          _hover={bgIconHover}
          _active={bgIconFocus}
          _focus={bgIconFocus}
          icon={
            <Icon 
              as={MdLink} 
              width={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
              height={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
              color={colorIcon}
              _hover={colorIconHover}
              _active={colorIconFocus}
              _focus={colorIconFocus} 
            />
          }
        />
        { info?.cell?.row?.original?.idState == 2 &&
          <IconButton 
            aria-label="Edit"
            bg={bgIcon}
            _hover={bgIconHover}
            _active={bgIconFocus}
            _focus={bgIconFocus}
            onClick={() => editRelease(info?.cell?.row?.original?.id)}
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
      )
    })
  ];

  //STATES
  const [ idRelease, setIdRelease ] = React.useState(0);
  const [data, setData] = React.useState(() => [...tableData]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  //FUNCTIONS
  const redirect = (id: string, cell: string) => {
    if (!cell.includes('actions')) {
      router.push('/user/distributions/releases/detail/?id='+id);
    }
  }

  const createRelease = async () => {
    setIdRelease(999);
  }

  const editRelease = (idRelease: any) => {
    setIdRelease(idRelease);
  }

  const isMultipleArtist = (artist: ArtistLabel) => {
    if (Validators.isValidNumber(artist?.id)) {
      return artist.name;
    }
    return 'Various Artist';
  }

  React.useEffect( () => {
    if (!!idRelease) {
      onOpen();
    }
  }, [idRelease]);

  React.useEffect( () => {
    if (!isOpen) {
      setIdRelease(0);
      onCloseEdit();
    }
  }, [isOpen]);

  return (
    <Card>
      {
        withLastest && (data.length != 0) && 
        <Flex 
          mb="48px" 
          direction="row" 
          gap="20px"
        >
          <AspectRatio 
            w="100%" 
            maxW={{sm: "50%", md: "20%", lg:"15%"}} 
            ratio={1 / 1}
          >
            <Image
              src={data?.at(0)?.cover}
              w="100%"
              borderRadius="20px"
              alt=""
            />
        </AspectRatio>
          <Flex 
            direction="column" 
            gap="3px"
          >          
            <Text
              color={textColorSecondary}
              me="auto"
              fontSize={{ base: "sm", "2xl": "xl", "3xl": "2xl" }}
              fontWeight="400"
            >
              LAST RELEASE
            </Text>

            <Text
              color="secondaryGray.800"
              me="auto"
              fontSize={{ base: "sm", "2xl": "xl", "3xl": "2xl"  }}
              fontWeight="500"
              mb="17px"
            >
              {data?.at(0)?.date}
            </Text>

            <Text
                color={textColorPrimary}
                fontSize={{ base: "xl", "2xl": "3xl", "3xl": "5xl"  }}
                fontWeight="700"
                mb="9px"
                lineHeight="100%"
            >
                {data?.at(0)?.title}
            </Text>

            <Text
              color={textColorPrimary}
              me="auto"
              fontSize={{ base: "lg", "2xl": "xl", "3xl": "2xl" }}
              fontWeight="500"
            >
               {data?.at(0)?.artist?.name}
            </Text>          
          </Flex>
        </Flex>
      }
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        {
          withTitle && 
          <Flex
            align={{ lg: "center" }}
            justify={{ base: "space-between" }}
            w="100%"
            px="20px"
            mb="20px"
          >
            <Text
              color={textColor}
              fontSize={{ base: "xl", "2xl": "2xl", "3xl": "3xl" }}
              fontWeight="600"
              lineHeight="100%"
            >
              {title}
            </Text>
          </Flex>
        }
        <Box>
          { (data.length == 0) &&
          
            <Tag 
              mb="3px" 
              size="lg"
              w="100%"
              key="tagNewRelease" 
              variant="outline" 
              colorScheme={textColor} 
              backgroundColor={brandLight} 
              minH="12px" 
              p="12px"
            >
                <TagLabel 
                  fontSize={{base:"sm", "2xl":"xl", "3xl":"2xl"}} 
                  className="without-line-camp" 
                  minH="16px" 
                  w="100%"
                >
                You don't have a release yet
                </TagLabel>
                <Button 
                  mb="0px"           
                  fontSize={{ base: "md", "2xl": "xl", "3xl": "2xl" }}
                  variant="outline"
                  fontWeight="600"
                  w="min-content"
                  h={{ base: "44px", "3xl": "64px" }}
                  colorScheme={textColor}
                  onClick={createRelease}
                >
                  Create release
                </Button>
            </Tag>
          }

          { (data.length != 0) &&
          <Table 
            variant="simple" 
            color="gray.500" 
            mt="12px"
          >
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr 
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <Th
                        key={header.id}
                        colSpan={header.colSpan}
                        pe="10px"
                        borderColor={borderColor}
                        cursor="pointer"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <Flex
                          justifyContent="space-between"
                          align="center"
                          fontSize={{ base: "sm", "2xl": "lg", "3xl": "2xl" }}
                          color="gray.400"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: "",
                            desc: "",
                          }[header.column.getIsSorted() as string] ?? null}
                        </Flex>
                      </Th>
                    );
                  })}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {table
                .getRowModel()
                .rows.slice(0, 11)
                .map((row) => {
                  return (
                    <Tr 
                      key={row.id} 
                      cursor="pointer"
                      >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <Td
                            key={cell.id}
                            fontSize={{ base: "sm", "2xl": "lg", "3xl": "2xl" }}
                            minW={{ sm: "150px", md: "200px", lg: "auto" }}
                            borderColor="transparent"
                            onClick={() => redirect(row.original.id, cell.id)}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </Td>
                        );
                      })}
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
          }
        </Box>
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
              idRelease={idRelease}
              onSavedRelease={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

    </Card>
  );
};
