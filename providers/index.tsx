import VideoProvider from "./Video";
import { ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return <VideoProvider>{children}</VideoProvider>;
}
