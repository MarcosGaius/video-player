import { createRef, useContext } from "react";
import { useEffect, useRef, useState } from "react";
import { VideoContext } from "../../providers/Video";
import Loader from "../Loader";
import PlayerControls from "../PlayerControls";
import * as S from "./styles";

export default function VideoPlayer() {
  const videoRef = createRef<HTMLVideoElement>();
  const [isVideoSuported, setIsVideoSuported] = useState<boolean>();
  const { setCurrentVideo, showVideoLoading } = useContext(VideoContext);

  useEffect(() => {
    setCurrentVideo(videoRef.current);
    setIsVideoSuported(Boolean(videoRef.current));
  }, [setCurrentVideo, videoRef]);

  return (
    <S.VideoWrapper>
      {showVideoLoading && <Loader />}
      <video controls={isVideoSuported ? false : true} preload="metadata" poster="" ref={videoRef}>
        <source src="/assets/videos/sample_1mb.mp4" type="" />
      </video>
      {isVideoSuported && <PlayerControls />}
    </S.VideoWrapper>
  );
}
