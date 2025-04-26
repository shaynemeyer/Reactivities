import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay = 3000) => {
  const [returnValue, setValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return returnValue;
};

export default useDebounce;
