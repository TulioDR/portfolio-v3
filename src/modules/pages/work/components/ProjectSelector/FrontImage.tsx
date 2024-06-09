import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   project: ProjectModel;
   EXIT_DURATION: number;
   isSelected: boolean;
};

export default function FrontImage({
   project,
   EXIT_DURATION,
   isSelected,
}: Props) {
   const imageControls = useAnimationControls();

   useEffect(() => {
      const transition = { duration: 0.2 };
      const handleAnimation = async () => {
         if (isSelected) {
            imageControls.stop();
            await imageControls.start({
               width: "110vw",
               height: "110vh",
               transition: { duration: 0 },
            });
            imageControls.start({
               opacity: 1,
               width: "100vw",
               height: "100vh",
               transition,
            });
         } else {
            imageControls.stop();
            imageControls.start({ opacity: 0, transition });
         }
      };
      handleAnimation();
   }, [isSelected, imageControls]);
   return (
      <motion.div
         initial={{ height: "100%" }}
         exit={{ height: 0 }}
         transition={{ duration: EXIT_DURATION, ease: "easeInOut" }}
         className="absolute top-0 left-0 w-full h-full flex items-center overflow-hidden z-20"
      >
         <div className="h-screen w-screen relative">
            <motion.div
               animate={imageControls}
               className="absolute bottom-0 right-0"
            >
               <Image
                  src={project.img}
                  alt={project.link}
                  fill
                  sizes="100%"
                  priority
                  quality={100}
                  className="object-cover w-full h-full"
               />
            </motion.div>
         </div>
      </motion.div>
   );
}
