import { useEffect, useRef } from "react";
import { styled, keyframes } from "styled-components";
import SecondImg from "../assets/second.png";
import { Footer } from "../components/footer";
import { History } from "../utils/history";
import { PiCKVideo } from "../assets";

export const VideoPage = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const io = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    io.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    const boxElList = sectionRefs.current;
    boxElList.forEach(el => {
      if (el) {
        io.current?.observe(el);
      }
    });

    return () => {
      boxElList.forEach(el => {
        if (el) {
          io.current?.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <Container>
      <FirstTitle ref={el => el && sectionRefs.current.push(el)}>
        <Title>
          'DSM이 실현하는 일상의 소중한 가치'라는 <br /> 비전으로
        </Title>
        <SubTitle>
          참여를 통해 혁신을 이루고, 연결을 통해 지식을 나누며 함께 성장하는
          미래를 만들어갑니다.
        </SubTitle>
      </FirstTitle>
      <Video src={PiCKVideo} autoPlay controls muted />

      <SecondTitle ref={el => el && sectionRefs.current.push(el)}>
        <Title>DSM의 일상을 연결하는 서비스</Title>
        <SubTitle>
          누구에게나 일상 속에서 혁신적인 기술로 편안하고 새로운 경험을
          제공합니다.
        </SubTitle>
      </SecondTitle>

      <Third ref={el => el && sectionRefs.current.push(el)}>
        <img src={SecondImg} width="100%" height="1000px" alt="" />
        <Daily>일상을 더 편리하게</Daily>
        <Backgrounds />
      </Third>

      <Fourth >
        <Animaririrri ref={el => el && sectionRefs.current.push(el)}>
          <FourthTitle>픽이 만들어 온 길</FourthTitle>
          <FourthSubTitle>
            픽은 계속되는 새로운 도전으로 우리의 길을 만들어 나가고 있습니다
          </FourthSubTitle>
        </Animaririrri>
        <HistoryWrap ref={el => el && sectionRefs.current.push(el)}>
          {History.map((item) => (
            <HistoryCard>
              <Circle />
              <Date>{item.date}</Date>
              <Explain>{item.explain}</Explain>
            </HistoryCard>
          ))}
        </HistoryWrap>
      </Fourth>
      <Footer />
    </Container>
  );
};

const HistoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 14px;
    left: 50%;
    width: 90%;
    height: 0;
    border-bottom: 4px dashed #987cf1;
    transform: translateX(-50%);
  }
`;


const Circle = styled.div`
  width: 32px;
  height: 32px;
  background-color: #AE96F5;
  border-radius: 50%;
  z-index: 2;
`

const HistoryCard = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const Date = styled.p`
margin-top: 8px;
  font-size : 32px;
  color : #fff;
  font-weight: 700;
`

const Explain = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #848287;
`

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

const Container = styled.div`
  width: 100%;
  background-color: #242424;
  padding-top: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 300px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 64px;
  font-weight: 600;
  color: white;
`;

const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #afadb1;
`;

const Video = styled.video`
  width: 1000px;
  height: 520px;
  border-radius: 20px;
  overflow: hidden;
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

const FirstTitle = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const SecondTitle = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const Animaririrri = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 206px 0px;
  gap: 28px;
`;

const Third = styled(Section)`
  position: relative;
`;

const Daily = styled.p`
  position: absolute;
  color: white;
  font-size: 100px;
  font-weight: 600;
  top: 380px;
  z-index: 10;
  width: 100%;
  text-align: center;
`;

const Backgrounds = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 748px;
  background: linear-gradient(
    180deg,
    #242424 0%,
    rgba(36, 36, 36, 0.5) 68%,
    rgba(36, 36, 36, 0) 100%
  );
`;

const Fourth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 28px;
`;

const FourthTitle = styled.p`
  font-size: 64px;
  color: white;
  font-weight: 600;
`;

const FourthSubTitle = styled.p`
  color: #afadb1;
  font-size: 32px;
  font-weight: 500;
`;
