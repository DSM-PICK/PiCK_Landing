import { useEffect, useRef } from "react";
import { styled, keyframes } from "styled-components";
import SecondImg from "../assets/second.png";
import FourthImg from "../assets/Group 3.png";
import { Footer } from "../components/footer";

export const VideoPage = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <Container>
      <FirstTitle ref={(el) => sectionRefs.current.push(el!)}>
        <Title>
          'DSM이 실현하는 일상의 소중한 가치'라는 <br /> 비전으로
        </Title>
        <SubTitle>
          참여를 통해 혁신을 이루고, 연결을 통해 지식을 나누며 함께 성장하는
          미래를 만들어갑니다.
        </SubTitle>
      </FirstTitle>
      <Video autoPlay muted loop />
      <SecondTitle ref={(el) => sectionRefs.current.push(el!)}>
        <Title>DSM의 일상을 연결하는 서비스</Title>
        <SubTitle>
          누구에게나 일상 속에서 혁신적인 기술로 편안하고 새로운 경험을
          제공합니다.
        </SubTitle>
      </SecondTitle>
      <Third ref={(el) => sectionRefs.current.push(el!)}>
        <img src={SecondImg} width="100%" alt="" />
        <Daily>일상을 더 편리하게</Daily>
        <Backgrounds />
      </Third>
      <Fourth>
        <Animaririrri ref={(el) => sectionRefs.current.push(el!)}>
          <FourthTitle>픽이 만들어 온 길</FourthTitle>
          <FourthSubTitle>
            픽은 계속되는 새로운 도전으로 우리의 길을 만들어 나가고 있습니다
          </FourthSubTitle>
        </Animaririrri>
        <img src={FourthImg} />
      </Fourth>
      <Footer />
    </Container>
  );
};

const reveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #242424;
  padding: 200px 0px 0px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 64px;
  font-weight: 600;
  color: white;
`;

const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #afadb1;
`;

const Video = styled.video`
  background-color: #987cf1;
  width: 1000px;
  height: 520px;
  border-radius: 20px;
`;

const Section = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${reveal} 0.5s ease forwards;
  }
`;

const FirstTitle = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const SecondTitle = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const Animaririrri = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 206px 0px;
  gap: 28px;
`;

const Third = styled(Section)`
  position: relative;
`;

const Daily = styled.p`
  position: absolute;
  color: white;
  font-size: 100px;
  font-weight: 600;
  top: 380px;
  z-index: 10;
  width: 100%;
  text-align: center;
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
  gap: 28px;
`;

const FourthTitle = styled.p`
  font-size: 64px;
  color: white;
  font-weight: 600;
`;

const FourthSubTitle = styled.p`
  color: #afadb1;
  font-size: 32px;
  font-weight: 500;
`;
