import { styled } from "styled-components";
import { PickGray600, ServiceImage } from "../../assets";
import { Store } from "./components/store";

export const ServicePage = () => {
  return (
    <Container>
      <BackgroundImg src={ServiceImage} />
      <ContentWrap>
        <PickLogo src={PickGray600} />
        <PiCKExplanation>
          교내에서 수기로 진행되던 작업들을 온라인으로 전환하여 <br /> 교직원 및
          학생들에게 편리한 학교생활을 제공합니다
        </PiCKExplanation>
        <StoreWrap>
          <Store
            Title="iOS"
            to="https://apps.apple.com/kr/app/pick-dsm%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%95%99%EA%B5%90-%EA%B4%80%EB%A6%AC-%EC%84%9C%EB%B9%84%EC%8A%A4/id6479209480"
          />
          <Store Title="AOS" to="" />
        </StoreWrap>
      </ContentWrap>
    </Container>
  );
};

const BackgroundImg = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  z-index: -1;
`;

const StoreWrap = styled.div`
  display: flex;
  gap: 52px;
`;

const ContentWrap = styled.div`
  position: absolute;
  bottom: 80px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 50px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
`;

const PickLogo = styled.img``;

const PiCKExplanation = styled.p`
  font-size: 32px;
  color: white;
`;
