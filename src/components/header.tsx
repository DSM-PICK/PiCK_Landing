import styled from "styled-components";
import ae from "../assets/picklogo.svg";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container>
      <img src={ae} />
      <Right>
        <Title>
          <img src={Arrow} alt="" />
          <LinkWrapper to="ios">
            <LinkText>PiCK (iOS)</LinkText>
            <LinkTextHover>PiCK (iOS)</LinkTextHover>
          </LinkWrapper>
        </Title>
        <Title>
          <img src={Arrow} alt="" />
          <LinkWrapper to="android">
            <LinkText>PiCK (AOS)</LinkText>
            <LinkTextHover>PiCK (AOS)</LinkTextHover>
          </LinkWrapper>
        </Title>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  left: 0;
  padding: 28px 220px;
  z-index: 99;
`;

const Right = styled.div`
  display: flex;
  gap: 28px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LinkText = styled.p`
  margin: 0;
  transition: transform 0.5s ease;
`;

const LinkTextHover = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  font-weight: 700;
  transform: translateY(100%);
  transition: transform 0.5s ease;
`;

const LinkWrapper = styled(Link)`
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  &:hover ${LinkTextHover} {
    transform: translateY(0);
  }
  &:hover ${LinkText} {
    transform: translateY(-100%);
  }
`;
