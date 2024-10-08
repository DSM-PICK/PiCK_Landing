import { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { Header } from "../components/header";
import BackImage from "../assets/back.jpg";
import DownArrow from "../assets/downArrow.svg";
import PickLogoWhite from "../assets/pickLogowhite.svg";

export const Text = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isThrottled = useRef(false);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const slides = [
    { content: "편안하고 즐거운 학교를 만들고 있습니다" },
    { content: <img src={PickLogoWhite} alt="" /> },
    { content: "픽은 혁신적인 생각으로 학생들과 교직원을 연결합니다" },
  ];

  const handleScroll = (event: WheelEvent) => {
    if (isThrottled.current) return;
    isThrottled.current = true;

    if (event.deltaY > 0) {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else {
        gsap.to(textRef.current, { y: "100%", duration: 1 });
        gsap.to(videoRef.current, { y: "110%", duration: 1, delay: 0.5 });
      }
    } else if (event.deltaY < 0 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }

    setTimeout(() => {
      isThrottled.current = false;
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    gsap.set(videoRef.current, { y: "100%" });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSlide]);

  return (
    <Content ref={textRef}>
      <Header />
      <BackgroundImage />
      {slides.map((slide, index) => (
        <Slide key={index} isVisible={index === currentSlide}>
          <H1>{slide.content}</H1>
        </Slide>
      ))}
      <DownArrowStyle src={DownArrow} alt="" />
      <VideoPage ref={videoRef} />
    </Content>
  );
};

const VideoPage = (ref: any) => {
  return (
    <Container ref={ref}>
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
    </Container>
  );
};

const Content = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  background-image: url(${BackImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Slide = styled.div<{ isVisible: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.8s ease;
`;

const H1 = styled.div`
  color: white;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  user-select: none;
`;

const DownArrowStyle = styled.img`
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 60px;
`;

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
  border-radius: 20px;
`;

const SecondTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const FirstTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;
