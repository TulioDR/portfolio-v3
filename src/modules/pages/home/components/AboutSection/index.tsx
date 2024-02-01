"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

import AboutDescription from "./AboutDescription";
import TransformBackground from "./desktop/TransformBackground";
import AboutMeButton from "./desktop/AboutMeButton";

export default function AboutSection() {
   const aboutRef1 = useRef(null);
   const { scrollYProgress: scroll1 } = useScroll({
      target: aboutRef1,
      offset: ["start end", "end end"],
   });

   return (
      <div className="relative">
         <div
            id="about "
            className="overflow-hidden h-screen w-full sticky top-0 bg-gradient-to-br from-zinc-800 to-zinc-600"
         >
            <AboutDescription />
            <TransformBackground scroll={scroll1} />
         </div>
         <div
            ref={aboutRef1}
            className="h-screen w-full z-50 sticky top-0 pointer-events-none"
         >
            <AboutMeButton scroll={scroll1} />
         </div>
         <div className="h-screen" />
      </div>
   );
}
