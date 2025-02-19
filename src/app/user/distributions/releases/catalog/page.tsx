'use client'

//CHAKRA
import {
  Box,
  Button,
  Flex,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Select,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Modal,
  useDisclosure,
  Text
} from "@chakra-ui/react";

//REACT
import { 
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
import ReleaseCard from "components/user/releases/ReleaseCard";
import CreateRelease from "components/user/releases/CreateRelease";
import ReleaseTable from "components/user/releases/ReleaseTable";
import { Release } from "types/release";
import { ArtistLabel } from "types/artist-label";

//DATA
import dataRelease from "variables/users/dataReleases";
import dataArtistLabel from "variables/users/dataArtistLabel";

export default function CatalogRelease() {

  //CONTEXT
  const loader = useContext(LoadingContext);
  const sidebar = useContext(SidebarContext);

  useEffect( () => {
    //@ts-ignore
    loader.setLoading(false);
    //@ts-ignore
    sidebar.setToggleSidebar(false);
    loadListArtistLabels();
    loadListReleases();
  }, []);


  //VARIABLES
  const ARTIST = 'ARTIST';
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const buttonBg = useColorModeValue('transparent', 'navy.800');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverButton = useColorModeValue({ bg: 'gray.100' },{ bg: 'whiteAlpha.100' });
  const activeButton = useColorModeValue({ bg: 'gray.200' },{ bg: 'whiteAlpha.200' });

  //STATES
  const [modeGrid, setModeGrid] = useState(true);
  const [ listRelease, setListRelease ] = useState([] as Release[]);
  const [ listReleaseFiltered, setListReleaseFiltered ] = useState([] as Release[]);
  const [ idRelease, setIdRelease ] = useState(0);
  const [ listArtist, setListArtist ] = useState([] as ArtistLabel[]);
  const [ artistFilter, setArtistFilter ] = useState('-1');
  const [ statusFilter, setStatusFilter ] = useState('-1');
  
  //FUNCTIONS
  const toggleModeView = () => {
    setModeGrid(!modeGrid);
  };

  const loadListReleases = async () => {
    setListRelease(dataRelease
      .filter(release => release.idState !== 1));
  };

  const loadListArtistLabels = async () => {
    setListArtist(dataArtistLabel?.filter(resp => resp.type === ARTIST));
  };

  const createRelease = async () => {
    setIdRelease(999);
  }

  const reLoadRelease = () => {
    setIdRelease(0);
    loadListReleases();
  }

  useEffect( () => {
    if (!!idRelease && idRelease > 0) {
      onOpen();
    }
  }, [idRelease]);

  useEffect( () => {
    if (!isOpen) {
      reLoadRelease();
    }
  }, [isOpen]);

  useEffect( () => {
    applyFilters();
  }, [artistFilter, statusFilter, listRelease]);

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
    let filtered = listRelease;
    if (isFilterStatusActive()) {
      filtered = filtered.filter(release => release.idState.toString() === statusFilter);
    }

    if (isFilterArtistActive()) {
      filtered = filtered.filter(release => release.artist.id?.toString() === artistFilter);
    } else if (isFilterVariousArtistActive()) {
      filtered = filtered.filter(release => !release.artist.id);
    }

    setListReleaseFiltered(filtered);
  }

  return (
    <Box
      pt={{ base: "130px", lg: "100px", "2xl": "120px" }}
    >
      {/* BUTTON CREATE RELEASE */}
      <Flex
        w="100%"
        mb="20px"
        justifyContent="end"
      >
        <Button
          type="submit"
          variant="brand"
          fontWeight="500"
          w="min-content"
          fontSize={{ base: "md", "2xl": "xl", "3xl": "2xl" }}
          h={{ base: "44px", "3xl": "64px" }}
          mt="9px"
          mb="9px"
          onClick={createRelease}
        >
          Create release
        </Button>
      </Flex>
  
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
        {listReleaseFiltered.length} Results
      </Text>
  
      {/* CONTENT */}
      {modeGrid && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 4, xl: 4 }}
          gap="20px"
        >
          {listReleaseFiltered?.map((release, index) => (
            <ReleaseCard
              key={index}
              release = {release}
              onCloseEdit={reLoadRelease}
            />
          ))}
        </SimpleGrid>
      )}
  
      {!modeGrid && (
        <ReleaseTable
          withTitle={false}
          tableData={listReleaseFiltered}
          withLastest={false}
          onCloseEdit={reLoadRelease}
        />
      )}
  
      {/* MODAL CREATE RELEASE */}
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
            New release
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
    </Box>
  );
 };
