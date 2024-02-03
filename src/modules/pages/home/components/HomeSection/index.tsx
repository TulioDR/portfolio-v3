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

   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

   return (
      <div className="bg-primary">
         <motion.div
            style={{ opacity }}
            className="h-screen sticky top-0 px-40 w-full overflow-hidden bg-gradient-to-b from-[#141B25] via-[#141B25] to-primary"
         >
            <div className="h-full w-full flex relative">
               <HomeText />
               <div className="w-1/2 h-full cursor-grab active:cursor-grabbing">
                  <HomeLogo />
               </div>
            </div>
         </motion.div>
         <div ref={homeRef} className="h-screen" />
         <div className="h-screen" />
      </div>
   );
}
