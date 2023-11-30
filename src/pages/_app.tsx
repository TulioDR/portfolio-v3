import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import TranslateButton from "@/components/TranslateButton";
import InitialLoadingAnimation from "@/components/InitialLoadingAnimation";
import { BackFromContextProvider } from "@/context/BackFromProjectsContext";
import { LanguageContextProvider } from "@/context/LanguageContext";
import { InitialLoadingContextProvider } from "@/context/InitialLoadingContext";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <InitialLoadingContextProvider>
         <InitialLoadingAnimation />
         <LanguageContextProvider>
            <BackFromContextProvider>
               <AnimatePresence mode="wait">
                  <motion.div key={router.route}>
                     <Component {...pageProps} />
                  </motion.div>
               </AnimatePresence>
               <TranslateButton />
            </BackFromContextProvider>
         </LanguageContextProvider>
      </InitialLoadingContextProvider>
   );
}
