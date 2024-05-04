import { useScroll } from "framer-motion";
import { useRef } from "react";

import AboutDescription from "./AboutDescription";

import TransformBackground from "./desktop/TransformBackground";

export default function AboutSection() {
   const aboutRef = useRef(null);
   const { scrollYProgress: scroll1 } = useScroll({
      target: aboutRef,
      offset: ["start end", "start start"],
   });

   const backgroundRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: backgroundRef,
      offset: ["start end", "end end"],
   });

   return (
      <div className="relative bg-gray-400 py-20">
         <div className="w-full relative">
            <div className="w-full sticky top-0 h-screen">
               <TransformBackground
                  firstScrollView={scroll1}
                  scroll={scrollYProgress}
               />
            </div>
            <div ref={backgroundRef} className="h-screen"></div>
            <div className="h-40"></div>
         </div>
         <AboutDescription />
      </div>
   );
}
