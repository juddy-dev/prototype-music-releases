'use client'

//CHAKRA
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  SimpleGrid,
  Select
} from "@chakra-ui/react";

//REACT
import React, {
  useContext, 
  useEffect, 
  useState 
} from "react";

//REACT ICONS
import {
  MdApps,
  MdReorder
} from "react-icons/md";

//INTERNAL COMPONENTS
import { LoadingContext } from "contexts/LoadingContext";
import { SidebarContext } from "contexts/SidebarContext";
import TrackCard from "components/user/tracks/TrackCard";
import TrackTable from "components/user/tracks/TrackTable";
import { ArtistLabel } from "types/artist-label";
import { Track } from "types/track";

//DATA
import dataArtistLabel from "variables/users/dataArtistLabel";
import dataTracks from "variables/users/dataTracks";

export default function CollectionTracks() {

  //CONTEXT
  const loader = useContext(LoadingContext);
  const sidebar = useContext(SidebarContext);

  useEffect( () => {
    //@ts-ignore
    loader.setLoading(false);
    //@ts-ignore
    sidebar.setToggleSidebar(false);
    loadListArtistLabels();
    loadListTracks();
  }, []);


  //VARIABLES
  const ARTIST = 'ARTIST';
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const buttonBg = useColorModeValue('transparent', 'navy.800');
  const hoverButton = useColorModeValue({ bg: 'gray.100' },{ bg: 'whiteAlpha.100' });
  const activeButton = useColorModeValue({ bg: 'gray.200' },{ bg: 'whiteAlpha.200' });

  //STATES
  const [ modeGrid, setModeGrid ] = useState(false);
  const [ listTracks, setListTracks ] = useState([] as Track[]);
  const [ listTracksFiltered, setListTracksFiltered ] = useState([] as Track[]);
  const [ listArtist, setListArtist ] = useState([] as ArtistLabel[]);
  const [ artistFilter, setArtistFilter ] = useState('-1');
  const [ statusFilter, setStatusFilter ] = useState('-1');
  
  //FUNCTIONS
  const toggleModeView = () => {
    setModeGrid(!modeGrid);
  };

  const loadListTracks = async () => {
    setListTracks(dataTracks
      .filter(track => track.idState !== 1));
  };


  const loadListArtistLabels = async () => {
    setListArtist(dataArtistLabel?.filter(resp => resp.type === ARTIST));
  };

  useEffect( () => {
    applyFilters();
  }, [artistFilter, statusFilter, listTracks]);

  const handleChangeArtist = (e) => {
    const { value } = e.target;
    setArtistFilter(value);
  }

  const handleChangeStatus= (e) => {
    const { value } = e.target;
    setStatusFilter(value);
  }

  const isFilterArtistActive = () => {
    return !!artistFilter && artistFilter !== '0' && artistFilter !== '-1';
  }

  const isFilterVariousArtistActive = () => {
    return !!artistFilter && artistFilter === '0';
  }

  const isFilterStatusActive = () => {
    return !!statusFilter && statusFilter !== '-1';
  }

  const applyFilters = () => {
    let filtered = listTracks;
    if (isFilterStatusActive()) {
      filtered = filtered.filter(release => release.idState.toString() === statusFilter);
    }

    if (isFilterArtistActive()) {
      filtered = filtered.filter(release => release.artist.id?.toString() === artistFilter);
    } else if (isFilterVariousArtistActive()) {
      filtered = filtered.filter(release => !release.artist.id);
    }

    setListTracksFiltered(filtered);
  }

  return (
    <Box
      pt={{ base: "130px", lg: "100px", "2xl": "120px" }}
    >
      {/* FILTERS */}
      <Flex
        w="100%"
        mb="20px"
      >
        <Select
          id="filterArtist"
          variant="main"
          fontSize={{ base: "sm", "2xl": "xl", "3xl": "2xl" }}
          minH={{ base: "44px", "2xl": "64px" }}
          me={{ base: "10px", md: "20px" }}
          value={artistFilter}
          onChange={handleChangeArtist}
        >
          <option 
            key='allArtist'
            value="-1"
          >
            All artist
          </option>
          <option 
            key='variousArtist'
            value="0"
          >
            Various Artist
          </option>
          {
            listArtist.map(artist => (
            <option 
              key={artist.id}
              value={artist?.id}
            >
              {artist.name}
            </option>
            ))
          }
        </Select>
  
        <Select
          id="filterStatus"
          variant="main"
          fontSize={{ base: "sm", "2xl": "xl", "3xl": "2xl" }}
          minH={{ base: "44px", "2xl": "64px" }}
          me={{ base: "10px", md: "20px" }}
          value={statusFilter}
          onChange={handleChangeStatus}
        >
          <option 
            key='allStatus'
            value="-1"
          >
            All Status
          </option>
          <option 
            key='incomplete'
            value="2"
          >
            Incomplete
          </option>
          <option 
            key='complete'
            value="3"
          >
            Complete
          </option>
        </Select>
  
        <Button
          me={{ base: "10px", md: "20px" }}
          bg={buttonBg}
          border="1px solid"
          color="secondaryGray.600"
          borderColor={useColorModeValue(
            "secondaryGray.100",
            "whiteAlpha.100"
          )}
          borderRadius="16px"
          _placeholder={{ color: "secondaryGray.600" }}
          _hover={hoverButton}
          _active={activeButton}
          _focus={activeButton}
          onClick={toggleModeView}
          w={{ base: "44px", "2xl": "64px" }}
          h={{ base: "44px", "2xl": "64px" }}
        >
          <Icon
            color={textColor}
            as={modeGrid ? MdReorder : MdApps}
            w={{ base: "20px", "2xl": "32px" }}
            h={{ base: "20px", "2xl": "32px" }}
          />
        </Button>
      </Flex>
  
      <Text
        mt="25px"
        mb="36px"
        color={textColor}
        fontSize={{ base: "2xl", "3xl": "3xl" }}
        ms="24px"
        fontWeight="700"
      >
        {listTracksFiltered.length} Results
      </Text>
  
      { !modeGrid && (
        <TrackTable
          withTitle={false}
          tableData={listTracksFiltered}
        />
      )}
  
      { modeGrid && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 4, xl: 4 }}
          gap="20px"
        >
          {listTracksFiltered?.map((track, index) => (
            <TrackCard
              key={index}
              track={track}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );  
};
