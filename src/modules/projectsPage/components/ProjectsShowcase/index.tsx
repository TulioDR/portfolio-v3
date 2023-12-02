import React, { Dispatch, SetStateAction } from "react";
import ProjectsShowcaseContainer from "./ProjectsShowcaseContainer";
import { AnimatePresence } from "framer-motion";
import ProjectModel, { LayoutModel } from "@/models/ProjectModel";
import ProjectCard from "./ProjectCard";

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
      <ProjectsShowcaseContainer currentLayout={currentLayout}>
         <AnimatePresence>
            {filteredProjects.map((project, index) => (
               <ProjectCard
                  key={project.link}
                  project={project}
                  currentLayout={currentLayout}
                  onClick={() => setSelectedProject(project)}
                  isReversed={index % 2 !== 0}
               />
            ))}
         </AnimatePresence>
      </ProjectsShowcaseContainer>
   );
}
