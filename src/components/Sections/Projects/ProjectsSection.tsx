import MainContainer from "@/components/MainContainer";
import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import { useScroll, useSpring, useAnimationControls } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import ProjectSlider from "./ProjectSlider";
import ProjectsTitle from "./ProjectsTitle";
import ViewProjectsButton from "./ViewProjectsButton";

export default function ProjectsSection() {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });

   const scrollYProgressVelocity = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
   });

   const [showScreen, setShowScreen] = useState<boolean>(false);
   const controls = useAnimationControls();

   const handleClick = () => {
      ref.current!.scrollIntoView({ behavior: "smooth" });
      setShowScreen(!showScreen);
      controls.start({ scale: 1.5, transition: { duration: 1, delay: 0.4 } });
   };

   const { asPath } = useRouter();
   const { isBackFromProjects } = useBackFromProjectsContext();

   useEffect(() => {
      console.log(asPath);
      if (isBackFromProjects) {
         ref.current!.scrollIntoView();
      }
      // if (asPath === "/#projects") {
      //    console.log("projects!");
      // } else {
      //    console.log("no projects");
      // }
   }, [asPath, isBackFromProjects]);

   return (
      <div>
         <div className="h-screen bg-gradient-to-bl from-[#1D1D1C] to-[#232322] w-full sticky top-0">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
               <ProjectSlider
                  controls={controls}
                  showScreen={showScreen}
                  scrollYProgressVelocity={scrollYProgressVelocity}
               />
               <div className="absolute top-0 left-0 w-full h-full">
                  {/* How to make background transparent but bot button */}
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
            ref={ref}
            className="h-screen bg-green-500 w-full"
         ></div>
      </div>
   );
}
