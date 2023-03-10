import { useEffect, useState, ChangeEvent, useCallback, createRef } from "react";
import * as S from "./styles";
import {
  IoMdPlay,
  IoMdPause,
  IoMdSkipForward,
  IoMdVolumeLow,
  IoMdVolumeOff,
  IoMdVolumeHigh,
  IoMdRefresh,
  IoMdSettings,
  IoMdExpand,
  IoMdContract,
} from "react-icons/io";
import { formatSecondsToString, checkIsTouchscreenDevice } from "../../utils";
import { TbRectangle } from "react-icons/tb";
import { useContext } from "react";
import { VideoContext } from "../../providers/Video";
import { ProgressBar } from "../ProgressBar";
import RangeInput from "../RangeInput";
import SettingsMenu from "../SettingsMenu";

export default function PlayerControls() {
  const { currentVideo, setShowVideoLoading, setIsTheaterMode, isTheaterMode, setShowSettings, showSettings } = useContext(VideoContext);

  const progressRef = createRef<HTMLDivElement>();

  const [videoVolume, setVideoVolume] = useState<number>(Number(localStorage.getItem("@videoplayer:prefered_volume")) || 0.5);
  const [currentVideoTime, setCurrentVideoTime] = useState<number>(0);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(localStorage.getItem("@videoplayer:muted") === "true");
  const [isVideoPaused, setIsVideoPaused] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleShowSettingsMenu = () => {
    setShowSettings((currentValue) => !currentValue);
  };

  const playOrPauseVideo = useCallback(
    (e: any) => {
      if (currentVideo) {
        if (currentVideo.paused || currentVideo.ended) {
          currentVideo.play();
          setIsVideoPaused(false);
        } else {
          currentVideo.pause();
          setIsVideoPaused(true);
        }
      }
    },
    [currentVideo]
  );

  const muteVideo = useCallback(() => {
    if (currentVideo) {
      currentVideo.muted = !currentVideo.muted;
      setIsVideoMuted(currentVideo.muted);
      localStorage.setItem("@videoplayer:muted", `${currentVideo.muted}`);
    }
  }, [currentVideo]);

  const skipVideoToEnd = useCallback(() => {
    if (currentVideo) {
      currentVideo.currentTime = currentVideo.duration - 0.5;
    }
  }, [currentVideo]);

  const handleVolumeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (currentVideo) {
        const value = Number(e.target.value) / 100;
        currentVideo.volume = value;

        if (value === 0) {
          setIsVideoMuted(true);
          localStorage.setItem("@videoplayer:muted", "true");
        } else {
          setVideoVolume(value);
          setIsVideoMuted(false);
          localStorage.setItem("@videoplayer:prefered_volume", `${value}`);
          localStorage.setItem("@videoplayer:muted", "false");
        }
      }
    },
    [currentVideo]
  );

  const handleFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      isTheaterMode && setIsTheaterMode(false);
      await currentVideo?.parentElement?.requestFullscreen();
    }
  }, [currentVideo, setIsTheaterMode, isTheaterMode]);

  const handleTheaterMode = useCallback(() => {
    setIsTheaterMode((currentValue) => !currentValue);
  }, [setIsTheaterMode]);

  useEffect(() => {
    if (currentVideo) {
      const isTouchDevice = checkIsTouchscreenDevice();

      const progressBar = progressRef.current;
      currentVideo.volume = videoVolume;
      currentVideo.muted = isVideoMuted;

      const handleTimeUpdate = () => {
        if (currentVideoTime !== currentVideo.currentTime) {
          setCurrentVideoTime(currentVideo.currentTime);
          setShowVideoLoading(false);
        }
      };

      const handleEndedVideo = () => {
        setIsVideoPaused(true);
      };

      let isDragging = false;

      const isDraggingSetter = (bool: boolean) => {
        isDragging = bool;
      };

      const handleBarDragging = (event: any) => {
        if (isDragging || event.type === "click") {
          const progressRectangle = event.target.getBoundingClientRect();

          const clickedWidth =
            isTouchDevice && event.type !== "click"
              ? event.targetTouches[0].pageX - progressRectangle.left
              : event.pageX - progressRectangle.left;

          const totalWidth = progressBar!.offsetWidth;

          // Reducing precision to reduce seeking blocking/delay
          const newVideoTime = Number(((clickedWidth / totalWidth) * currentVideo.duration).toFixed(2));
          setCurrentVideoTime(newVideoTime);

          currentVideo.currentTime = newVideoTime;
        }
      };

      const handleFullScreenChange = () => {
        setIsFullscreen((currentValue) => !currentValue);
      };

      const handleVideoSeek = (event: any) => {
        if (event?.type === "seeking") {
          setShowVideoLoading(true);
        } else {
          setShowVideoLoading(false);
        }
      };

      // Listeners for both device types (Touchscreen / Mouse)

      progressBar?.addEventListener("click", (e) => handleBarDragging(e));

      currentVideo.addEventListener("timeupdate", handleTimeUpdate);
      currentVideo.addEventListener("ended", handleEndedVideo);
      currentVideo.addEventListener("seeking", handleVideoSeek);
      currentVideo.addEventListener("seeked", handleVideoSeek);

      document.addEventListener("fullscreenchange", handleFullScreenChange);

      // Listeners for exclusive device types (Touchscreen / Mouse)

      if (isTouchDevice) {
        let hideTimeoutId: NodeJS.Timeout;

        const handleHideControls = (e: any) => {
          const eventTarget = e.target;

          if (eventTarget.localName !== "svg" && eventTarget.localName !== "path" && eventTarget.dataset["type"] !== "controller") {
            progressBar?.parentElement?.setAttribute("style", "display: none");

            if (showSettings) {
              clearTimeout(hideTimeoutId);
            }
          }
        };

        const handleShowControls = (e: any) => {
          progressBar?.parentElement?.setAttribute("style", "display: flex");

          if (showSettings) {
            hideTimeoutId = setTimeout(() => {
              progressBar?.parentElement?.setAttribute("style", "display: none");
            }, 3000);
          }
        };

        progressBar?.addEventListener("touchstart", () => isDraggingSetter(true));
        progressBar?.addEventListener("touchend", () => isDraggingSetter(false));
        progressBar?.addEventListener("touchcancel", () => isDraggingSetter(false));
        progressBar?.addEventListener("touchmove", (e) => handleBarDragging(e));

        progressBar?.parentElement?.addEventListener("touchend", handleHideControls);

        currentVideo.addEventListener("touchend", handleShowControls);
      } else {
        progressBar?.addEventListener("mousemove", (e) => handleBarDragging(e));
        progressBar?.addEventListener("mousedown", () => isDraggingSetter(true));
        progressBar?.addEventListener("mouseup", () => isDraggingSetter(false));
        progressBar?.addEventListener("mouseleave", () => isDraggingSetter(false));

        currentVideo.addEventListener("click", playOrPauseVideo);
      }

      return () => {
        progressBar?.removeEventListener("click", (e) => handleBarDragging(e));

        currentVideo.removeEventListener("timeupdate", handleTimeUpdate);
        currentVideo.removeEventListener("ended", handleEndedVideo);
        currentVideo.removeEventListener("seeking", handleVideoSeek);
        currentVideo.removeEventListener("seeked", handleVideoSeek);

        document.removeEventListener("fullscreenchange", handleFullScreenChange);
      };
    }
  }, [
    currentVideo,
    isVideoPaused,
    videoVolume,
    progressRef,
    playOrPauseVideo,
    currentVideoTime,
    setShowVideoLoading,
    isVideoMuted,
    showSettings,
  ]);

  return (
    <S.ControlsContainer id="controls-container" className={showSettings ? "openSettings" : ""}>
      <ProgressBar id="progress-bar" value={currentVideoTime} max={currentVideo?.duration || 0} ref={progressRef}></ProgressBar>
      <S.ControlButtons>
        <S.LeftControls>
          <li id="play-button">
            <button onClick={playOrPauseVideo} aria-label="Play and Pause">
              {
                // If the video is not finished yet, verifies if the video paused and shows the respective icon, else show the reload icon.
              }
              {currentVideo?.currentTime !== currentVideo?.duration ? isVideoPaused ? <IoMdPlay /> : <IoMdPause /> : <IoMdRefresh />}
            </button>
          </li>
          <li id="skip-button">
            <button onClick={skipVideoToEnd} aria-label="Skip to end">
              <IoMdSkipForward />
            </button>
          </li>
          <li id="volume-button">
            <div className="volumeControls">
              <button onClick={muteVideo} aria-label="Volume">
                {isVideoMuted ? <IoMdVolumeOff /> : videoVolume <= 0.5 ? <IoMdVolumeLow /> : <IoMdVolumeHigh />}
              </button>
              <RangeInput defaultValue={isVideoMuted ? 0 : videoVolume * 100} onChange={handleVolumeChange} />
            </div>
          </li>
          <li id="video-timer" className="videoTimer">
            <p>{`${formatSecondsToString(currentVideoTime || 0)} / ${formatSecondsToString(currentVideo?.duration || 0)}`}</p>
          </li>
        </S.LeftControls>
        <S.RightControls>
          <li id="settings-button">
            <button aria-label="Settings" onClick={handleShowSettingsMenu}>
              <IoMdSettings />
            </button>
          </li>
          {!isFullscreen && (
            <li id="theater-button">
              <button aria-label="Theater Mode" onClick={handleTheaterMode}>
                <TbRectangle />
              </button>
            </li>
          )}
          <li id="fullscreen-button">
            <button onClick={handleFullscreen} aria-label="Fullscreen Mode">
              {isFullscreen ? <IoMdContract /> : <IoMdExpand />}
            </button>
          </li>
        </S.RightControls>
      </S.ControlButtons>
      {showSettings && <SettingsMenu />}
    </S.ControlsContainer>
  );
}
