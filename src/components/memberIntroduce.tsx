import { styled } from "styled-components";
import { MemberProp } from "../types";

export const MemberIntroduce = ({ name, image, job, children }: MemberProp) => {
  return (
    <Container>
      <Profile src={image} />
      <Top>
        <Name>{name}</Name>
        <Job>{job}</Job>
      </Top>
      <ContentText>{children}</ContentText>
    </Container>
  );
};

const Container = styled.div`
  padding: 36px;
  background-color: #343434;
  border-radius: 20px;
  min-width: 620px;
  max-width: 620px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-right: 54px;
`;

const Top = styled.div`
  display: flex;
  gap: 16px;
`;

const Name = styled.p`
  font-size: 40px;
  font-weight: 600;
  color: white;
`;

const Job = styled.p`
  font-size: 40px;
  color: #ae96f5;
`;

const Profile = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const ContentText = styled.p`
  font-size: 28px;
  color: #afadb1;
`;
