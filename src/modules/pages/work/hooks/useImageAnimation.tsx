import ProjectModel from "@/models/ProjectModel";
import { useAnimationControls } from "framer-motion";
import { useCallback, useEffect } from "react";

export default function useImageAnimation(
   isProjectOpen: boolean,
   isSelected: boolean,
   setShowBackground: React.Dispatch<React.SetStateAction<boolean>>,
   setSelectedWork: React.Dispatch<React.SetStateAction<ProjectModel | null>>,
   i: number
) {
   const containerControls = useAnimationControls();
   const imageControls = useAnimationControls();
   const duration = 0.8;
   const ease = [0.16, 1, 0.3, 1];

   const hideCard = useCallback(async () => {
      await containerControls.start({
         height: 0,
         width: "100%",
         zIndex: 0,
         transition: { duration: 0.2 },
      });
   }, [containerControls]);

   const expandCard = useCallback(async () => {
      imageControls.start({
         scale: 1,
         transition: { duration, ease },
      });
      await containerControls.start({
         height: "100vh",
         width: "100vw",
         zIndex: 30,
         transition: { duration, ease },
      });

      setShowBackground(true);
   }, [containerControls, duration, setShowBackground]);

   const setToNormal = useCallback(
      async (i: number) => {
         imageControls.start({
            scale: 1.3,
            transition: { duration, ease },
         });
         await containerControls.start({
            height: "100%",
            width: "100%",
            transition: {
               duration,
               ease,
               delay: i * 0.08,
            },
         });
         containerControls.start({ zIndex: 0 });
         setSelectedWork(null);
      },
      [containerControls, duration, setSelectedWork]
   );

   useEffect(() => {
      if (isProjectOpen) {
         if (isSelected) expandCard();
         else hideCard();
      } else {
         if (isSelected) setToNormal(0);
         else setToNormal(i);
      }
   }, [isSelected, isProjectOpen, expandCard, hideCard, setToNormal, i]);

   return { containerControls, imageControls };
}
