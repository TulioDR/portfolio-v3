"use client";

import { useScroll } from "framer-motion";
import AboutCardDesktop from "./desktop/AboutCardDesktop";
import { useRef } from "react";

import AboutDescription from "./AboutDescription";
import WorkSection from "../WorkSection";

export default function AboutSection() {
   const aboutRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: aboutRef,
      offset: ["start end", "end end"],
   });

   return (
      <div ref={aboutRef} className="h-[800vh]">
         <div
            id="about "
            className="overflow-hidden h-screen w-full sticky top-0 bg-gradient-to-br from-zinc-900 to-zinc-700 backdrop-blur-2xl"
         >
            <AboutDescription />
            <AboutCardDesktop scroll={scrollYProgress} />
            <WorkSection scroll={scrollYProgress} />
         </div>
      </div>
   );
}
