//REACT
import { 
  createContext, 
  Dispatch, 
  SetStateAction
} from "react";

interface LoadingContext {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<Partial<LoadingContext>>({});
