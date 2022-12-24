import Head from "next/head";
import * as S from "../styles/MainPage/styles";
import VideoPlayer from "../components/VideoPlayer";
import Header from "../components/Header";
import Text from "../components/Text";
import SuggestedVideos from "../components/SuggestedVideos";

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
          <S.VideoDetailsContainer>
            <h1>The Product Review: A Comprehensive Look at the Pros and Cons</h1>
            <S.DescriptionContainer>
              <div className="videoStats">
                <span>652 mil visualizações</span>
                <span>há 3 horas</span>
                <ul id="video-tags">
                  <li>#vídeo</li>
                  <li>#assistirVídeo</li>
                </ul>
              </div>
              <Text>
                In this video, we take a look at a new product that has recently hit the market. With its sleek design and innovative
                features, it&apos;s sure to be a hit with users. Watch as we demonstrate how easy it is to use and highlight some of its key
                benefits. Whether you&apos;re a tech-savvy professional or just looking for a simple and reliable tool, this product is
                definitely worth checking out.
              </Text>
            </S.DescriptionContainer>
          </S.VideoDetailsContainer>
        </S.VideoContainer>
        <SuggestedVideos />
      </S.MainContainer>
    </>
  );
}
