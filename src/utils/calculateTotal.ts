import { getNumbers } from './getNumbers';

export const calculateTotalPages = (allItems: number, totalAmount: number) => {
  const amount = Math.ceil(totalAmount / allItems);

  return getNumbers(1, amount);
};
