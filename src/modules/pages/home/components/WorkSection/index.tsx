import React, { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import projects from "@/assets/projects";
import ProjectModel from "@/models/ProjectModel";
import WorkSelector from "./WorkSelector";
import WorkFooter from "./WorkFooter";
import SelectedWork from "./SelectedWork";
type Props = {};

export default function WorkSection({}: Props) {
   const progressRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: progressRef,
      offset: ["start start", "end end"],
   });

   const [currentWork, setCurrentWork] = useState<ProjectModel>(projects[1]);

   return (
      <div ref={progressRef}>
         <div
            id="work"
            className="h-screen sticky top-0 w-full flex overflow-hidden bg-primary"
         >
            <div className="w-1/2 h-full flex flex-col justify-center gap-5 relative text-white pl-20 pt-20 pb-10 pr-10">
               <div>SELECTED WORK</div>
               <WorkSelector
                  currentWork={currentWork}
                  setCurrentWork={setCurrentWork}
               />
               <WorkFooter scroll={scrollYProgress} />
            </div>
            <div className="w-1/2 h-full pb-10 pt-20 pr-20">
               <SelectedWork currentWork={currentWork} />
            </div>
         </div>
         <div className="h-screen" />
         <div className="h-screen" />
      </div>
   );
}
