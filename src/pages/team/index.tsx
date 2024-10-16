import { keyframes, styled } from "styled-components";
import TeamImg from "../../assets/teamImg.png";
import DownArrow from "../../assets/downArrow.svg";
import { MemberInfo } from "../../utils/member";
import { MemberIntroduce } from "../../components/memberIntroduce";
import { MissionImage } from "../../assets";
import { CoreValueComponent } from "./components/CoreValueComponent";
import { CareerComponent } from "./components/Careers";
import { Footer } from "../../components/footer";
import { useEffect, useRef, useState } from "react";

export const TeamPage = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const memberContainerRef = useRef<HTMLDivElement>(null);
  const [isHorizontalScroll, setIsHorizontalScroll] = useState(true);

  useEffect(() => {
    const memberObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsHorizontalScroll(true);
        } else {
          setIsHorizontalScroll(false);
        }
      },
      { threshold: 0.99 }
    );

    if (memberContainerRef.current) {
      memberObserver.observe(memberContainerRef.current);
    }

    return () => {
      if (memberContainerRef.current) {
        memberObserver.unobserve(memberContainerRef.current);
      }
    };
  }, []);

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
      { threshold: 0.99 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    const memberObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsHorizontalScroll(true);
        } else {
          setIsHorizontalScroll(false);
        }
      },
      { threshold: 1 }
    );

    if (memberContainerRef.current) {
      memberObserver.observe(memberContainerRef.current);
    }

    return () => {
      if (memberContainerRef.current) {
        memberObserver.unobserve(memberContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!memberContainerRef.current) return;

      if (isHorizontalScroll) {
        memberContainerRef.current.scrollLeft += event.deltaY;

        if (
          memberContainerRef.current.scrollLeft +
            memberContainerRef.current.clientWidth >=
          memberContainerRef.current.scrollWidth
        ) {
          setIsHorizontalScroll(false);
        }
      } else {
        window.scrollBy(0, event.deltaY);
      }

      event.preventDefault();
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isHorizontalScroll]);

  return (
    <>
      <Top>
        <BackgroundImage src={TeamImg} width="100%" alt="" />
        <Title ref={(el) => sectionRefs.current.push(el!)}>
          DSM의 모든 학생과 교직원이 <br />
          서로 연결되는 서비스를 만들어 갑니다.
        </Title>
        <DownArrowStyle src={DownArrow} alt="" />
      </Top>
      <MemberContainer ref={memberContainerRef}>
        {MemberInfo.map((item) => (
          <MemberIntroduce {...item} key={item.name} />
        ))}
      </MemberContainer>

      <CoreValueComponent />
      <Mission>
        <MissionBackground src={MissionImage} />
        <MissionTitle ref={(el) => sectionRefs.current.push(el!)}>
          Team Mission
        </MissionTitle>
        <MissionContent ref={(el) => sectionRefs.current.push(el!)}>
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

const Section = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${reveal} 0.5s ease forwards;
  }
`;

const MissionTitle = styled(Section)`
  width: 100%;
  top: 260px;
  position: absolute;
  font-size: 60px;
  font-weight: 600;
  color: #afadb1;
  text-align: center;
`;

const MissionContent = styled(Section)`
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
  padding-left: 200px;
  margin-top: 50vh;
  display: flex;
  align-items: center;
  overflow-x: auto;
  height: 100vh;
`;

const Top = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
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

const Title = styled(Section)`
  font-size: 72px;
  font-weight: 600;
  color: white;
  position: absolute;
  bottom: 216px;
  padding-left: 200px;
`;
