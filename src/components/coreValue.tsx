import { styled } from "styled-components";
import { CoreVauleProp } from "../types";

export const CoreValueContent = ({ title, content }: CoreVauleProp) => {
  return (
    <CoreValueWrap>
      <CoreValueContentTitle>
        <CoreHighlights>{title[0]}</CoreHighlights>
        {title.slice(1)}
      </CoreValueContentTitle>
      <CoreValueContentStyle>{content}</CoreValueContentStyle>
    </CoreValueWrap>
  );
};
const CoreValueContentTitle = styled.p`
  font-size: 60px;
  color: white;
`;

const CoreValueWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CoreValueContentStyle = styled.p`
  color: #afadb1;
  font-size: 32px;
`;

const CoreHighlights = styled.span`
  color: #ae96f5;
  font-size: 72px;
  margin-right: 8px;
`;
