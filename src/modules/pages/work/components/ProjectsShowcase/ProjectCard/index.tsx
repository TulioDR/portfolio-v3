import ProjectModel, { LayoutModel } from "@/models/ProjectModel";

import ProjectCardImage from "./ProjectCardImage";
import ProjectCardContainer from "./ProjectCardContainer";
import { useRef } from "react";
import { useScroll } from "framer-motion";

type Props = {
   currentLayout: LayoutModel;
   project: ProjectModel;
   onClick: () => void;
};

export default function ProjectCard({
   currentLayout,
   project,
   onClick,
}: Props) {
   const { link, title, img } = project;
   const ref = useRef(null);

   const { scrollXProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
      axis: "x",
   });
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
      axis: "y",
   });

   return (
      <ProjectCardContainer
         id={link}
         onClick={onClick}
         currentLayout={currentLayout}
         newRef={ref}
      >
         <ProjectCardImage
            src={img}
            alt={title}
            currentLayout={currentLayout}
            scrollXProgress={scrollXProgress}
            scrollYProgress={scrollYProgress}
         />
      </ProjectCardContainer>
   );
}
