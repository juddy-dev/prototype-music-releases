'use client';

//CHAKRA
import {
  Button, 
  Box, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay, 
  Text, 
  useColorModeValue, 
  useDisclosure, 
  Tabs, 
  TabList, 
  Tab, 
  TabPanels, 
  TabPanel
} from "@chakra-ui/react";

//REACT
import React, {
  useContext, 
  useEffect, 
  useState 
} from "react";

//INTERNAL COMPONENTS
import { LoadingContext } from "contexts/LoadingContext";
import { SidebarContext } from "contexts/SidebarContext";
import EditArtistLabel from "components/user/artist-label/EditArtistLabel";
import ArtistLabelTable from "components/user/artist-label/ArtistLabelTable";
import CreateArtistLabel from "components/user/artist-label/CreateArtistLabel";

//DATA
import dataArtistLabel from "variables/users/dataArtistLabel";
import { ArtistLabel } from "types/artist-label";

export default function Page() {

  //CONTEXT
  const loader = useContext(LoadingContext);
  const sidebar = useContext(SidebarContext);

  useEffect(() => {
    //@ts-ignore
    loader.setLoading(false);
    //@ts-ignore
    sidebar.setToggleSidebar(false);
    loadListArtistLabels();
  }, []);

  //VARIABLES
  const ARTIST = 'ARTIST';
  const LABEL = 'LABEL';
	const bgColor = useColorModeValue('white', 'navy.800');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const artistTab = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const labelTab = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  // STATES
  const [ label, setLabel ] = useState(false);
  const [ activeBullets, setActiveBullets] = useState({ artist: true, label: false });
  const [ listArtist, setListArtist ] = useState([] as ArtistLabel[]);
  const [ listLabel, setListLabel ] = useState([] as ArtistLabel[]);
  const [ dataEdit, setDataEdit ] = useState();

  //FUNCTIONS
  const openModalArtist = () => {
    setDataEdit(undefined);
    setLabel(false);
    onOpen();
  };

  const openModalLabel = () => {
    setDataEdit(undefined);
    setLabel(true);
    onOpen();
  };

  const activateArtistTab = () => {
    setActiveBullets({ artist: true, label: false });
  };

  const activateLabelTab = () => {
    setActiveBullets({ artist: false, label: true });
  };

  const loadListArtistLabels = async () => {
    setListLabel(dataArtistLabel.filter(resp => resp.type === LABEL));
    setListArtist(dataArtistLabel.filter(resp => resp.type === ARTIST));
  };

  const reloadContent = () => {
    setDataEdit(undefined);
    onClose();
    loadListArtistLabels();
  };

  const openModalEditArtist = (data) => {
    setLabel(false);
    setDataEdit(data);
    onOpen();
  };

  const openModalEditLabel = (data) => {
    setLabel(true);
    setDataEdit(data);
    onOpen();
  };

  return (
    <Box
      pt={{ base: "110px", md: "80px", xl: "80px" }}
    >
      <Tabs
        variant="unstyled"
        mt={{ base: "5%", md: "3%" }}
        zIndex="0"
        w="100%"
        display="flex"
        flexDirection="column"
      >
        <TabList
          display="flex"
          alignItems="center"
          alignSelf="start"
          justifySelf="start"
          w="100%"
        >
          <Tab
            /* @ts-ignore */
            ref={artistTab}
            onClick={activateArtistTab}
            w={{ sm: "50%", md: "30%", lg: "25%" }}
            display="flex"
            flexDirection="column"
            gap="9px"
          >
            <Text
              fontSize={{ base: "md", "2xl": "2xl", "3xl": "3xl" }}
            >
              Artists
            </Text>
  
            <Box
              height="4px"
              w="100%"
              transition="0.1s linear"
              bg={
                activeBullets.artist
                  ? "brand.500"
                  : "transparent"
              }
              borderRadius="30px"
            />
          </Tab>
  
          <Tab
            /* @ts-ignore */
            ref={labelTab}
            onClick={activateLabelTab}
            w={{ sm: "50%", md: "30%", lg: "25%" }}
            display="flex"
            flexDirection="column"
            gap="9px"
          >
            <Text
              fontSize={{ base: "md", "2xl": "2xl", "3xl": "3xl" }}
            >
              Labels
            </Text>
  
            <Box
              height="4px"
              w="100%"
              transition="0.1s linear"
              bg={
                activeBullets.label
                  ? "brand.500"
                  : "transparent"
              }
              borderRadius="30px"
            />
          </Tab>
        </TabList>
  
        <TabPanels
          mt={{ base: "5%", md: "3%" }}
          w="100%"
          mx="auto"
        >
          {/* ARTISTS */}
          <TabPanel
            w="100%"
            p="0px"
            mx="auto"
            display="flex"
            flexDirection="column"
          >
            <Button
              type="submit"
              variant="brand"
              fontSize={{ base: "md", "2xl": "xl", "3xl": "2xl" }}
              h={{ base: "44px", "3xl": "64px" }}
              fontWeight="500"
              w="min-content"
              mt="9px"
              mb="24px"
              alignSelf="end"
              onClick={openModalArtist}
            >
              Add new artist
            </Button>
  
            <ArtistLabelTable
              tableData={listArtist}
              onDelete={loadListArtistLabels}
              onEdit={openModalEditArtist}
            />
          </TabPanel>
  
          {/* LABELS */}
          <TabPanel
            w="100%"
            p="0px"
            mx="auto"
            display="flex"
            flexDirection="column"
          >
            <Button
              type="submit"
              variant="brand"
              fontSize={{ base: "md", "2xl": "xl", "3xl": "2xl" }}
              h={{ base: "44px", "3xl": "64px" }}
              fontWeight="500"
              w="min-content"
              mt="9px"
              mb="24px"
              alignSelf="end"
              onClick={openModalLabel}
            >
              Add new label
            </Button>
  
            <ArtistLabelTable
              tableData={listLabel}
              onDelete={loadListArtistLabels}
              onEdit={openModalEditLabel}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
  
      {/* MODAL ARTIST & LABEL */}
      <Modal
        onClose={onClose}
        size={{ base: "lg", xl: "xl", "2xl": "4xl", "3xl": "5xl" }}
        isOpen={isOpen}
        scrollBehavior="inside"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg={bgColor}>
          <ModalHeader fontSize={{ base: "xl", "2xl": "2xl", "3xl": "3xl" }}>
            {label ? "New label" : "New artist"}
          </ModalHeader>
          <ModalCloseButton fontSize={{ base: "sm", "2xl": "lg", "3xl": "xl" }} />
          <ModalBody>
            {!dataEdit && (
              <CreateArtistLabel label={label} onClose={reloadContent} />
            )}
            {dataEdit && (
              <EditArtistLabel data={dataEdit} label={label} onClose={reloadContent} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
