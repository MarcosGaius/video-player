import "../styles/globals.css";
import "../styles/reset.css";
import type { AppProps } from "next/app";
import { Roboto, Unbounded } from "@next/font/google";
import Providers from "../providers";

const roboto = Roboto({ variable: "--font-roboto", weight: ["100", "300", "400", "500", "700", "900"], display: "swap" });
const unbounded = Unbounded({ variable: "--font-unbounded", display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.variable} ${unbounded.variable}`}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </div>
  );
}
