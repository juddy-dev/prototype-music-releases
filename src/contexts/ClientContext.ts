//REACT
import { 
  createContext, 
  Dispatch, 
  SetStateAction 
} from "react";

interface ClientContextType {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  nameInShort: string;
  setNameInShort: Dispatch<SetStateAction<string>>;
  accountName: string;
  setAccountName: Dispatch<SetStateAction<string>>;
  picture: string;
  setPicture: Dispatch<SetStateAction<string | undefined>>;
  banner: string;
  setBanner: Dispatch<SetStateAction<string | undefined>>;
}

export const ClientContext = createContext<
  Partial<ClientContextType>
>({});
