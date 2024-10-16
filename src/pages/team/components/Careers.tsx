import { useRef, useEffect } from "react";
import { keyframes, styled } from "styled-components";
import { CareersValue } from "../../../utils/Careers";
import { CareerContent } from "../../../components/CareerContent";

export const CareerComponent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <Careers>
      <CareersWrap ref={sectionRef}>
        <CareerTitle>
          Team PiCK
          <br />
          인재상
        </CareerTitle>
        <CareerContentWrap>
          {CareersValue.map((item, index) => (
            <CareerContent {...item} key={item.title} index={index} />
          ))}
        </CareerContentWrap>
      </CareersWrap>
    </Careers>
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

const CareersWrap = styled.div`
  display: flex;
  gap: 150px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${reveal} 0.5s ease forwards;
  }
`;

const CareerContentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 160px;
  row-gap: 110px;
`;

const Careers = styled.div`
  background-color: #242424;
  padding: 180px 120px 180px 200px;
`;

const CareerTitle = styled.p`
  color: white;
  font-size: 52px;
  font-weight: 600;
  white-space: nowrap;
`;
