import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events App",
  description: "Zuri Events App",
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
