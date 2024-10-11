import { useEffect, useRef } from "react";
import { styled, keyframes } from "styled-components";
import SecondImg from "../assets/second.png";
import FourthImg from "../assets/Group 3.png";
import FooterImg from "../assets/pickGray.svg";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Footer } from "../components/footer";

gsap.registerPlugin(ScrollTrigger);

export const VideoPage = () => {
  const firstTitleRef = useRef<HTMLDivElement | null>(null);
  const secondTitleRef = useRef<HTMLDivElement | null>(null);
  const thirdRef = useRef<HTMLDivElement | null>(null);
  const fourthRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        firstTitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: firstTitleRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        secondTitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: secondTitleRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        thirdRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: thirdRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        fourthRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: fourthRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <FirstTitle ref={firstTitleRef}>
        <Title>
          'DSM이 실현하는 일상의 소중한 가치'라는 <br /> 비전으로
        </Title>
        <SubTitle>
          참여를 통해 혁신을 이루고, 연결을 통해 지식을 나누며 함께 성장하는
          미래를 만들어갑니다.
        </SubTitle>
      </FirstTitle>
      <Video autoPlay muted loop />
      <SecondTitle ref={secondTitleRef}>
        <Title>DSM의 일상을 연결하는 서비스</Title>
        <SubTitle>
          누구에게나 일상 속에서 혁신적인 기술로 편한하고 새로운 경험을
          제공합니다.
        </SubTitle>
      </SecondTitle>
      <Third ref={thirdRef}>
        <img src={SecondImg} width="100%" alt="" />
        <Daily>일상을 더 편리하게</Daily>
        <Backgrounds />
      </Third>
      <Fourth ref={fourthRef}>
        <FourthTitle>픽이 만들어 온 길</FourthTitle>
        <FourthSubTitle>
          픽은 계속되는 새로운 도전으로 우리의 길을 만들어 나가고 있습니다
        </FourthSubTitle>
        <img src={FourthImg} />
      </Fourth>
      <Footer />
    </Container>
  );
};

const Ani = keyframes`
    0%{
      opacity: 0;
      transform: translate3d(0px, 50px, 0px);
    }
    100%{
      opacity: 1;
    transform:  translate3d(0px, 0px, 0px)
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

const SecondTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  opacity: 0;
  transform: translate3d(0px, 50px, 0px);
  animation: 0.5s ease-in-out 0s 1 normal forwards running ${Ani};
`;

const FirstTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  opacity: 0;
  transform: translate3d(0px, 50px, 0px);
  animation: 0.5s ease-in-out 0s 1 normal forwards running ${Ani};
`;

const Third = styled.div`
  position: relative;
  opacity: 0;
  transform: translate3d(0px, 50px, 0px);
  animation: 0.5s ease-in-out 0s 1 normal forwards running ${Ani};
`;

const Daily = styled.p`
  position: absolute;
  color: white;
  font-size: 100px;
  font-weight: 600;
  top: 0;
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
  opacity: 0;
  transform: translate3d(0px, 50px, 0px);
  animation: 0.5s ease-in-out 0s 1 normal forwards running ${Ani};
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
