import React, { ChangeEvent } from 'react';
import {
  StyledAll,
  StyledIcon,
  StyledInput,
  StyledInputWrapper,
} from './style';

interface IInputProps {
  type: string;
  icon: React.ReactElement;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  setvalue: (value: string) => void;
}

const Input = ({
  type,
  icon,
  placeholder,
  onChange,
  value,
  setvalue,
}: IInputProps) => {
  return (
    <StyledInputWrapper>
      <StyledAll>
        <StyledIcon>{icon}</StyledIcon>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </StyledAll>
    </StyledInputWrapper>
  );
};

export default Input;
