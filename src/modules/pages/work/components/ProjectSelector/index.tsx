import React from "react";
import projects from "@/assets/projects";
import ProjectModel from "@/models/ProjectModel";
import SelectorProject from "./SelectorProject";
import SelectorContainer from "./SelectorContainer";
import GradientBackground from "./GradientBackground";
import FrontImage from "./FrontImage";
import BackImage from "./BackImage";

type Props = {
   selectedWork: ProjectModel | null;
   setSelectedWork: React.Dispatch<React.SetStateAction<ProjectModel | null>>;
   showBackground: boolean;
};

export default function ProjectSelector({
   selectedWork,
   setSelectedWork,
   showBackground,
}: Props) {
   const handleHover = (project: ProjectModel) => setSelectedWork(project);

   const isOpen = showBackground && selectedWork ? true : false;
   const EXIT_DURATION = 1;

   return (
      <div className="fixed top-0 left-0 w-screen h-screen z-30 pointer-events-none">
         <div
            className={`relative w-full h-full ${
               showBackground ? "bg-primary" : "opacity-0 "
            }`}
         >
            {projects.map((project) => (
               <div
                  key={project.link}
                  className="absolute top-0 left-0 w-full h-full"
               >
                  <BackImage
                     project={project}
                     EXIT_DURATION={EXIT_DURATION}
                     isSelected={project.link === selectedWork?.link}
                  />
                  <FrontImage
                     project={project}
                     EXIT_DURATION={EXIT_DURATION}
                     isSelected={project.link === selectedWork?.link}
                  />
               </div>
            ))}
         </div>

         <div className="absolute bottom-0 left-0 w-full z-30">
            <GradientBackground isOpen={isOpen} />
            <SelectorContainer isOpen={isOpen} selectedWork={selectedWork}>
               {projects.map((project, i) => (
                  <SelectorProject
                     key={project.link}
                     project={project}
                     onMouseEnter={() => handleHover(project)}
                     isSelected={project.link === selectedWork?.link}
                     isOpen={isOpen}
                     index={i}
                  />
               ))}
            </SelectorContainer>
         </div>
      </div>
   );
}
