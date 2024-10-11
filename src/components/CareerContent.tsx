import { styled } from "styled-components";
import { CoreVauleProp } from "../types";

export const CareerContent = ({ title, content }: CoreVauleProp) => {
  return (
    <CareerWrap>
      <CareerContentTitle>{title}</CareerContentTitle>
      <CareerContentStyle>{content}</CareerContentStyle>
    </CareerWrap>
  );
};
const CareerContentTitle = styled.p`
  font-size: 40px;
  color: white;
  font-weight: 600;
`;

const CareerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CareerContentStyle = styled.p`
  color: #afadb1;
  font-size: 32px;
`;
