import styled from '@emotion/styled';
import React, { ChangeEvent } from 'react';

interface Props {
  options: { name: string; value: number | string }[];
  value: string;
  onChange?: (value: string) => void;
}

const Select = ({ options, value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <SelectWrapper>
      <select onChange={handleChange} value={value}>
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
  display: flex;
  width: 100%;

  select {
    width: 100px;
    padding: 10px;

    option {
      padding: 10px;
    }
  }
`;
