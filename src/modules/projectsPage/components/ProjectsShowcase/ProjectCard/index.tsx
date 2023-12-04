import ProjectModel, { LayoutModel } from "@/models/ProjectModel";

import ProjectCardImage from "./ProjectCardImage";
import ProjectCardContainer from "./ProjectCardContainer";
import { MotionValue } from "framer-motion";

type Props = {
   currentLayout: LayoutModel;
   project: ProjectModel;
   onClick: () => void;
   springMotionX: MotionValue<any>;
   springMotionY: MotionValue<any>;
};

export default function ProjectCard({
   currentLayout,
   project,
   onClick,
   springMotionX,
   springMotionY,
}: Props) {
   const { link, title, img, isFinished } = project;

   return (
      <ProjectCardContainer
         id={link}
         onClick={onClick}
         currentLayout={currentLayout}
      >
         <ProjectCardImage
            src={img}
            alt={title}
            currentLayout={currentLayout}
            springMotionX={springMotionX}
            springMotionY={springMotionY}
         />
         {/* {!isList && (
            <ProjectCardTitle isFinished={isFinished}>{title}</ProjectCardTitle>
         )} */}
      </ProjectCardContainer>
   );
}
