import { useEffect, useRef } from "react";
import { keyframes, styled } from "styled-components";
import BackImage from "../assets/back.jpg";
import DownArrow from "../assets/downArrow.svg";
import PickLogoWhite from "../assets/pickLogowhite.svg";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./index.scss";

gsap.registerPlugin(ScrollTrigger);

export const Text = () => {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const slides = [
    { content: "모두가 편안한 학교를 만들고 있습니다" },
    { content: <img src={PickLogoWhite} height={240} alt="" /> },
    { content: "픽은 혁신적인 생각으로 학생들과 교직원을 연결합니다" },
  ];

  useGSAP(() => {
    slidesRef.current.forEach((slide, index) => {
      gsap.fromTo(
        slide,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: `top+=${index * 200} top`,
            end: `+=200`,
            scrub: 0.5,
          },
        }
      );
    });
  });

  return (
    <Content ref={contentRef} className="member">
      <BackgroundImage />
      <OverFlow>
        <Slide className="membersList">
          {slides.map((slide, index) => (
            <H1 key={index} ref={(el) => (slidesRef.current[index] = el!)}>
              {slide.content}
            </H1>
          ))}
        </Slide>
      </OverFlow>
      <DownArrowStyle src={DownArrow} alt="" />
    </Content>
  );
};

const Content = styled.article`
  width: 100%;
  height: 200dvh;
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

const OverFlow = styled.div`
  /* bottom: 100%;
  width: 100%;
  position: absolute;
  height: 100px;
  background-color: red; */
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  display: flex;
  top: 600px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const H1 = styled.div`
  color: white;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  user-select: none;
  width: 100%;
  opacity: 0;
`;

const Move = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
`;

const DownArrowStyle = styled.img`
  position: fixed;
  bottom: 20px;
  width: 100%;
  height: 60px;
  animation: ${Move} 0.7s ease-in-out infinite alternate;
`;
