import ProjectAnimationModel from "@/models/ProjectAnimationModel";
import ProjectModel, { LayoutModel } from "@/models/ProjectModel";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import ProjectCardTitle from "./ProjectCardTitle";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardContainer from "./ProjectCardContainer";

type Props = {
   small: boolean;
   currentLayout: LayoutModel;
   project: ProjectModel;
   setSelectedProject: React.Dispatch<
      React.SetStateAction<ProjectAnimationModel | null>
   >;
   filteredProjects: ProjectModel[];
};

export default function ProjectCard({
   small,
   currentLayout,
   project,
   setSelectedProject,
   filteredProjects,
}: Props) {
   const { link, title, img, isFinished } = project;

   const tiltElementRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
      VanillaTilt.init(tiltElementRef.current!, {
         reverse: true,
         glare: true,
         "max-glare": 0.3,
      });
   }, []);

   const elementRef = useRef<HTMLDivElement>(null);
   const handleClick = () => {
      if (project.isFinished) {
         const rect = elementRef.current!.getBoundingClientRect();
         const { top, left, height, width } = rect;
         setSelectedProject({ top, left, height, width, img, link });
      } else {
         console.log("This project is not done yet");
      }
   };

   return (
      <ProjectCardContainer
         elementRef={elementRef}
         onClick={handleClick}
         currentLayout={currentLayout}
         small={small}
         // Only for bug fixing when there is one project displayed
         isOneProject={filteredProjects.length === 1}
      >
         <ProjectCardImage
            tiltRef={tiltElementRef}
            src={img}
            alt={title}
            currentLayout={currentLayout}
            small={small}
         />
         <ProjectCardTitle isFinished={isFinished}>{title}</ProjectCardTitle>
      </ProjectCardContainer>
   );
}
