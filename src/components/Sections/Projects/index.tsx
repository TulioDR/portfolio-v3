import MainContainer from "@/components/MainContainer";
import useNavbarContext from "@/context/NavbarContext";

import { useScroll, useSpring, useAnimationControls } from "framer-motion";
import { useState } from "react";

import ProjectSlider from "./ProjectSlider";
import ProjectsTitle from "./ProjectsTitle";
import ViewProjectsButton from "./ViewProjectsButton";

export default function ProjectsSection() {
   const { projectsRef, projectsSliderRef } = useNavbarContext();

   const { scrollYProgress } = useScroll({
      target: projectsSliderRef,
      offset: ["start end", "end end"],
   });

   const scrollYProgressVelocity = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
   });

   const [showScreen, setShowScreen] = useState<boolean>(false);
   const controls = useAnimationControls();

   const handleClick = () => {
      projectsSliderRef.current!.scrollIntoView({ behavior: "smooth" });
      setShowScreen(!showScreen);
      controls.start({ scale: 1.5, transition: { duration: 1, delay: 0.4 } });
   };

   return (
      <div className="">
         <div
            ref={projectsRef}
            className="sticky top-0 h-screen w-full bg-gradient-to-bl from-[#1D1D1C] to-[#232322]"
         >
            <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
               <ProjectSlider
                  controls={controls}
                  showScreen={showScreen}
                  scrollYProgressVelocity={scrollYProgressVelocity}
               />
               <div className="absolute top-0 left-0 w-full h-full">
                  <MainContainer>
                     <div className="flex items-center justify-between h-full">
                        <ProjectsTitle
                           showScreen={showScreen}
                           scrollYProgressVelocity={scrollYProgressVelocity}
                        />
                        <ViewProjectsButton
                           onClick={handleClick}
                           showScreen={showScreen}
                           scrollYProgressVelocity={scrollYProgressVelocity}
                        />
                     </div>
                  </MainContainer>
               </div>
            </div>
         </div>
         <div
            id="projects"
            ref={projectsSliderRef}
            className="h-screen bg-green-500 w-full"
         ></div>
      </div>
   );
}
