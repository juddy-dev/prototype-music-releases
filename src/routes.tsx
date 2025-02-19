//CHAKRA
import { Icon } from "@chakra-ui/react";

//REACT ICONS
import {
  MdHome,
  MdLibraryMusic,
  MdOutlinePerson
} from "react-icons/md";

//INTERNAL COMPONENTS
import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  // --- Dashboards ---
  {
    name: 'Dashboards',
    layout: '/user',
    path: '/dashboards',
    icon: 
      <Icon 
        as={MdHome} 
        width={{base: "20px", '2xl':"30px"}} 
        height={{base: "20px", '2xl':"30px"}} 
        color="inherit" 
      />,
    sidebar: true,
    collapse: false,
  },
  // // --- RELEASEs ---
  {
    name: 'Distributions',
    path: '/distributions',
    icon: (
      <Icon
        as={MdLibraryMusic}
        width={{base: "20px", '2xl':"30px"}}
        height={{base: "20px", '2xl':"30px"}}
        color="inherit"
      />
    ),
    collapse: true,
    sidebar: true,
    items: [
      {
        name: 'Catalog',
        layout: '/user',
        path: '/distributions/releases/catalog',
        secondary: true,
        sidebar: true
      },
      {
        name: 'Detail',
        layout: '/user',
        path: '/distributions/releases/detail',
        secondary: true,
        sidebar: false,
        previous: '/user/distributions/releases/catalog'
      },
      {
        name: 'Tracks',
        layout: '/user',
        path: '/distributions/tracks/catalog',
        secondary: true,
        sidebar: true,
        previous: '/user/distributions/releases/catalog'
      },
      {
        name: 'Artists & Labels',
        layout: '/user',
        path: '/distributions/artists-labels',
        secondary: true,
        sidebar: true,
        previous: '/user/distributions/releases/catalog'
      }
    ],
  },
  // --- PROFILE ---
  {
    name: 'Profile',
    layout: '/user',
    path: '/profile',
    icon: 
      <Icon 
        as={MdOutlinePerson} 
        width={{base: "20px", '2xl':"30px"}} 
        height={{base: "20px", '2xl':"30px"}} 
        color="inherit" 
      />,
    sidebar: false,
    collapse: false,
  }
];

export default routes;
