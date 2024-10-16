import { useRef, useEffect } from "react";
import { keyframes, styled } from "styled-components";
import { CoreVauleProp } from "../types";

export const CareerContent = ({ title, content, index }: CoreVauleProp) => {
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
    <CareerWrap ref={sectionRef} index={index!}>
      <CareerContentTitle>{title}</CareerContentTitle>
      <CareerContentStyle>{content}</CareerContentStyle>
    </CareerWrap>
  );
};

const slideUp = keyframes`
    0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CareerContentTitle = styled.p`
  font-size: 40px;
  color: white;
  font-weight: 600;
`;

const CareerWrap = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  &.visible {
    animation: ${slideUp} 0.8s ease-out forwards;
    animation-delay: ${({ index }) => index * 0.2}s;
  }
  opacity: 0;
`;

const CareerContentStyle = styled.p`
  color: #afadb1;
  font-size: 32px;
`;
