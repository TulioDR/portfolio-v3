import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { BackFromContextProvider } from "@/context/BackFromProjectsContext";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <BackFromContextProvider>
         <AnimatePresence mode="wait">
            <motion.div key={router.route}>
               <Component {...pageProps} />
            </motion.div>
         </AnimatePresence>
      </BackFromContextProvider>
   );
}
