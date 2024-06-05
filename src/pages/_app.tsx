import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

// import InitialLoadingAnimation from "@/components/InitialLoadingAnimation";

import { LanguageContextProvider } from "@/context/LanguageContext";
import { InitialLoadingContextProvider } from "@/context/InitialLoadingContext";
import Navbar from "@/modules/layout/Navbar";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();

   return (
      <InitialLoadingContextProvider>
         {/* <InitialLoadingAnimation /> */}
         <LanguageContextProvider>
            <Navbar />
            <AnimatePresence mode="wait">
               <Component key={router.route} {...pageProps} />
            </AnimatePresence>
         </LanguageContextProvider>
      </InitialLoadingContextProvider>
   );
}
