"use client";

import {
   useScroll,
   useTransform,
   motion,
   useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";
import HomeText from "./HomeText";
import ProjectsBackground from "../WorkSection/ProjectsBackground";

export default function HomeSection() {
   const homeRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: homeRef,
      offset: ["start end", "end start"],
   });

   const x = useTransform(scrollYProgress, [0, 1], ["20%", "80%"]);
   const clipPath = useMotionTemplate`circle(${x} at 50% 50%)`;

   return (
      <div className="bg-primary">
         <div className="z-20 ">
            <div className="h-screen sticky top-0 w-full overflow-hidden bg-primary">
               <HomeText scroll={scrollYProgress} />
               <motion.div style={{ clipPath }} className="w-full h-full">
                  <ProjectsBackground />
               </motion.div>
            </div>
            <div ref={homeRef} className="h-screen" />
            <div className="h-screen" />
         </div>
      </div>
   );
}
