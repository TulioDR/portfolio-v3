import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectModel from "@/models/ProjectModel";
import FrontInnerImage from "./FrontInnerImage";

type Props = {
   project: ProjectModel;
};

export default function FrontImage({ project }: Props) {
   const duration = 1;

   return (
      <motion.div
         initial={{ height: "100%" }}
         exit={{ height: 0 }}
         transition={{ duration, ease: "easeInOut" }}
         className="absolute top-0 left-0 w-full h-full flex items-center overflow-hidden z-20"
      >
         <div className="h-screen w-screen relative">
            <AnimatePresence initial={false}>
               <FrontInnerImage key={project.link} project={project} />
            </AnimatePresence>
         </div>
      </motion.div>
   );
}
