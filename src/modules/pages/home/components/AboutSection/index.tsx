"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

import AboutDescription from "./AboutDescription";
import TransformBackground from "./desktop/TransformBackground";
import AboutMeButton from "./desktop/AboutMeButton";

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
   const { scrollYProgress } = useScroll({
      target: progressRef,
      offset: ["start start", "end end"],
   });

   return (
      <div ref={progressRef} className="relative">
         <div
            id="about "
            className="h-screen w-full sticky top-0 bg-gradient-to-br from-zinc-800 to-zinc-600"
         >
            <div className="relative w-full h-full">
               <AboutDescription scroll={scroll2} />
               <TransformBackground
                  scrollTitle={scroll1}
                  scroll={scroll2}
                  lastScroll={scrollYProgress}
               />
            </div>
         </div>
         <div
            ref={aboutRef}
            className="sticky top-0 w-full h-screen py-20 px-35 z-50 pointer-events-none"
         >
            <AboutMeButton scroll={scroll2} />
         </div>
         <div ref={aboutRef2} className="h-screen" />
         <div className="h-screen" />
      </div>
   );
}
