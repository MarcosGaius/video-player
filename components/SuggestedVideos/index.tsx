import * as S from "./styles";
import { videoSuggestions } from "../../mock/video";
import VideoItem from "../VideoItem";

export default function SuggestedVideos() {
  return (
    <S.SuggestionsContainer>
      {videoSuggestions.map((video) => {
        return <VideoItem key={video.id} {...video} />;
      })}
    </S.SuggestionsContainer>
  );
}
