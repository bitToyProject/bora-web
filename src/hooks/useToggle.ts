import { useCallback, useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback((prev: boolean) => {
    setToggle(!prev);
  }, []);

  return [toggle, onToggle];
};
