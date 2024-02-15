import React, { useRef } from "react";
import MainButton from "../MainButton";
import ProjectsBackground from "./ProjectsBackground";
import { useScroll } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

type Props = {};

export default function WorkSection({}: Props) {
   const progressRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: progressRef,
      offset: ["start start", "end end"],
   });

   return (
      <div ref={progressRef}>
         <div
            id="work"
            className="h-screen sticky top-0 w-full overflow-hidden "
         >
            <ProjectsBackground />
            <div className="absolute top-0 left-0 flex justify-end w-full h-full py-20 px-35">
               <div className="h-full w-1/2 grid place-content-center z-50">
                  <MainButton>View work</MainButton>
               </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full pb-5 px-40 flex justify-center">
               <div className="w-1/2">
                  <ScrollIndicator scroll={scrollYProgress} />
               </div>
            </div>
         </div>
         <div className="h-screen" />
         <div className="h-screen" />
      </div>
   );
}
