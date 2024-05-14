// import { useScroll } from "framer-motion";
// import { useRef } from "react";

// import AboutHeader from "./AboutHeader";
import AboutCards from "./AboutCards";
import MainTitle from "../MainTitle";

export default function AboutSection() {
   // const backgroundRef = useRef(null);
   // const { scrollYProgress } = useScroll({
   //    target: backgroundRef,
   //    offset: ["start end", "end end"],
   // });

   // const containerRef = useRef<HTMLDivElement>(null);

   return (
      <div className="relative bg-about py-20">
         {/* <div>
            <AboutHeader scroll={scrollYProgress} containerRef={containerRef} />
            <div ref={backgroundRef} className="h-screen" />
            <div className="h-40" />
         </div> */}
         <MainTitle>About me</MainTitle>
         <AboutCards />
      </div>
   );
}
