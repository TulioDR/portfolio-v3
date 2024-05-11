import { useScroll } from "framer-motion";
import { useRef } from "react";

import AboutDescription from "./AboutDescription";
import AboutHeader from "./AboutHeader";

export default function AboutSection() {
   const backgroundRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: backgroundRef,
      offset: ["start end", "end end"],
   });

   const containerRef = useRef<HTMLDivElement>(null);

   return (
      <div className="relative bg-gray-400 pb-20">
         <div>
            <AboutHeader scroll={scrollYProgress} containerRef={containerRef} />
            <div ref={backgroundRef} className="h-screen"></div>
            <div className="h-40"></div>
         </div>
         <AboutDescription containerRef={containerRef} />
      </div>
   );
}
