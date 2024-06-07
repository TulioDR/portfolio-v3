import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectModel from "@/models/ProjectModel";
import Image from "next/image";

type Props = {
   project: ProjectModel;
   EXIT_DURATION: number;
};

export default function FrontImage({ project, EXIT_DURATION }: Props) {
   return (
      <motion.div
         initial={{ height: "100%" }}
         exit={{ height: 0 }}
         transition={{ duration: EXIT_DURATION, ease: "easeInOut" }}
         className="absolute top-0 left-0 w-full h-full flex items-center overflow-hidden z-20"
      >
         <div className="h-screen w-screen relative">
            <AnimatePresence initial={false}>
               <motion.div
                  key={project.link}
                  initial={{ opacity: 0, width: "110vw", height: "110vh" }}
                  animate={{ opacity: 1, width: "100vw", height: "100vh" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
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
            </AnimatePresence>
         </div>
      </motion.div>
   );
}
