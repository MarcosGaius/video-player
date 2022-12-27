import { createContext, ReactNode, useState, SetStateAction, Dispatch } from "react";

interface IVideoProviderProps {
  children: ReactNode;
}

interface IVideoProviderData {
  currentVideo: HTMLVideoElement | null;
  setCurrentVideo: Dispatch<SetStateAction<HTMLVideoElement | null>>;
  showVideoLoading: boolean;
  setShowVideoLoading: Dispatch<SetStateAction<boolean>>;
  isTheaterMode: boolean;
  setIsTheaterMode: Dispatch<SetStateAction<boolean>>;
  showSettings: boolean;
  setShowSettings: Dispatch<SetStateAction<boolean>>;
}

export const VideoContext = createContext({} as IVideoProviderData);

export default function VideoProvider({ children }: IVideoProviderProps) {
  const [currentVideo, setCurrentVideo] = useState<HTMLVideoElement | null>(null);
  const [showVideoLoading, setShowVideoLoading] = useState<boolean>(false);
  const [isTheaterMode, setIsTheaterMode] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <VideoContext.Provider
      value={{
        showSettings,
        setShowSettings,
        isTheaterMode,
        setIsTheaterMode,
        currentVideo,
        setCurrentVideo,
        showVideoLoading,
        setShowVideoLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}
