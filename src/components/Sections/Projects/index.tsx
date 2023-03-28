import MainContainer from "@/components/MainContainer";
import useNavbarContext from "@/context/NavbarContext";

import { useScroll, useSpring } from "framer-motion";
import { useRouter } from "next/router";

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

   const router = useRouter();
   const handleClick = () => {
      router.push("/projects", undefined, { scroll: false });
   };

   return (
      <div className="">
         <div
            ref={projectsRef}
            className="sticky top-0 h-screen w-full bg-gradient-to-bl from-[#1D1D1C] to-[#232322]"
         >
            <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
               <ProjectSlider
                  scrollYProgressVelocity={scrollYProgressVelocity}
               />
               <div className="absolute top-0 left-0 w-full h-full">
                  <MainContainer>
                     <div className="flex items-center justify-between h-full">
                        <ProjectsTitle
                           scrollYProgressVelocity={scrollYProgressVelocity}
                        />
                        <ViewProjectsButton
                           onClick={handleClick}
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
