import { useContext, useEffect, MouseEvent, useCallback } from "react";
import * as S from "./styles";
import { SiSpeedtest } from "react-icons/si";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";
import { BsCheck2 } from "react-icons/bs";
import { useState } from "react";
import { VideoContext } from "../../providers/Video";

type ISubMenus = "playbackRate" | "customPlaybackRate" | "";

export default function SettingsMenu() {
  const { setShowSettings, currentVideo } = useContext(VideoContext);

  const [activeSubMenu, setActiveSubMenu] = useState<ISubMenus>("");
  const [playbackRate, setPlaybackRate] = useState<number>(1);

  const handleShowPlayback = (menu: ISubMenus) => {
    setActiveSubMenu(menu);
  };

  const handlePlaybackChange = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      if (currentVideo) {
        const playbackSpeed = Number((e.target as HTMLLIElement).id);
        currentVideo.playbackRate = playbackSpeed;
        setActiveSubMenu("");
        setPlaybackRate(playbackSpeed);
      }
    },
    [currentVideo]
  );

  useEffect(() => {
    const handleMenuClick = (e: globalThis.MouseEvent) => {
      if ((e.target as HTMLElement).id === "settings-wrapper") {
        console.log("settings-wrapper");
        setShowSettings(false);
      }
    };

    document.addEventListener("click", handleMenuClick);

    return () => {
      document.removeEventListener("click", handleMenuClick);
    };
  }, [setShowSettings]);

  return (
    <>
      <S.SettingsWrapper id="settings-wrapper"></S.SettingsWrapper>
      <S.SettingsContainer>
        {activeSubMenu === "playbackRate" && (
          <S.PlaybackSection>
            <S.MenuHeader>
              <div onClick={() => handleShowPlayback("")}>
                <TbChevronLeft />
                <p>Velocidade da reprodução</p>
              </div>
              <small>Personalizado</small>
            </S.MenuHeader>
            <ul>
              <S.SettingsItem id="custom-x">
                <BsCheck2 />
                <p>Personalizado</p>
              </S.SettingsItem>
              <S.SettingsItem id="0.25" onClick={handlePlaybackChange}>
                <BsCheck2 className={playbackRate === 0.25 ? "activeRate" : ""} />
                <p>0.25</p>
              </S.SettingsItem>
              <S.SettingsItem id="0.5" onClick={handlePlaybackChange}>
                <BsCheck2 className={playbackRate === 0.5 ? "activeRate" : ""} />
                <p>0.5</p>
              </S.SettingsItem>
              <S.SettingsItem id="0.75" onClick={handlePlaybackChange}>
                <BsCheck2 className={playbackRate === 0.75 ? "activeRate" : ""} />
                <p>0.75</p>
              </S.SettingsItem>
              <S.SettingsItem id="1" onClick={handlePlaybackChange}>
                <BsCheck2 className={playbackRate === 1 ? "activeRate" : ""} />
                <p>Normal</p>
              </S.SettingsItem>
              <S.SettingsItem id="1.25" onClick={handlePlaybackChange}>
                <BsCheck2 className={playbackRate === 1.25 ? "activeRate" : ""} />
                <p>1.25</p>
              </S.SettingsItem>
              <S.SettingsItem id="1.5" onClick={handlePlaybackChange}>
                <BsCheck2 className={playbackRate === 1.5 ? "activeRate" : ""} />
                <p>1.5</p>
              </S.SettingsItem>
              <S.SettingsItem id="1.75" onClick={handlePlaybackChange}>
                <BsCheck2 className={playbackRate === 1.75 ? "activeRate" : ""} />
                <p>1.75</p>
              </S.SettingsItem>
              <S.SettingsItem id="2" onClick={handlePlaybackChange}>
                <BsCheck2 className={playbackRate === 2 ? "activeRate" : ""} />
                <p>2</p>
              </S.SettingsItem>
            </ul>
          </S.PlaybackSection>
        )}
        {activeSubMenu === "" && (
          <ul>
            <S.SettingsItem onClick={() => handleShowPlayback("playbackRate")}>
              <SiSpeedtest />
              <p>Velocidade da reprodução</p>
              <S.ChosenOption>
                <p>{playbackRate === 1 ? "Normal" : playbackRate}</p>
                <TbChevronRight />
              </S.ChosenOption>
            </S.SettingsItem>
          </ul>
        )}
      </S.SettingsContainer>
    </>
  );
}
