"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import HomeLogo from "./HomeLogo";
import HomeText from "./HomeText";

export default function HomeSection() {
   const homeRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: homeRef,
      offset: ["start end", "end start"],
   });

   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

   return (
      <div className="bg-primary">
         <div>
            <motion.div
               style={{ opacity }}
               className="h-screen sticky top-0 px-35 py-20 w-full overflow-hidden bg-gradient-to-b from-secondary via-secondary to-primary"
            >
               <div className="h-full w-full flex relative">
                  <div className="w-1/2 h-full">
                     <HomeText />
                  </div>
                  <div className="w-1/2 h-full bg-gradient-to-r from-gray-200 to-gray-800 rounded-3xl shadow-lg">
                     <HomeLogo />
                  </div>
               </div>
            </motion.div>
            <div ref={homeRef} className="h-screen" />
            <div className="h-screen" />
         </div>
      </div>
   );
}
