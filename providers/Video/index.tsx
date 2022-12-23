import { createContext, MutableRefObject, ReactNode, useState, SetStateAction, Dispatch } from "react";
import VideoPlayer from "../../components/VideoPlayer";

interface IVideoProviderProps {
  children: ReactNode;
}

interface IVideoProviderData {
  currentVideo: HTMLVideoElement | null;
  setCurrentVideo: Dispatch<SetStateAction<HTMLVideoElement | null>>;
}

export const VideoContext = createContext({} as IVideoProviderData);

export default function VideoProvider({ children }: IVideoProviderProps) {
  const [currentVideo, setCurrentVideo] = useState<HTMLVideoElement | null>(null);

  return <VideoContext.Provider value={{ currentVideo, setCurrentVideo }}>{children}</VideoContext.Provider>;
}
