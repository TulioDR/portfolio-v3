import React, { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import projects from "@/assets/projects";
import ProjectModel from "@/models/ProjectModel";
import WorkSelector from "./WorkSelector";
import WorkFooter from "./WorkFooter";
import SelectedWork from "./SelectedWork";

import { motion } from "framer-motion";

type Props = {};

export default function WorkSection({}: Props) {
   const progressRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: progressRef,
      offset: ["start start", "end end"],
   });

   const [currentWork, setCurrentWork] = useState<ProjectModel>(projects[1]);

   return (
      <motion.div
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         ref={progressRef}
      >
         <div
            id="work"
            className="h-screen sticky top-0 w-full flex overflow-hidden bg-primary"
         >
            <div className="w-1/2 h-full flex flex-col justify-center relative text-white pl-20 pt-20 pb-10 pr-10">
               <WorkSelector
                  currentWork={currentWork}
                  setCurrentWork={setCurrentWork}
               />
               <WorkFooter scroll={scrollYProgress} />
            </div>
            <div className="w-1/2 h-full pb-10 pt-20 pr-20 flex justify-center">
               <SelectedWork currentWork={currentWork} />
            </div>
         </div>
         <div className="h-screen" />
         <div className="h-screen" />
      </motion.div>
   );
}
