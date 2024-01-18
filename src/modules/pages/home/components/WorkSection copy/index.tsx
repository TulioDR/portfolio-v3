"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";

import ProjectSlider from "./ProjectSlider";
import ProjectsTitle from "./ProjectsTitle";
import { useRef, useState } from "react";
import OpenWorkButton from "./OpenWorkButton";

export default function WorkSection() {
   const [started, setStarted] = useState<boolean>(false);

   const projectsSliderRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: projectsSliderRef,
      offset: ["start end", "end end"],
   });

   useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (latest > 0) {
         if (started) return;
         setStarted(true);
         console.log("start animation");
      }
      if (latest === 0) {
         setStarted(false);
         console.log("stop animation");
      }
   });

   return (
      <div
         ref={projectsSliderRef}
         className="w-full h-screen bg-gray-400"
      ></div>
   );
}
