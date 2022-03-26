import { useInput } from 'hooks/useInput';
import { useEffect } from 'react';

interface PropTypes {
  input: {
    type: string;
    disabled: boolean;
    placeholder: string;
    // onFocus: () => void;
    // onBlur: () => void;
    onChange: (value: any) => void;
    validator?: (value: string) => boolean;
  };
}
const TextInput = (input: PropTypes['input']) => {
  const inputValue = useInput('', input.validator);

  useEffect(() => {
    input.onChange(inputValue.value);
  }, [inputValue.value]);

  return (
    <input
      type={input.type}
      disabled={input.disabled}
      placeholder={input.placeholder}
      {...inputValue}
    />
  );
};

export default TextInput;
