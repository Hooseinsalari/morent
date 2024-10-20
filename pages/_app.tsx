import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

// styles
import "@/styles/globals.css";
import "react-widgets/styles.css";
import "yet-another-react-lightbox/styles.css";

// components
import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";

// context
import UserContextProvider from "@/context/UserContextProvider";
import ShowFilterContextProvider from "@/context/ShowFilterContextProvider";
import RentalCartContextProvider from "@/context/RentalCartContextProvider";

// toast
import { Toaster } from "react-hot-toast";

// react aria
import { I18nProvider } from "react-aria-components";
import { useEffect, useState } from "react";

const plus = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const [prompt, setPrompet] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handlerBeforeInstallPrompt = (event: any) => {
      event.preventDefault();

      if (!window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true);
        console.log("================= not insatlled =====================");
        alert("================= not insatlled =====================");
      }
    };

    window.addEventListener("beforeinstallprompt", handlerBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handlerBeforeInstallPrompt
      );
    };
  }, []);

  useEffect(() => {
    console.log("========= prompt ========", prompt);
  }, [prompt]);

  return (
    <RentalCartContextProvider>
      <UserContextProvider>
        <ShowFilterContextProvider>
          <I18nProvider locale="en-US">
            <div className={plus.className}>
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </div>
            <Toaster
              toastOptions={{
                style: {
                  fontWeight: "600",
                },
              }}
            />
          </I18nProvider>
        </ShowFilterContextProvider>
      </UserContextProvider>
    </RentalCartContextProvider>
  );
}
