import RevealToRight from "@/animations/RevealToRight";
import useInitialLoadingContext from "@/context/InitialLoadingContext";
import useLanguageContext from "@/context/LanguageContext";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function HomeTitle() {
   const { currentLanguage } = useLanguageContext();
   const { developer } = currentLanguage.home;

   const { isFullyLoaded } = useInitialLoadingContext();

   const container = {
      initial: {},
      animate: {
         transition: {
            staggerChildren: 0.2,
            delayChildren: 0.8,
         },
      },
   };

   const showName = useAnimationControls();
   useEffect(() => {
      if (!isFullyLoaded) return;
      showName.start("animate");
   }, [isFullyLoaded]);
   return (
      <motion.h1
         variants={container}
         initial="initial"
         animate={showName}
         className="absolute bottom-0 left-0 w-full pb-7 text-white overflow-hidden"
      >
         <RevealToRight>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
               {developer}
            </div>
         </RevealToRight>
         <RevealToRight>
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] w-min">
               Tulio
            </div>
         </RevealToRight>
         <RevealToRight>
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] w-min">
               Ruzo
            </div>
         </RevealToRight>
      </motion.h1>
   );
}
