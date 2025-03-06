import { styled } from "styled-components";
import FooterImg from "../assets/pickGray.svg";

export const Footer = () => {
  return (
    <FooterStyle>
      <img src={FooterImg} alt="" />
      <PiCKText>team PiCK</PiCKText>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  align-self: self-start;
  margin-left: 6%;
  background-color: #242424;
  padding-bottom: 86px;
`;

const PiCKText = styled.p`
  color: #8c8a8f;
  font-size: 32px;
`;
