import React from "react";
import WorkTitle from "./WorkTitle";
import projects from "@/assets/projects";
import ProjectModel from "@/models/ProjectModel";
import { motion } from "framer-motion";
import WorkSelectorTitle from "./WorkSelectorTitle";

type Props = {
   currentWork: ProjectModel;
   setCurrentWork: React.Dispatch<React.SetStateAction<ProjectModel>>;
};

export default function WorkSelector({ currentWork, setCurrentWork }: Props) {
   const container = {
      initial: {},
      animate: { transition: { staggerChildren: 0.2 } },
   };

   return (
      <>
         <WorkSelectorTitle />
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="gap-2 overflow-hidden"
         >
            <WorkTitle
               selected={currentWork.title === projects[1].title}
               onHoverStart={() => setCurrentWork(projects[1])}
               work={projects[1]}
            />
            <WorkTitle
               selected={currentWork.title === projects[2].title}
               onHoverStart={() => setCurrentWork(projects[2])}
               work={projects[2]}
            />
            <WorkTitle
               selected={currentWork.title === projects[3].title}
               onHoverStart={() => setCurrentWork(projects[3])}
               work={projects[3]}
            />
         </motion.div>
      </>
   );
}
