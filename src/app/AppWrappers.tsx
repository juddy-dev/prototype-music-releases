'use client';

//CHAKRA
import { ChakraProvider } from "@chakra-ui/react";

//REACT
import React, {
  ReactNode,
  useState,
} from "react";

//NEXT
import dynamic from "next/dynamic";

//INTERNAL COMPONENTS
import { ConfiguratorContext } from "contexts/ConfiguratorContext";
import { LoadingContext } from "contexts/LoadingContext";
import { ClientContext } from "contexts/ClientContext";
import { SidebarContext } from "contexts/SidebarContext";
import FullLoader from "components/loader/FullLoader";

//CSS
import "styles/App.css";
import "styles/Contact.css";
import "styles/Plugins.css";

//THEME
import initialTheme from "theme/theme";

const _NoSSR = ({ children }) => <React.Fragment>{children}</React.Fragment>;

const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
  ssr: false,
});

export default function AppWrappers({ children }: { children: ReactNode }) {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  
  //STATES
  const [mini, setMini] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [theme, setTheme] = useState(initialTheme);
  const [name, setName] = useState('NN');
  const [nameInShort, setNameInShort] = useState('NN');
  const [accountName, setAccountName] = useState('NN');
  const [picture, setPicture] = useState(undefined);
  const [banner, setBanner] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  //FUNCTIONS

  return (
    // @ts-ignore
    <NoSSR>
      <ConfiguratorContext.Provider
        value={{
          mini,
          setMini,
          theme,
          setTheme,
          hovered,
          setHovered,
          contrast,
          setContrast
        }}
      >
        <ClientContext.Provider 
          value={{
            name,
            setName,
            nameInShort,
            setNameInShort,
            accountName,
            setAccountName,
            picture,
            setPicture,
            banner,
            setBanner
          }}>
          <SidebarContext.Provider
            value={{
              toggleSidebar,
              setToggleSidebar,
            }}
          >
            <LoadingContext.Provider
              value={{
                loading,
                setLoading
              }}
            >
              {loading && <FullLoader />}
              <ChakraProvider 
                theme={theme}
              >
                {children}
              </ChakraProvider>
            </LoadingContext.Provider>
          </SidebarContext.Provider>
        </ClientContext.Provider>
      </ConfiguratorContext.Provider>
    </NoSSR>
  );
};
