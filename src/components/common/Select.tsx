import styled from '@emotion/styled';
import React, { ChangeEvent, SelectHTMLAttributes } from 'react';

interface Props {
  options: { name: string; value: number | string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, onChange }: Props) => {
  console.log(options);

  return (
    <SelectWrapper>
      <select onChange={onChange}>
        {options.map((option) => {
          <option value={option.value}>{option.name}dddd</option>;
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
