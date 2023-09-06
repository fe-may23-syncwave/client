import { Product } from './Product';

export type MainContextType = {
  favProducts: Product[];
  handleLike: (product: Product) => void;
  toggleTheme: () => void;
  darkTheme: boolean;
  globalPerPage: string;
  globalSort: string;
  setGlobalPerPage: (v: string) => void;
  setGlobalSort: (v: string) => void;
  notifyFavs: () => void;
  notifyCart: () => void;
  notifyFavsDelete: () => void;
  notifyCartDelete: () => void;
};
