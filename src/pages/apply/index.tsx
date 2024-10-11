import { styled } from "styled-components";
import { Input } from "../../components/input";
import { ChangeEvent, useState } from "react";
import { RadioInput } from "../../components/radioInput";
import { Majors } from "../../utils/Major";
import { Button } from "../../components/button";

interface ApplyData {
  name: string;
  classNum: string;
  phoneNumber: string;
  major: string;
  motivation: string;
}

export const Apply = () => {
  const [data, setData] = useState<ApplyData>({
    name: "",
    classNum: "",
    phoneNumber: "",
    major: "Front-End",
    motivation: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMajorChange = (selectedMajor: string) => {
    setData((prev) => ({ ...prev, major: selectedMajor }));
  };

  return (
    <Container>
      <Content>
        <TitleWrap>
          <TitleText>픽 지원하기</TitleText>
          <TitleContent>픽 팀원은 현재 모집 중입니다.</TitleContent>
        </TitleWrap>
        <BasicInformation>
          <InfomationText>
            기본 정보<Star>*</Star>
          </InfomationText>
          <InputWrap>
            <Input
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="이름을 입력하세요"
            />
            <Input
              name="classNum"
              value={data.classNum}
              onChange={handleChange}
              placeholder="학번을 입력하세요"
            />
            <Input
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={handleChange}
              placeholder="전화번호를 입력하세요"
            />
          </InputWrap>
        </BasicInformation>
        <MajorInfomation>
          <MajorWrap>
            <InfomationText>
              전공 선택<Star>*</Star>
            </InfomationText>
            <SubInfomation>자신의 전공을 선택해주세요</SubInfomation>
          </MajorWrap>
          {Majors.map((item) => (
            <RadioInput
              key={item.name}
              name={item.name}
              checked={data.major === item.name}
              onChange={() => handleMajorChange(item.name)}
            />
          ))}
        </MajorInfomation>
        <Line />
        <Motivate>
          <MajorWrap>
            <InfomationText>
              지원 동기<Star>*</Star>
            </InfomationText>
            <SubInfomation>
              지원 동기를 자유롭게 300자 내외로 작성해주세요
            </SubInfomation>
          </MajorWrap>
          <Input
            placeholder="지원 동기"
            name="motivation"
            value={data.motivation}
            onChange={handleChange}
          />
        </Motivate>
        <Button onClick={() => {}}>지원하기</Button>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  @media (max-width: 1000px) {
    width: auto;
    gap: 40px;
  }
  gap: 80px;
  margin-bottom: 80px;
`;

const Motivate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1000px) {
    gap: 16px;
  }
`;

const Line = styled.div`
  border: 1px solid #343434;
  width: 100%;
`;

const MajorWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SubInfomation = styled.p`
  font-size: 24px;
  color: #afadb1;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

const MajorInfomation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1000px) {
    gap: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #242424;
  align-items: center;
  padding: 170px 24px 0px 24px;
  @media (max-width: 1000px) {
    padding: 92px 24px 0px 24px;
  }
`;

const Star = styled.span`
  color: #ff756d;
`;

const InfomationText = styled.h2`
  font-size: 32px;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

const BasicInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  @media (max-width: 1000px) {
    gap: 16px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1000px) {
    gap: 12px;
  }
`;

const TitleText = styled.h1`
  font-size: 64px;
  font-weight: 600;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 32px;
  }
`;

const TitleContent = styled.p`
  font-size: 24px;
  color: #c7b4f8;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;
