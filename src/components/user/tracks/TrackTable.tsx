'use client'

//CHAKRA
import {
  AspectRatio,
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

//REACT
import * as React from "react";

//REACT ICONS
import { 
  MdCheckCircle, 
  MdEdit, 
  MdOutlineError 
} from "react-icons/md";

//TANSTACK
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

//INTERNAL COMPONENTS
import { Track } from "types/track";
import Card from "components/card/Card";

const columnHelper = createColumnHelper<Track>();

// const columns = columnsDataCheck;
export default function TrackTable(props: { tableData: any, withTitle: boolean, title?: string }) {

  const { tableData, withTitle, title } = props;

  //USEEFFECT
  React.useEffect(() => {
    setData([...tableData]);
  }, [tableData]);

  //VARIABLES
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const bgIcon = useColorModeValue({ bg: 'transparent'},{ bg: 'transparent'});  
  const bgIconHover = useColorModeValue({ bg: 'transparent' },{ bg: 'transparent' });
  const bgIconFocus = useColorModeValue({ bg: 'transparent' },{ bg: 'transparent' });  
  const colorIcon = useColorModeValue('brand.400', 'white');
  const colorIconHover = useColorModeValue({ color: 'brand.800'},{ color: 'brand.400'});
  const colorIconFocus = useColorModeValue({ color: 'brand.900'},{ color: 'brand.400'});
  const colorIconSuccess = useColorModeValue('green.900','green.500');

  const columns = [
    columnHelper.accessor('title', {
      id: 'name',
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
          <AspectRatio 
            ratio={1/1}
          >
            <Image
              src={info.cover}
              w="36px"
              borderRadius="20px"
              alt=""
            />
          </AspectRatio>
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
      id: 'permissions',
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
          fontWeight="600"
        >
          {info.getValue().name}
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
            />}

          {info.getValue() == "COMPLETE" && 
            <Icon 
              as={MdCheckCircle}
              key="complete"
              borderRadius="16px"
              color={colorIconSuccess} 
              width={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
              height={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
            />}
        </Flex>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          color="gray.400"
        >
          
        </Text>
      ),
      cell: (info) => (          
      <Flex 
        direction="row" 
        justifyContent="space-between" 
        gap="18px"
      >
        {
          info.getValue() === 2 &&
          <IconButton 
            aria-label="Edit"
            bg={bgIcon}
            _hover={bgIconHover}
            _active={bgIconFocus}
            _focus={bgIconFocus}
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

  return (
    <Card>
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
        </Box>
      </Flex>
    </Card>
  );
};
