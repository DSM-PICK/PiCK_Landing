import { useEffect, useRef } from "react";
import { keyframes, styled } from "styled-components";
import { CoreVale } from "../../../utils/coreValue";
import { CoreValueContent } from "../../../components/coreValue";

export const CoreValueComponent = () => {
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
    <CoreValues>
      <CoreValeContent ref={sectionRef}>
        <CoreValueTitle>
          Team PiCK
          <br />
          핵심가치
        </CoreValueTitle>
        <CoreValueContentWrap>
          {CoreVale.map((item, index) => (
            <CoreValueContent {...item} index={index} key={item.title} />
          ))}
        </CoreValueContentWrap>
      </CoreValeContent>
    </CoreValues>
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

const CoreValeContent = styled.div`
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

const CoreValueContentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 160px;
  row-gap: 110px;
`;

const CoreValues = styled.div`
  background-color: #242424;
  padding: 180px 120px 180px 200px;
`;

const CoreValueTitle = styled.p`
  color: white;
  font-size: 52px;
  font-weight: 600;
  white-space: nowrap;
`;
