import Head from "next/head";
import * as S from "../styles/MainPage/styles";
import VideoPlayer from "../components/VideoPlayer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Video Player</title>
        <meta name="description" content="Plays a video :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <S.MainContainer>
        <S.VideoContainer>
          <VideoPlayer />
        </S.VideoContainer>
      </S.MainContainer>
    </>
  );
}
