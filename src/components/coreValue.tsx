import { useRef, useEffect } from "react";
import { keyframes, styled } from "styled-components";
import { CoreVauleProp } from "../types";

export const CoreValueContent = ({ title, content, index }: CoreVauleProp) => {
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
    <CoreValueWrap ref={sectionRef} index={index!}>
      <CoreValueContentTitle>
        <CoreHighlights>{title[0]}</CoreHighlights>
        {title.slice(1)}
      </CoreValueContentTitle>
      <CoreValueContentStyle>{content}</CoreValueContentStyle>
    </CoreValueWrap>
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

const CoreValueContentTitle = styled.p`
  font-size: 60px;
  color: white;
`;

const CoreValueWrap = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  &.visible {
    animation: ${slideUp} 0.8s ease-out forwards;
    animation-delay: ${({ index }) => index * 0.2}s;
  }
  opacity: 0;
`;

const CoreValueContentStyle = styled.p`
  color: #afadb1;
  font-size: 32px;
`;

const CoreHighlights = styled.span`
  color: #ae96f5;
  font-size: 72px;
  margin-right: 8px;
`;
