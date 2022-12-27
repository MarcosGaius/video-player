import { createRef, MouseEvent, useCallback, useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { ISuggestedVideos, videoSuggestions } from "../../mock/video";
import VideoItem from "../VideoItem";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { VideoContext } from "../../providers/Video";

interface ISuggestVideosProps {
  id: string;
}

export default function SuggestedVideos({ id }: ISuggestVideosProps) {
  const { isTheaterMode } = useContext(VideoContext);
  const [translateX, setTranslateX] = useState<number>(0);
  const [filteredVideos, setFilteredVideos] = useState<ISuggestedVideos[]>(videoSuggestions);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(true);
  const [menuElement, setMenuElement] = useState<HTMLDivElement>();

  // const menuRef = createRef<HTMLDivElement>();
  const measuredMenuRef = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null) {
        setMenuElement(node);
      }
    },
    // eslint may warn, but is needed as the theater mode changes the filter container width (needed for the overflow check)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isTheaterMode]
  );

  const handleFiltering = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const filter = target.id;

    const lastActiveElem = document.querySelector(".activeFilter");
    lastActiveElem?.classList.remove("activeFilter");
    target.classList.add("activeFilter");

    if (filter === "all") {
      setFilteredVideos(videoSuggestions);
      return;
    }

    setFilteredVideos(() => {
      return videoSuggestions.filter((video) => video.category === filter);
    });
  };

  const handleMenuSlide = (e: MouseEvent<HTMLButtonElement>, type: string) => {
    if (menuElement) {
      const halfMenuWidth = menuElement.offsetWidth / 2;

      if (type === "end") {
        setTranslateX((currentValue) => currentValue - halfMenuWidth);
      } else {
        setTranslateX((currentValue) => currentValue + halfMenuWidth);
      }
    }
  };

  useEffect(() => {
    if (menuElement) {
      const menuWidth = menuElement.parentElement?.offsetWidth || 0;

      const buttonsArray = Array.from(menuElement.children);
      const lastButton = buttonsArray[buttonsArray.length - 1] as HTMLDivElement;

      const lastButtonPos = lastButton.offsetLeft + lastButton.offsetWidth + translateX;

      setIsOverflowing(lastButtonPos > menuWidth);
    }
  }, [menuElement, translateX, isTheaterMode]);

  return (
    <S.SuggestionsContainer id={id}>
      <S.FiltersContainer>
        {translateX !== 0 && (
          <S.FilterButton id="start-arrow" onClick={(e) => handleMenuSlide(e, "start")}>
            <SlArrowLeft />
          </S.FilterButton>
        )}
        {isOverflowing && (
          <S.FilterButton id="end-arrow" onClick={(e) => handleMenuSlide(e, "end")}>
            <SlArrowRight />
          </S.FilterButton>
        )}
        <S.FiltersButtons ref={measuredMenuRef} data-translate={translateX || 0}>
          <button id="all" className="activeFilter" onClick={handleFiltering}>
            Tudo
          </button>
          <button id="personal" onClick={handleFiltering}>
            Para você
          </button>
          <button id="new" onClick={handleFiltering}>
            Recentes
          </button>
          <button id="similar" onClick={handleFiltering}>
            Similares
          </button>
          <button id="hot" onClick={handleFiltering}>
            Em alta
          </button>
          <button id="watched" onClick={handleFiltering}>
            Assistidos
          </button>
        </S.FiltersButtons>
      </S.FiltersContainer>
      <S.VideosContainer>
        {filteredVideos.map((video) => {
          return <VideoItem key={video.id} {...video} />;
        })}
      </S.VideosContainer>
    </S.SuggestionsContainer>
  );
}
