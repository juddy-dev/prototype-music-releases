"use client"

//CHAKRA
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Icon,
  Tag,
  TagLabel,
  TagLeftIcon,
  useColorModeValue,
} from "@chakra-ui/react";

//REACT
import * as React from "react";

//REACT ICONS
import { 
  MdCheckCircle, 
  MdMusicNote, 
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

const columnHelper = createColumnHelper<Track>();

export default function TrackTableRelease(props: { tableData: any}) {
  const { tableData } = props;

  //CONTEXT
  
  //USEEFFECT
  React.useEffect(() => {
    setData([...tableData]);
  }, [tableData]);

  //TOASTS
  
  //VARIABLES
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue("navy.700", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");  
  const colorIcon = useColorModeValue("brand.400", "white");
  const colorIconSuccess = useColorModeValue("green.900","green.500");

  //STATES

  //FUNCTIONS
  const columns = [
    columnHelper.display({
      id: "index",
      size: 60,
      maxSize: 60,
      minSize: 60,
      cell: props => (
        <Tag 
          m="0px"
          size="lg"
          key={props.row.index} 
          variant="outline" 
          color={textColor}
        >
          <TagLeftIcon 
            color={textColor} 
            as={MdMusicNote} 
          />
          <TagLabel 
            color={textColor}
          >
            {props.row.index + 1}
          </TagLabel>
        </Tag>
        ),
      }),
      columnHelper.accessor("title", {
        id: "name",
        maxSize: 320,
        minSize: 150,
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
      columnHelper.accessor("artist", {
        id: "artist",
        maxSize: 320,
        minSize: 150,
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
      columnHelper.accessor("state", {
        id: "state",
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
            {info.getValue() != "COMPLETE" && 
              <Icon 
                as={MdOutlineError}
                key="incomplete"
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
      })
    ];
  const [data, setData] = React.useState(() => [...tableData]);
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

  return (
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
  );
};
