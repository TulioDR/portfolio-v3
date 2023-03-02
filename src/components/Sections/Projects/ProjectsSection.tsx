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
         <div className="h-screen bg-black w-full sticky top-0">
            <div className=" w-full h-full flex items-center justify-center overflow-hidden">
               <ProjectSlider
                  controls={controls}
                  showScreen={showScreen}
                  scrollYProgressVelocity={scrollYProgressVelocity}
               />
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
         </div>
         <div
            id="projects"
            ref={ref}
            className="h-screen bg-green-500 w-full"
         ></div>
      </div>
   );
}
