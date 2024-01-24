import useLanguageContext from "@/context/LanguageContext";
import { motion, useAnimationControls } from "framer-motion";

export default function HomeTitle() {
   const { currentLanguage } = useLanguageContext();
   const { developer } = currentLanguage.home;

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
   return (
      <motion.h1
         variants={container}
         initial="initial"
         animate={showName}
         className="absolute bottom-0 left-0 w-full pb-7 text-white overflow-hidden"
      >
         <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            {developer}
         </div>

         <motion.span
            layoutId="nav-title"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem]"
         >
            Tulio Ruzo
         </motion.span>
      </motion.h1>
   );
}
