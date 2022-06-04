import styled from '@emotion/styled';
import React, { ChangeEvent } from 'react';

interface Props {
  name?: string;
  options: { name: string; value: number | string }[];
  value: string;
  onChange?: (value: string) => void;
}

const Select = ({ name, options, value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <SelectWrapper>
      <select name={name} onChange={handleChange} value={value}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </SelectWrapper>
  );
};

export default Select;

const SelectWrapper = styled.div`
  width: 100%;

  select {
    width: 100%;
    height: 2.25rem;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 4px;

    option {
      width: 100px;
      padding: 10px;
    }
  }
`;
