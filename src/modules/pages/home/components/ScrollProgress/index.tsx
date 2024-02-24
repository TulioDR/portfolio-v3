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
      <div className="fixed z-50 top-0 right-0 h-screen flex flex-col justify-center">
         <div className="h-1/3 relative">
            <motion.div
               style={{ top, y }}
               className="absolute right-0 text-white pr-2 rounded-full text-sm"
            >
               {currentPosition}
            </motion.div>
         </div>
      </div>
   );
}
