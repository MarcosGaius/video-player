import { useEffect, useState, ChangeEvent, useCallback, createRef } from "react";
import * as S from "./styles";
import {
  IoRefreshSharp,
  IoPlaySharp,
  IoPlaySkipForwardSharp,
  IoVolumeHighSharp,
  IoVolumeMuteSharp,
  IoPauseSharp,
  IoVolumeLowSharp,
} from "react-icons/io5";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";
import { TbRectangle } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { useContext } from "react";
import { VideoContext } from "../../providers/Video";
import { formatSecondsToString } from "../../utils/formatSecondsToString";
import RangeInput from "../RangeInput";
import { ProgressBar } from "../ProgressBar";

export default function PlayerControls() {
  const { currentVideo } = useContext(VideoContext);
  const progressRef = createRef<HTMLProgressElement>();
  const [videoVolume, setVideoVolume] = useState<number>(Number(localStorage.getItem("@videoplayer:prefered_volume") || 0.5));
  const [currentVideoTime, setCurrentVideoTime] = useState<number>(0);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(currentVideo?.muted || false);
  const [isVideoPaused, setIsVideoPaused] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const playOrPauseVideo = useCallback(() => {
    if (currentVideo) {
      if (currentVideo.paused || currentVideo.ended) {
        currentVideo.play();
        setIsVideoPaused(false);
      } else {
        currentVideo.pause();
        setIsVideoPaused(true);
      }
    }
  }, [currentVideo]);

  const muteVideo = useCallback(() => {
    if (currentVideo) {
      currentVideo.muted = !currentVideo.muted;
      setIsVideoMuted(currentVideo.muted);
      setVideoVolume(currentVideo.volume);
    }
  }, [currentVideo]);

  const skipVideoToEnd = useCallback(() => {
    if (currentVideo) {
      currentVideo.currentTime += currentVideo.duration - 1;
    }
  }, [currentVideo]);

  const handleVolumeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (currentVideo) {
        const value = Number(e.target.value) / 100;
        currentVideo.volume = value;
        setVideoVolume(value);

        if (value === 0) {
          setIsVideoMuted(true);
        } else {
          setIsVideoMuted(false);
        }

        localStorage.setItem("@videoplayer:prefered_volume", `${value}`);
      }
    },
    [currentVideo]
  );

  const handleFullscreen = useCallback(async () => {
    console.log("document.fullscreenElement", document.fullscreenElement);
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      await currentVideo?.parentElement?.requestFullscreen();
      setIsFullscreen(true);
    }
  }, [currentVideo]);

  useEffect(() => {
    if (currentVideo) {
      const progressBar = progressRef.current;
      currentVideo.volume = videoVolume;

      const handleTimeUpdate = () => {
        setCurrentVideoTime(currentVideo.currentTime);
      };

      const handleEndedVideo = () => {
        setIsVideoPaused(true);
      };

      let isDragging = false;

      const handleBarDragging = (event: any, isClick = false) => {
        if (isDragging || isClick) {
          const totalWidth = event.target.offsetWidth;
          const clickedWidth = event.offsetX;

          currentVideo.currentTime = (clickedWidth / totalWidth) * currentVideo.duration;
          setCurrentVideoTime(currentVideo.currentTime);
        }
      };

      progressBar?.addEventListener("click", (e) => handleBarDragging(e, true));

      progressBar?.addEventListener("mousedown", () => {
        isDragging = true;
      });

      progressBar?.addEventListener("mouseup", (e) => {
        isDragging = false;
        handleBarDragging(e);
      });

      progressBar?.addEventListener("mouseleave", (e) => {
        isDragging = false;
        handleBarDragging(e);
      });

      progressBar?.addEventListener("mousemove", (e) => handleBarDragging(e));

      currentVideo.addEventListener("timeupdate", handleTimeUpdate);
      currentVideo.addEventListener("ended", handleEndedVideo);
      currentVideo.addEventListener("click", playOrPauseVideo);

      return () => {
        progressBar?.addEventListener("click", (e) => handleBarDragging(e, true));
        progressBar?.removeEventListener("mousedown", () => {
          isDragging = true;
        });
        progressBar?.addEventListener("mouseup", (e) => {
          isDragging = false;
          handleBarDragging(e);
        });

        progressBar?.addEventListener("mouseleave", (e) => {
          isDragging = false;
          handleBarDragging(e);
        });
        currentVideo.removeEventListener("timeupdate", handleTimeUpdate);
        currentVideo.removeEventListener("ended", handleEndedVideo);
        currentVideo.removeEventListener("click", playOrPauseVideo);
      };
    }
  }, [currentVideo, isVideoPaused, videoVolume, progressRef, playOrPauseVideo]);

  return (
    <S.ControlsContainer id="controls-container">
      <ProgressBar value={currentVideoTime} max={currentVideo?.duration} ref={progressRef}></ProgressBar>
      <S.ControlButtons>
        <S.LeftControls>
          <li>
            <button onClick={playOrPauseVideo} aria-label="Play and Pause">
              {
                // If the video is not finished yet, verifies if the video paused and shows the respective icon, else show the reload icon.
              }
              {currentVideo?.currentTime !== currentVideo?.duration ? (
                isVideoPaused ? (
                  <IoPlaySharp />
                ) : (
                  <IoPauseSharp />
                )
              ) : (
                <IoRefreshSharp />
              )}
            </button>
          </li>
          <li>
            <button onClick={skipVideoToEnd} aria-label="Skip to end">
              <IoPlaySkipForwardSharp />
            </button>
          </li>
          <li>
            <div className="volumeControls">
              <button onClick={muteVideo} aria-label="Volume">
                {isVideoMuted ? <IoVolumeMuteSharp /> : videoVolume <= 0.5 ? <IoVolumeLowSharp /> : <IoVolumeHighSharp />}
              </button>
              <RangeInput defaultValue={isVideoMuted ? 0 : videoVolume * 100} onChange={handleVolumeChange} />
            </div>
          </li>
          <li className="videoTimer">
            <p>{`${formatSecondsToString(currentVideoTime || 0)} / ${formatSecondsToString(currentVideo?.duration || 0)}`}</p>
          </li>
        </S.LeftControls>
        <S.RightControls>
          <li>
            <button aria-label="Configurations">
              <GoGear />
            </button>
          </li>
          <li>
            <button aria-label="Theater Mode">
              <TbRectangle />
            </button>
          </li>
          <li>
            <button onClick={handleFullscreen} aria-label="Fullscreen Mode">
              {isFullscreen ? <MdOutlineFullscreenExit /> : <MdOutlineFullscreen />}
            </button>
          </li>
        </S.RightControls>
      </S.ControlButtons>
    </S.ControlsContainer>
  );
}
