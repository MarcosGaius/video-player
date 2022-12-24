import Image from "next/image";
import { ISuggestedVideos } from "../../mock/video";
import * as S from "./styles";

export default function VideoItem({ thumbnail, title, channel, views, date, duration }: ISuggestedVideos) {
  if (title.length > 45) {
    title = title.slice(0, 45) + "...";
  }

  return (
    <S.ItemContainer>
      <figure>
        <Image src={thumbnail} alt={`${title}, video image.`} width="170" height="90" />
      </figure>
      <S.ItemDetails>
        <div className="videoTitle">
          <p>{title}</p>
        </div>
        <div className="videoInfos">
          <small>{channel}</small>
          <small>{`${views} visualizações • há ${date}`}</small>
        </div>
      </S.ItemDetails>
    </S.ItemContainer>
  );
}
