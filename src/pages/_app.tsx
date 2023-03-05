import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { BackFromContextProvider } from "@/context/BackFromProjectsContext";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect } from "react";

import Scrollbar from "smooth-scrollbar";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();

   useEffect(() => {
      console.log("scrollbar!");
      // Scrollbar.init(document.body, { damping: 0.1 });
   }, []);

   return (
      <>
         <Navbar />
         <BackFromContextProvider>
            <AnimatePresence mode="wait">
               <motion.div key={router.route}>
                  <Component {...pageProps} />
               </motion.div>
            </AnimatePresence>
         </BackFromContextProvider>
      </>
   );
}
