import React, { Dispatch, SetStateAction } from "react";
import ProjectsShowcaseContainer from "./ProjectsShowcaseContainer";

import ProjectModel, { LayoutModel } from "@/models/ProjectModel";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   currentLayout: LayoutModel;
   filteredProjects: ProjectModel[];
   setSelectedProject: Dispatch<SetStateAction<ProjectModel | null>>;
};

export default function ProjectsShowcase({
   currentLayout,
   filteredProjects,
   setSelectedProject,
}: Props) {
   return (
      <motion.div
         exit={{ height: 0 }}
         transition={{ duration: 1 }}
         className="overflow-hidden min-w-max"
      >
         <AnimatePresence mode="wait">
            <ProjectsShowcaseContainer
               key={currentLayout}
               currentLayout={currentLayout}
            >
               {filteredProjects.map((project) => (
                  <ProjectCard
                     key={project.link}
                     project={project}
                     currentLayout={currentLayout}
                     onClick={() => {}}
                  />
               ))}
            </ProjectsShowcaseContainer>
         </AnimatePresence>
      </motion.div>
   );
}
