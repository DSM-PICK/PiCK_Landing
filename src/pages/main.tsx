import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Header } from "../components/header";
import BackImage from "../assets/back.jpg";
import DownArrow from "../assets/downArrow.svg";
import PickLogoWhite from "../assets/pickLogowhite.svg";

export const Main = () => {
  const h1Refs = useRef<HTMLDivElement[]>([]);

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
      {
        threshold: 0.2,
      }
    );

    h1Refs.current.forEach((h1) => {
      if (h1) observer.observe(h1);
    });

    return () => {
      h1Refs.current.forEach((h1) => {
        if (h1) observer.unobserve(h1);
      });
    };
  }, []);

  return (
    <>
      <Content>
        <Header />
        <BackgroundImage />

        <DownArrowStyle src={DownArrow} alt="" />
        <H1 ref={(el) => el && h1Refs.current.push(el)} style={{ top: "65vh" }}>
          편안하고 즐거운 <br /> 학교를 만들고 있습니다
        </H1>
        <H1
          ref={(el) => el && h1Refs.current.push(el)}
          style={{ top: "120vh" }}
        >
          <img src={PickLogoWhite} alt="" />
        </H1>
        <H1
          ref={(el) => el && h1Refs.current.push(el)}
          style={{ top: "200vh" }}
        >
          픽은 혁신적인 생각으로 <br /> 학생들과 교직원을 연결합니다
        </H1>
      </Content>
    </>
  );
};

const Content = styled.div`
  height: 240vh;
  width: 100%;
  position: relative;
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

const H1 = styled.div`
  position: absolute;
  width: 100%;
  color: white;
  font-size: 50px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-align: center;
  user-select: none;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DownArrowStyle = styled.img`
  position: fixed;
  top: 90vh;
  width: 100%;
  height: 60px;
`;
