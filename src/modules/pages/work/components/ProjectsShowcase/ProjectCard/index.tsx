import ProjectModel from "@/models/ProjectModel";

import ProjectCardImage from "./ProjectCardImage";
import ProjectCardContainer from "./ProjectCardContainer";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import useImageAnimation from "../../../hooks/useImageAnimation";

type Props = {
   project: ProjectModel;
   i: number;
   isProjectOpen: boolean;
   isSelected: boolean;
   setShowBackground: React.Dispatch<React.SetStateAction<boolean>>;
   onClick: () => void;
   setSelectedWork: React.Dispatch<React.SetStateAction<ProjectModel | null>>;
};

export default function ProjectCard({
   project,
   i,
   isProjectOpen,
   isSelected,
   setShowBackground,
   onClick,
   setSelectedWork,
}: Props) {
   const { link, img } = project;
   const cardRef = useRef<HTMLDivElement>(null);

   const { scrollXProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"],
      axis: "x",
   });

   const { containerControls, imageControls } = useImageAnimation(
      isProjectOpen,
      isSelected,
      setShowBackground,
      setSelectedWork,
      i
   );

   return (
      <ProjectCardContainer id={link} onClick={onClick} cardRef={cardRef}>
         <ProjectCardImage
            src={img.src}
            alt={link}
            containerControls={containerControls}
            imageControls={imageControls}
            scrollXProgress={scrollXProgress}
            isSelected={isSelected}
         />
      </ProjectCardContainer>
   );
}
