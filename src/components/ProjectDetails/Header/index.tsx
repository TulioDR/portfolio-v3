import RevealToRight from "@/animations/RevealToRight";
import ProjectModel, { ProjectTranslations } from "@/models/ProjectModel";
import BackgroundGradient from "./BackgroundGradient";
import HeaderButton from "./HeaderButton";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";

import Title from "./Title";
import Underline from "./Underline";

type Props = {
   project: ProjectModel;
   currentLan: ProjectTranslations;
};

export default function Header({ project, currentLan }: Props) {
   return (
      <>
         <div className="h-screen w-full relative overflow-hidden text-white">
            <ProjectImage src={project.img} alt={project.title} />
            <BackgroundGradient>
               <RevealToRight>
                  <Title>{project.title}</Title>
               </RevealToRight>
               <RevealToRight>
                  <Underline />
               </RevealToRight>
               <RevealToRight>
                  <ProjectDescription>
                     {currentLan.description}
                  </ProjectDescription>
               </RevealToRight>
               <div className="flex space-x-5">
                  <HeaderButton href={project.website}>Visit Site</HeaderButton>
                  <HeaderButton href={project.repository} alternative>
                     View Code
                  </HeaderButton>
               </div>
            </BackgroundGradient>
         </div>
      </>
   );
}
