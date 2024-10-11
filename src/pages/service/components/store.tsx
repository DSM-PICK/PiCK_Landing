import { styled } from "styled-components";
import { Apple, PlayStore } from "../../../assets";

interface StoreProps {
  Title: "AOS" | "iOS";
  to: string;
}

export const Store = ({ Title, to }: StoreProps) => {
  return (
    <Container href={to} target="_blank" rel="noopener noreferrer">
      {Title === "iOS" ? <Apple file="#fff" /> : <PlayStore file="#fff" />}
      <TitleText>{Title} 다운로드</TitleText>
    </Container>
  );
};

const TitleText = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: white;
  transition: color 0.3s;
`;

const Container = styled.a`
  padding: 36px 56px;
  border-radius: 12px;
  border: 2px solid #5c5a60;
  display: flex;
  gap: 20px;
  transition: color 0.3s, border-color 0.3s;
  text-decoration: none;

  &:hover {
    border-color: #ae96f5;
    color: #ae96f5;

    ${TitleText} {
      color: #ae96f5;
    }
    svg path {
      fill: #ae96f5;
      transition: fill 0.3s ease-in-out;
    }
  }
`;
