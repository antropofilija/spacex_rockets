import { styled } from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: calc(0.5em - 1px) calc(0.75em - 1px);
`;

export const StyledIcon = styled.span`
  color: #5a71e4;
  margin-top: 5px;
`;

export const StyledAll = styled.div`
  background-color: #f5f5fa;
  width: 753px;
  height: 35px;
  display: flex;
  border-radius: 50px;
  padding-left: 10px;
`;

export const StyledInput = styled.input`
  background-color: #f5f5fa;
  width: 753px;
  border: none;
  border-radius: 50px;
  padding-left: calc(0.75em - 1px);
  color: #000;

  &::placeholder {
    color: #9b9eac;
  }

  &:focus {
    outline: none;
  }
`;
