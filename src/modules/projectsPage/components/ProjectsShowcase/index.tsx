import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ProjectsShowcaseContainer from "./ProjectsShowcaseContainer";
import {
   AnimatePresence,
   MotionValue,
   useMotionValue,
   useMotionValueEvent,
   useSpring,
} from "framer-motion";
import ProjectModel, { LayoutModel } from "@/models/ProjectModel";
import ProjectCard from "./ProjectCard";
import ProjectTrack from "./ProjectTrack";
import ScrollIcon from "./ScrollIcon";

type Props = {
   currentLayout: LayoutModel;
   filteredProjects: ProjectModel[];
   setSelectedProject: Dispatch<SetStateAction<ProjectModel | null>>;
};

export default function ProjectsShowcase({
   currentLayout,
   filteredProjects,
   setSelectedProject,
}: Props) {
   const isGrid = currentLayout === "grid";
   const isList = currentLayout === "list";
   const isCarousel = currentLayout === "carousel";

   const top = 10000;
   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const [showScrollIcon, setShowScrollIcon] = useState<boolean>(false);
   const handleScrollIcon = (latest: number) => {
      if (latest === 0) setShowScrollIcon(true);
      else setShowScrollIcon(false);
   };

   useMotionValueEvent(x, "change", (latest) => handleScrollIcon(latest));
   useMotionValueEvent(y, "change", (latest) => handleScrollIcon(latest));

   const springMotionY = useSpring(y, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });
   const springMotionX = useSpring(x, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });

   const handleScroll = (
      delta: number,
      current: number,
      axis: MotionValue<number>,
      rate: number
   ) => {
      const isScrollingDown = delta > 0;
      const isScrollingUp = delta < 0;
      if (isScrollingDown) {
         if (current === top) return;
         axis.set(current + rate);
      }
      if (isScrollingUp) {
         if (current === 0) return;
         axis.set(current - rate);
      }
   };

   const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
      const { deltaY } = e;
      const currentX = x.get();
      const currentY = y.get();

      if (isCarousel) handleScroll(deltaY, currentX, x, 500);
      if (isList) handleScroll(deltaY, currentY, y, 500);
      if (isGrid) handleScroll(deltaY, currentY, y, 500);
   };

   useEffect(() => {
      if (isCarousel) {
         x.set(y.get());
         y.set(0);
         handleScrollIcon(x.get());
      } else {
         y.set(x.get());
         x.set(0);
         handleScrollIcon(y.get());
      }
   }, [isCarousel, x, y]);

   return (
      <ProjectsShowcaseContainer
         currentLayout={currentLayout}
         handleWheel={handleWheel}
      >
         <AnimatePresence>
            {showScrollIcon && <ScrollIcon currentLayout={currentLayout} />}
         </AnimatePresence>
         <ProjectTrack
            currentLayout={currentLayout}
            springMotionX={springMotionX}
            springMotionY={springMotionY}
         >
            <AnimatePresence>
               {filteredProjects.map((project) => (
                  <ProjectCard
                     key={project.link}
                     project={project}
                     currentLayout={currentLayout}
                     onClick={() => setSelectedProject(project)}
                     springMotionX={springMotionX}
                     springMotionY={springMotionY}
                  />
               ))}
            </AnimatePresence>
         </ProjectTrack>
      </ProjectsShowcaseContainer>
   );
}
