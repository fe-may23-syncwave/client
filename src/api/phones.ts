import { Phone } from 'types/PhoneType';
import { client } from '../utils/fetchPhones';

export const getPhones = () => {
  return client.get<Phone[]>();
};
