import { Phone } from './PhoneType';

export type MainContextType = {
  favProducts: Phone[];
  hasErrorOnFav: boolean;
  products: Phone[];
  handleLike: (product: Phone) => void;
  toggleTheme: () => void;
  darkTheme: boolean;
};
