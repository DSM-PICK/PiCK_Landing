import { styled } from "styled-components";
import { MajorType } from "../types";

interface RadioProp {
  name: MajorType;
  checked: boolean;
  onChange: () => void;
}

export const RadioInput = ({ name, checked, onChange }: RadioProp) => (
  <RadioLabel>
    <HiddenRadio
      type="radio"
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <CustomRadio />
    <LabelText>{name}</LabelText>
  </RadioLabel>
);

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 28px;
  color: #dddcdd;
  cursor: pointer;
`;

const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const CustomRadio = styled.span`
  width: 24px;
  height: 24px;
  @media (max-width: 1000px) {
    width: 14px;
    height: 14px;
    border: 1px solid #dddcdd;
  }

  border: 2px solid #dddcdd;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  transition: border-color 0.3s ease;

  ${HiddenRadio}:checked + & {
    border-color: #bda7f7;
  }

  ${HiddenRadio}:checked + &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    @media (max-width: 1000px) {
      width: 8px;
      height: 8px;
    }
    background-color: #bda7f7;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  ${HiddenRadio}:focus-visible + & {
    outline: 2px solid #bda7f7;
  }
`;

const LabelText = styled.span`
  font-size: 28px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  color: inherit;
`;
