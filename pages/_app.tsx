import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

// styles
import "@/styles/globals.css";
import "react-widgets/styles.css";

// components
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";

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
      <Footer />
    </div>
  );
}
