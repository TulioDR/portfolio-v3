import ProjectModel, { LayoutModel } from "@/models/ProjectModel";

import ProjectCardTitle from "./ProjectCardTitle";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardContainer from "./ProjectCardContainer";

type Props = {
   small: boolean;
   currentLayout: LayoutModel;
   project: ProjectModel;
   filteredProjects: ProjectModel[];
   onClick: () => void;
};

export default function ProjectCard({
   small,
   currentLayout,
   project,
   filteredProjects,
   onClick,
}: Props) {
   const { link, title, img, isFinished } = project;
   return (
      <ProjectCardContainer
         id={link}
         onClick={onClick}
         currentLayout={currentLayout}
         small={small}
         // Only for bug fixing when there is one project displayed
         isOneProject={filteredProjects.length === 1}
      >
         <ProjectCardImage
            src={img}
            alt={title}
            currentLayout={currentLayout}
            small={small}
         />
         {/* <ProjectCardTitle isFinished={isFinished}>{title}</ProjectCardTitle> */}
      </ProjectCardContainer>
   );
}
