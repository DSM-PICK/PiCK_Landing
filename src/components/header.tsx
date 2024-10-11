import styled from "styled-components";
import ae from "../assets/picklogo.svg";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src={ae} />
      </Link>
      <Right>
        <Title>
          <LinkWrapper to="team">
            <LinkText>팀 소개</LinkText>
            <LinkTextHover>팀 소개</LinkTextHover>
          </LinkWrapper>
        </Title>
        <Title>
          <LinkWrapper to="service">
            <LinkText>서비스</LinkText>
            <LinkTextHover>서비스</LinkTextHover>
          </LinkWrapper>
        </Title>
        <Title>
          <LinkWrapper to="apply">
            <LinkText>픽 지원하기</LinkText>
            <LinkTextHover>픽 지원하기</LinkTextHover>
          </LinkWrapper>
          <img src={Arrow} alt="" />
        </Title>
        <Title>
          <LinkWrapper to="https://onyx-badge-bf9.notion.site/PiCK-6078a88d316c479daf209c18185abfa0?pvs=74">
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
  padding: 28px 200px;
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
  transition: transform 0.5s ease;
`;

const LinkTextHover = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 700;
  transform: translateY(80%);
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
  font-size: 24px;
  color: #fff;
  &:hover ${LinkTextHover} {
    transform: translateY(0);
  }
  &:hover ${LinkText} {
    transform: translateY(-800%);
  }
`;
