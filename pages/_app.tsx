import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

// components
import Navbar from "@/components/modules/Navbar/Navbar";

const plus = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={plus.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
