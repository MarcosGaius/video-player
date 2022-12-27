import { useEffect, useContext, useState } from "react";
import Image from "next/image";
import { ISuggestedVideos } from "../../mock/video";
import * as S from "./styles";
import { VideoContext } from "../../providers/Video";

export default function VideoItem({ thumbnail, title, channel, views, date, duration }: ISuggestedVideos) {
  const [videoTitle, setVideoTitle] = useState<string>(title);
  const { isTheaterMode } = useContext(VideoContext);

  useEffect(() => {
    if (isTheaterMode) {
      setVideoTitle(title);
      return;
    }
    if (title.length > 45 && window.innerWidth > 1024) {
      setVideoTitle(title.slice(0, 45) + "...");
    }
  }, [title, isTheaterMode]);

  return (
    <S.ItemContainer>
      <figure>
        <Image src={thumbnail} alt={`${title}, video image.`} width="170" height="90" />
      </figure>
      <S.ItemDetails>
        <div className="videoTitle">
          <p>{videoTitle}</p>
        </div>
        <div className="videoInfos">
          <small>{channel}</small>
          <small>{`${views} visualizações • há ${date}`}</small>
        </div>
      </S.ItemDetails>
    </S.ItemContainer>
  );
}
