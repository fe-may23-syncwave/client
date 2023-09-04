import { useEffect, useState } from 'react';
import { Product } from 'types/Product';

export function useLocalStorage<T>(
  key: string,
  startValue: T,
): [T, (value: Product[] | boolean) => void] {
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(key);

    if (data === null) {
      return startValue;
    }

    try {
      return JSON.parse(data);
    } catch (e) {
      localStorage.removeItem(key);

      return startValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
