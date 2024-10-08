import { styled, keyframes } from "styled-components";
import SecondImg from "../assets/second.png";
import FourthImg from "../assets/Group 3.png";
import FooterImg from "../assets/pickGray.svg";

export const VideoPage = () => {
  return (
    <Container>
      <FirstTitle>
        <Title>
          'DSM이 실현하는 일상의 소중한 가치'라는 <br /> 비전으로
        </Title>
        <SubTitle>
          참여를 통해 혁신을 이루고, 연결을 통해 지식을 나누며 함께 성장하는
          미래를 만들어갑니다.
        </SubTitle>
      </FirstTitle>
      <Video autoPlay muted loop />
      <SecondTitle>
        <Title>DSM의 일상을 연결하는 서비스</Title>
        <SubTitle>
          누구에게나 일상 속에서 혁신적인 기술로 편한하고 새로운 경험을
          제공합니다.
        </SubTitle>
      </SecondTitle>
      <Third>
        <img src={SecondImg} width="100%" alt="" />
        <Daily>일상을 더 편리하게</Daily>
        <Backgrounds />
      </Third>
      <Fourth>
        <FourthTitle>픽이 만들어 온 길</FourthTitle>
        <FourthSubTitle>
          픽은 계속되는 새로운 도전으로 우리의 길을 만들어 나가고 있습니다
        </FourthSubTitle>
        <img src={FourthImg} />
      </Fourth>
      <Footer>
        <img src={FooterImg} alt="" />
        <PiCKText>team PiCK</PiCKText>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #242424;
  padding: 200px 0px 260px 0px;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: 64px;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #afadb1;
  margin: 0;
`;

const Video = styled.video`
  background-color: #987cf1;
  width: 1000px;
  height: 520px;
  animation: ${slideUp} 1.4s ease-out forwards;
  border-radius: 20px;
`;

const SecondTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  animation: ${slideUp} 1.6s ease-out forwards;
`;

const FirstTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  animation: ${slideUp} 0.8s ease-out forwards;
`;

const Third = styled.div`
  position: relative;
`;

const Daily = styled.p`
  position: absolute;
  color: white;
  font-size: 100px;
  font-weight: 600;
  top: 0;
  margin: 0%;
  text-align: center;
  width: 100%;
  top: 380px;
  z-index: 10;
`;

const Backgrounds = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 748px;
  background: linear-gradient(
    180deg,
    #242424 0%,
    rgba(36, 36, 36, 0.5) 68%,
    rgba(36, 36, 36, 0) 100%
  );
`;

const Fourth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 206px 0px;
  gap: 28px;
`;

const FourthTitle = styled.p`
  font-size: 64px;
  color: white;
  margin: 0;
  font-weight: 600;
`;

const FourthSubTitle = styled.p`
  color: #afadb1;
  font-size: 32px;
  margin: 0;
  font-weight: 500;
`;

const Footer = styled.footer`
  align-self: self-start;
  padding-left: 200px;
`;

const PiCKText = styled.p`
  color: #8c8a8f;
  font-size: 32px;
`;
