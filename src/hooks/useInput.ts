import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = (initialState: any, validator?: (value: string) => boolean) => {
  const [input, setInput] = useState(initialState);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      if (validator === undefined) {
        setInput({
          ...input,
          [name]: value,
        });
      } else {
        const willdata = validator(value);
        if (willdata) {
          setInput({
            ...input,
            [name]: value,
          });
        }
      }
    },
    [validator, input],
  );

  return [input, onChange];
};
