import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import TranslateButton from "@/components/TranslateButton";
import InitialLoadingAnimation from "@/components/InitialLoadingAnimation";
import { NavbarContextProvider } from "@/context/NavbarContext";
import { BackFromContextProvider } from "@/context/BackFromProjectsContext";
import { LanguageContextProvider } from "@/context/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <>
         {/* <InitialLoadingAnimation /> */}
         <LanguageContextProvider>
            <NavbarContextProvider>
               <BackFromContextProvider>
                  <Navbar />
                  <AnimatePresence mode="wait">
                     <motion.div key={router.route}>
                        <Component {...pageProps} />
                     </motion.div>
                  </AnimatePresence>
                  <TranslateButton />
               </BackFromContextProvider>
            </NavbarContextProvider>
         </LanguageContextProvider>
      </>
   );
}
