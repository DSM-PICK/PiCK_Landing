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
          <LinkWrapper to="team">
            <LinkText>팀 소개</LinkText>
            <LinkTextHover>팀 소개</LinkTextHover>
          </LinkWrapper>
        </Title>
        <Title>
          <LinkWrapper to="sevice">
            <LinkText>서비스</LinkText>
            <LinkTextHover>서비스</LinkTextHover>
          </LinkWrapper>
        </Title>
        <Title>
          <LinkWrapper to="android">
            <LinkText>픽 지원하기</LinkText>
            <LinkTextHover>픽 지원하기</LinkTextHover>
          </LinkWrapper>
          <img src={Arrow} alt="" />
        </Title>
        <Title>
          <LinkWrapper to="android">
            <LinkText>픽 사용 설명서</LinkText>
            <LinkTextHover>픽 사용 설명서</LinkTextHover>
          </LinkWrapper>
          <img src={Arrow} alt="" />
        </Title>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
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
  //padding: 0px 28px 6px 28px;
`;

const LinkTextHover = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  font-weight: 700;
  transform: translateY(80%);
  transition: transform 0.5s ease;
  //padding: 0px 28px 6px 28px;
`;

const LinkWrapper = styled(Link)`
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  color: #fff;
  &:hover ${LinkTextHover} {
    transform: translateY(0);
  }
  &:hover ${LinkText} {
    transform: translateY(-800%);
  }
`;
