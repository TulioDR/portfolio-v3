import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <>
         <Navbar />
         <AnimatePresence mode="wait">
            <motion.div key={router.route}>
               <Component {...pageProps} />
            </motion.div>
         </AnimatePresence>
      </>
   );
}
