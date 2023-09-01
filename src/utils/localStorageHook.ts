import { useEffect, useState } from 'react';
import { Phone } from 'types/PhoneType';

export function useLocalStorage<T>(
  key: string,
  startValue: T,
): [T, (value: Phone[]) => void] {
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
