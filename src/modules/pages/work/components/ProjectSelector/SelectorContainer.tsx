import React, { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import ReactLenis, { LenisInstance } from "@studio-freight/react-lenis";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
   selectedWork: ProjectModel | null;
};

export default function SelectorContainer({
   children,
   isOpen,
   selectedWork,
}: Props) {
   const lenisRef = useRef<LenisInstance>(null);
   const onAnimationStart = (definition: any) => {
      if (!selectedWork) return;
      if (definition.y !== "0%") return;

      const id = selectedWork.link + "-selector-project";
      const childElement = document.getElementById(id)!;
      const rect = childElement.getBoundingClientRect();
      const isOutOfScreen = rect.left < 0 || rect.right > window.innerWidth;

      if (!isOutOfScreen) return;

      const parentElement = childElement.parentElement!;

      const { left: parentLeft } = parentElement.getBoundingClientRect();
      const { left: childLeft } = childElement.getBoundingClientRect();

      const styles = window.getComputedStyle(parentElement);
      const gap = parseInt(styles.getPropertyValue("gap"));

      const newPosition = childLeft - parentLeft - gap;
      lenisRef.current!.scrollTo(newPosition, { immediate: true });
   };

   const containerControls = useAnimationControls();
   useEffect(() => {
      if (isOpen) {
         containerControls.start({ y: "0%", transition: { duration: 0 } });
      } else {
         containerControls.start({ y: "100%", transition: { duration: 0.3 } });
      }
   }, [isOpen, containerControls]);

   return (
      <motion.div
         initial={{ y: "100%" }}
         animate={containerControls}
         exit={{
            y: "-50%",
            opacity: 0,
            pointerEvents: "none",
            transition: { duration: 0.3 },
         }}
         onAnimationStart={onAnimationStart}
         className="absolute bottom-0 left-0 w-screen pointer-events-auto"
      >
         <ReactLenis
            ref={lenisRef}
            options={{ orientation: "horizontal" }}
            className="w-full overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
         >
            <div className="flex gap-10 p-10 min-w-max">{children}</div>
         </ReactLenis>
      </motion.div>
   );
}
