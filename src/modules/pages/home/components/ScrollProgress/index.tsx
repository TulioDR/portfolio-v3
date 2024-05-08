import {
   useMotionValueEvent,
   useScroll,
   motion,
   useTransform,
} from "framer-motion";
import React, { useState } from "react";

type Props = {};

export default function ScrollProgress({}: Props) {
   const { scrollYProgress } = useScroll();

   const [currentPosition, setCurrentPosition] = useState<string>("000%");

   useMotionValueEvent(scrollYProgress, "change", (current) => {
      const percentage = current * 100;
      const number = percentage.toFixed(0).toString().padStart(3, "0");
      setCurrentPosition(`${number}%`);
   });

   const top = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

   return (
      <div className="fixed z-50 top-0 pointer-events-none right-0 h-screen w-20 flex flex-col items-center justify-center">
         <div className="h-1/3 w-full relative">
            <motion.div
               style={{ top, y }}
               className="absolute right-0 text-white text-sm w-full text-end"
            >
               <span className="bg-white text-black pl-2 pr-1 py-1 rounded-l-full">
                  {currentPosition}
               </span>
            </motion.div>
         </div>
      </div>
   );
}
