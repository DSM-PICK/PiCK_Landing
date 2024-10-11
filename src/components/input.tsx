import React from "react";
import { styled } from "styled-components";

interface InputProp {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input = ({ name, value, onChange, placeholder }: InputProp) => {
  return (
    <InputWrap>
      <InputContainer
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrap>
  );
};

const InputWrap = styled.div`
  height: 56px;
  @media (max-width: 1000px) {
    height: 38px;
  }
  border-bottom: 2px solid #343434;
`;

const InputContainer = styled.input`
  outline: none;
  background-color: transparent;
  caret-color: #848287;
  padding: 8px 0px;
  font-size: 24px;
  color: #fff;
  width: 100%;

  &::placeholder {
    color: #848287;
    font-size: 24px;
  }
  @media (max-width: 1000px) {
    &::placeholder {
      font-size: 12px;
    }
    font-size: 12px;
    padding: 0;
  }
`;
