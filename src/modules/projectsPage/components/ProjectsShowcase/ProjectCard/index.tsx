import ProjectModel, { LayoutModel } from "@/models/ProjectModel";

import ProjectCardTitle from "./ProjectCardTitle";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardContainer from "./ProjectCardContainer";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

type Props = {
   currentLayout: LayoutModel;
   project: ProjectModel;
   filteredProjects: ProjectModel[];
   onClick: () => void;
   isProjectExpanded: boolean;
   isReversed: boolean;
};

export default function ProjectCard({
   currentLayout,
   project,
   filteredProjects,
   isProjectExpanded,
   isReversed,
   onClick,
}: Props) {
   const { link, title, img, isFinished } = project;
   console.log(isFinished);

   return (
      <div className={`flex gap-5 ${isReversed ? "flex-row-reverse" : ""}`}>
         <div className="flex-1">
            <ProjectCardContainer id={link} onClick={onClick}>
               <ProjectCardImage src={img} alt={title} />
               {isProjectExpanded && (
                  <ProjectCardTitle isFinished={isFinished}>
                     {title}
                  </ProjectCardTitle>
               )}
            </ProjectCardContainer>
         </div>
         {!isProjectExpanded && (
            <div className="h-full flex-1 flex items-center justify-center">
               <div className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center text-black">
                  <div>{title}</div>
                  {!isFinished && <div>(Coming Soon)</div>}
               </div>
            </div>
         )}
      </div>
   );
}
