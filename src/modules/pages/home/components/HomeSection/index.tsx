"use client";

import {
   useScroll,
   useTransform,
   motion,
   useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export default function HomeSection() {
   const homeRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: homeRef,
      offset: ["start end", "end start"],
   });

   // useMotionValueEvent(scrollYProgress, "change", (current) => {
   //    console.log(current.toFixed(2));
   // });

   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

   return (
      <div className="bg-primary">
         <div>
            <motion.div
               style={{ opacity }}
               className="h-screen sticky top-0 w-full overflow-hidden bg-gradient-to-b from-[#141B25] via-[#141B25] to-primary"
            >
               <div className="h-full w-full relative text-white flex flex-col items-center justify-center">
                  <div className="flex items-center">
                     <div className="text-[10vw] uppercase">Tulio Ruzo</div>
                  </div>
                  <div className="text-[1.5vw] uppercase tracking-widest">
                     SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.
                  </div>
               </div>
            </motion.div>
            <div ref={homeRef} className="h-screen"></div>
         </div>
         <div className="h-screen"></div>
      </div>
   );
}
