"use client";

import { useScroll } from "framer-motion";
import AboutCardDesktop from "./desktop/AboutCardDesktop";
import { useRef } from "react";

import AboutDescription from "./AboutDescription";

export default function AboutSection() {
   const aboutRef1 = useRef(null);
   const aboutRef2 = useRef(null);
   const { scrollYProgress: scroll1 } = useScroll({
      target: aboutRef1,
      offset: ["start end", "end end"],
   });
   const { scrollYProgress: scroll2 } = useScroll({
      target: aboutRef2,
      offset: ["start end", "end end"],
   });

   return (
      <div>
         <div
            id="about "
            className="overflow-hidden h-screen w-full sticky top-0 bg-gradient-to-br from-zinc-900 to-zinc-700 backdrop-blur-2xl"
         >
            <AboutCardDesktop scroll={scroll1} />
            <AboutDescription scroll={scroll2} />
         </div>
         <div ref={aboutRef1} className="h-screen" />
         <div ref={aboutRef2} className="h-screen" />
      </div>
   );
}
