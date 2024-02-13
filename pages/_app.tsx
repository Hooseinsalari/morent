import "@/styles/globals.css";
import type { AppProps } from "next/app";

// components
import Navbar from "@/components/modules/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
