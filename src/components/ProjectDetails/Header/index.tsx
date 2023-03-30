import RevealToRight from "@/animations/RevealToRight";
import ProjectModel, { ProjectTranslations } from "@/models/ProjectModel";
import BackgroundGradient from "./BackgroundGradient";
import MainButton from "./MainButton";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";

import Title from "./Title";
import Underline from "./Underline";

type Props = {
   project: ProjectModel;
   currentLan: ProjectTranslations;
};

export default function Header({ project, currentLan }: Props) {
   const goToWebsite = () => {
      console.log("go to website");
   };
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
               <MainButton onClick={goToWebsite}>Visit Site</MainButton>
            </BackgroundGradient>
            {/* <ViewCodeBtn onClick={goToRepo} mobile>
                  {viewCode}
               </ViewCodeBtn>
               <ViewCodeBtn onClick={goToRepo}>{viewCode}</ViewCodeBtn> */}
         </div>
      </>
   );
}
