import { useEffect, useState } from "react";
import styled from "styled-components";

export const TopContent = () => {
  const textStages = [
    "ㅈ",
    "지",
    "짓",
    "지소",
    "지속",
    "지속ㅈ",
    "지속저",
    "지속적",
    "지속적ㅇ",
    "지속적이",
    "지속적인",
    "지속적인 ",
    "지속적인 ㅂ",
    "지속적인 바",
    "지속적인 발",
    "지속적인 발ㅈ",
    "지속적인 발저",
    "지속적인 발전",
    "지속적인 발전ㅇ",
    "지속적인 발전으",
    "지속적인 발전을",
    "지속적인 발전으로",
    "지속적인 발전으로",
    "지속적인 발전을",
    "지속적인 발전으",
    "지속적인 발전ㅇ",
    "지속적인 발전",
    "지속적인 발저",
    "지속적인 발ㅈ",
    "지속적인 발",
    "지속적인 바",
    "지속적인 ㅂ",
    "지속적인 ",
    "지속적인",
    "지속적이",
    "지속적ㅇ",
    "지속적",
    "지속저",
    "지속ㅈ",
    "지속",
    "지소",
    "짓",
    "지",
    "ㅈ",
    " ",
    "ㅎ",
    "하",
    "함",
    "함ㄲ",
    "함께",
    "함께 ",
    "함께 ㅅ",
    "함께 서",
    "함께 성",
    "함께 성ㅈ",
    "함께 성자",
    "함께 성장",
    "함께 성장ㅎ",
    "함께 성장하",
    "함께 성장한",
    "함께 성장하느",
    "함께 성장하는",
    "함께 성장하는",
    "함께 성장하느",
    "함께 성장한",
    "함께 성장하",
    "함께 성장ㅎ",
    "함께 성장",
    "함께 성자",
    "함께 성ㅈ",
    "함께 성",
    "함께 서",
    "함께 ㅅ",
    "함께 ",
    "함께",
    "함ㄲ",
    "함",
    "하",
    "ㅎ",
    " ",
    "T",
    "T",
    "Te",
    "Te",
    "Tea",
    "Tea",
    "Team",
    "Team",
    "Team ",
    "Team ",
    "Team P",
    "Team P",
    "Team Pi",
    "Team Pi",
    "Team PiC",
    "Team PiC",
    "Team PiCK",
    "Team PiCK",
    "Team PiCK",
    "Team PiCK",
    "Team PiC",
    "Team Pi",
    "Team P",
    "Team ",
    "Team",
    "Tea",
    "Te",
    "T",
    " ",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < textStages.length) {
        setText(textStages[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <Wrapper>
      <TypingMemo>{text}</TypingMemo>
      <ExplainContent>
        <ExplainText>
          Team PiCK은 끊임없이 DSM의 편리한 학교생활을 위해 노력합니다.
        </ExplainText>
        <ExplainText>
          학생과 교직원 모두에게 더 나은 경험을 제공합니다.
        </ExplainText>
      </ExplainContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 112px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 30%;
`;

const TypingMemo = styled.div`
  font-size: 152px;
  font-family: pretendard;
  font-weight: 700;
  white-space: nowrap;
  border-right: 3px solid;
  animation: blink 0.5s step-end infinite alternate;

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

const ExplainText = styled.div`
  font-size: 42px;
  padding: 20px 0px;
  width: fit-content;
  border-bottom: 1px solid #5c5a60;
  margin-bottom: 40px;
`;

const ExplainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
