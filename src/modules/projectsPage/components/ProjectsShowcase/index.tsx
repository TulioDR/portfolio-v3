import React, { Dispatch, SetStateAction } from "react";
import ProjectsShowcaseContainer from "./ProjectsShowcaseContainer";
import { AnimatePresence } from "framer-motion";
import ProjectModel, { LayoutModel } from "@/models/ProjectModel";
import ProjectCard from "./ProjectCard";

type Props = {
   currentLayout: LayoutModel;
   isProjectExpanded: boolean;
   filteredProjects: ProjectModel[];
   setSelectedProject: Dispatch<SetStateAction<ProjectModel | null>>;
};

export default function ProjectsShowcase({
   currentLayout,
   isProjectExpanded,
   filteredProjects,
   setSelectedProject,
}: Props) {
   return (
      <ProjectsShowcaseContainer
         currentLayout={currentLayout}
         isProjectExpanded={isProjectExpanded}
      >
         <AnimatePresence>
            {filteredProjects.map((project, index) => (
               <ProjectCard
                  key={project.link}
                  project={project}
                  currentLayout={currentLayout}
                  small={index === 1 || index === 6}
                  // Only for bug fixing when there is one project displayed
                  filteredProjects={filteredProjects}
                  onClick={() => setSelectedProject(project)}
               />
            ))}
         </AnimatePresence>
      </ProjectsShowcaseContainer>
   );
}
