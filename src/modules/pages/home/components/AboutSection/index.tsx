"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import AboutDescription from "./AboutDescription";
import TransformBackground from "./desktop/TransformBackground";

export default function AboutSection() {
   const aboutRef = useRef(null);
   const aboutRef2 = useRef(null);
   const progressRef = useRef(null);

   const { scrollYProgress: scroll1 } = useScroll({
      target: aboutRef,
      offset: ["start end", "start start"],
   });
   const { scrollYProgress: scroll2 } = useScroll({
      target: aboutRef2,
      offset: ["start end", "start start"],
   });
   const { scrollYProgress: scrollIndicator } = useScroll({
      target: progressRef,
      offset: ["start end", "end end"],
   });

   return (
      <div className="relative">
         <motion.div
            id="about "
            className="h-screen w-full sticky top-0 bg-zinc-800"
         >
            <div className="relative w-full h-full">
               <AboutDescription scroll={scroll2} />
               <TransformBackground
                  scrollTitle={scroll1}
                  scroll={scroll2}
                  lastScroll={scrollIndicator}
               />
            </div>
         </motion.div>
         <div ref={progressRef}>
            <div ref={aboutRef} className="h-screen" />
            <div ref={aboutRef2} className="h-screen" />
            <div className="h-screen" />
         </div>
      </div>
   );
}
