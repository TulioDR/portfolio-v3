import RevealToRight from "@/animations/RevealToRight";
import useLanguageContext from "@/context/LanguageContext";
import ProjectModel, { ProjectTranslations } from "@/models/ProjectModel";
import React, { useEffect, useState } from "react";
import BackgroundGradient from "./BackgroundGradient";
import MainButton from "./MainButton";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";

import Title from "./Title";
import Underline from "./Underline";

type Props = {
   project: ProjectModel;
};

export default function Header({ project }: Props) {
   const goToWebsite = () => {
      console.log("go to website");
   };

   const { isEnglish } = useLanguageContext();
   const { english, spanish } = project.translations;

   const [currentLan, setCurrentLan] = useState<ProjectTranslations>(english);
   useEffect(() => {
      if (isEnglish) setCurrentLan(english);
      else setCurrentLan(spanish);
   }, [isEnglish, english, spanish]);

   return (
      <>
         <div className="h-screen w-full relative overflow-hidden text-white">
            <ProjectImage src={project.img} alt={project.title} background />
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
