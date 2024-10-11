import { keyframes, styled } from "styled-components";
import TeamImg from "../../assets/teamImg.png";
import DownArrow from "../../assets/downArrow.svg";
import { MemberInfo } from "../../utils/member";
import { MemberIntroduce } from "../../components/memberIntroduce";
import { MissionImage } from "../../assets";
import { CoreValueComponent } from "./components/CoreValueComponent";
import { CareerComponent } from "./components/Careers";
import { Footer } from "../../components/footer";

export const TeamPage = () => {
  return (
    <>
      <Top>
        <BackgroundImage src={TeamImg} width="100%" alt="" />
        <Title>
          DSM의 모든 학생과 교직원이 <br />
          서로 연결되는 서비스를 만들어 갑니다.
        </Title>
        <DownArrowStyle src={DownArrow} alt="" />
        <div></div>
      </Top>
      <MemberContainer>
        {MemberInfo.map((item) => (
          <MemberIntroduce {...item} key={item.name} />
        ))}
      </MemberContainer>
      <CoreValueComponent />
      <Mission>
        <MissionBackground src={MissionImage} />
        <MissionTitle>Team Mission</MissionTitle>
        <MissionContent>
          우리 팀은 DSM이 실현하는 일상의 소중한 가치를 바탕으로,
          <br />
          참여와 혁신을 통해 함께 성장하는 미래를 만들어갑니다.
          <br />
          우리는 모든 학생과 교직원이 서로 연결된 서비스를 통해 <br />
          혁신적인 기술로 편안하고 새로운 경험을 제공하며,
          <br />
          지식을 나누고 지속적으로 더 나은 교육 환경을 조성하는 것을 미션으로
          삼습니다.
        </MissionContent>
      </Mission>
      <CareerComponent />
      <Footer />
    </>
  );
};

const MissionTitle = styled.h1`
  width: 100%;
  top: 260px;
  position: absolute;
  font-size: 60px;
  font-weight: 600;
  color: #afadb1;
  text-align: center;
`;

const MissionContent = styled.p`
  width: 100%;
  top: 476px;
  position: absolute;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: white;
`;

const Mission = styled.div`
  width: 100%;
  height: 1080px;
  position: relative;
  overflow: hidden;
`;

const MissionBackground = styled.img`
  width: 100%;
  height: 1080px;
  background-size: cover;
  background-position: center;
`;

const MemberContainer = styled.div`
  background-color: #242424;
  padding: 132px 0px 190px 200px;
  display: flex;
  overflow: auto;
`;

const BackgroundImage = styled.img`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Top = styled.div`
  width: 100%;
  height: 100dvh;
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
  z-index: -1;
`;

const Title = styled.div`
  font-size: 72px;
  font-weight: 600;
  color: white;
  position: absolute;
  bottom: 216px;
  padding-left: 200px;
`;
