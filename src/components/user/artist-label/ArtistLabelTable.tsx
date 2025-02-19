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
  useColorModeValue
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

//REACT ICONS
import { 
  MdDelete, 
  MdEdit 
} from "react-icons/md";

//INTERNAL COMPONENTS
import { ArtistLabel } from "types/artist-label";
import Card from "components/card/Card";

const columnHelper = createColumnHelper<ArtistLabel>();

// const columns = columnsDataCheck;
export default function ArtistLabelTable(props) {

  const { tableData, onDelete, onEdit } = props;

  React.useEffect(() => {
    setData([...tableData]);
  }, [tableData]);

  //VARIABLES
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const bgIcon = useColorModeValue({ bg: 'transparent'},{ bg: 'transparent'});
  const colorIcon = useColorModeValue('brand.400', 'white');
  const colorIconHover = useColorModeValue({ color: 'brand.800'},{ color: 'brand.400'});
  const colorIconFocus = useColorModeValue({ color: 'brand.900'},{ color: 'brand.400'});

  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <Text
            justifyContent="space-between"
            align="center"
            color="gray.400"
        >
            NAME
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
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
    columnHelper.accessor('id', {
      id: 'id',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          color="gray.400"
        >
          ID
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
    columnHelper.display({
      id: 'actions',
      cell: (info: any) => (
        <Flex 
          direction="row" 
          justifyContent="start" 
          gap="18px"
        >
          <IconButton 
            aria-label="Edit"
            bg={bgIcon}
            w="20px"
            h="20px"
            _hover={bgIcon}
            _active={bgIcon}
            _focus={bgIcon}
            icon={
              <Icon as={MdEdit}
              width={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
              height={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
              color={colorIcon}
              _hover={colorIconHover}
              _active={colorIconFocus}
              _focus={colorIconFocus} 
              />
            }
            onClick={() => editArtistLabel(info.row.original.id)}
          />
          <IconButton 
            aria-label="delete"
            bg={bgIcon}
            w="20px"
            h="20px"
            _hover={bgIcon}
            _active={bgIcon}
            _focus={bgIcon}
            icon={
              <Icon as={MdDelete}
              width={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
              height={{base: "20px", "2xl":"30px", "3xl":"40px"}} 
              color={colorIcon}
              _hover={colorIconHover}
              _active={colorIconFocus}
              _focus={colorIconFocus} 
              />
            }
            onClick={() => deleteArtistLabels(info.row.original.id)}
          />
      </Flex>
      )
    })
  ];

  //STATES
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [data, setData] = React.useState([...tableData]);

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

  const deleteArtistLabels = async (id?: number) => {
    console.log(id);//replace this line with your code
    onDelete();
  };

  const editArtistLabel = (id: number) => {
    onEdit(tableData.find(d => d.id === id));
  };

  return (
    <Card>
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        <Box>
          <Table 
            variant="simple" 
            color="gray.500" 
            mt="12px"
          >
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Th
                        key={header.id}
                        colSpan={header.colSpan}
                        pe="10px"
                        borderColor={borderColor}
                        cursor="pointer"
                        fontSize={{ base: "sm", "2xl": "lg", "3xl": "2xl" }}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <Flex
                          justifyContent="space-between"
                          align="center"
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
