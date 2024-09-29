import { styled } from "styled-components";
import VideoTest from "../assets/461140122_8283912115019033_7240828306824859251_n.mp4";
import { Header } from "../components/header";
import { TopContent } from "../components/TopContent";

export const Main = () => {
  console.log(VideoTest);
  return (
    <>
      <Content>
        <Header />
        <TopContent />

        <Video autoPlay muted loop>
          <source src={VideoTest} type="video/mp4" width={1920} height={1080} />
        </Video>
      </Content>
    </>
  );
};

const Content = styled.div`
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
