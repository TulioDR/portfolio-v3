import ProjectModel, { LayoutModel } from "@/models/ProjectModel";

import ProjectCardTitle from "./ProjectCardTitle";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardContainer from "./ProjectCardContainer";

type Props = {
   currentLayout: LayoutModel;
   project: ProjectModel;
   onClick: () => void;
   isReversed: boolean;
};

export default function ProjectCard({
   currentLayout,
   project,
   isReversed,
   onClick,
}: Props) {
   const { link, title, img, isFinished } = project;

   const isList = currentLayout === "list";
   const isCascade = currentLayout === "cascade";
   return (
      <div className={`flex gap-5 ${isReversed ? "flex-row-reverse" : ""}`}>
         <div className="flex-1">
            <ProjectCardContainer id={link} onClick={onClick}>
               <ProjectCardImage src={img} alt={title} />
               {!isCascade && (
                  <ProjectCardTitle isFinished={isFinished}>
                     {title}
                  </ProjectCardTitle>
               )}
            </ProjectCardContainer>
         </div>
         {isCascade && (
            <div className="h-full flex-1 flex items-center justify-center">
               <div className="text-5xl text-center text-white font-semibold">
                  <div>{title}</div>
                  {!isFinished && <div>(Coming Soon)</div>}
               </div>
            </div>
         )}
      </div>
   );
}
