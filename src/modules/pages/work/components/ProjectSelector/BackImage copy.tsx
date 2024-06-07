import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import projects from "@/assets/projects";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   project: ProjectModel;
};

export default function BackImage({ project }: Props) {
   const duration = 1;
   return (
      <motion.div
         initial={{ y: "25%" }}
         exit={{ y: "0%" }}
         transition={{ duration, ease: "easeInOut" }}
         className="w-full h-full"
      >
         <AnimatePresence initial={false}>
            <motion.div
               key={project.link}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.15 }}
               className="relative w-full h-full"
            >
               <Image
                  src={projects[0].img}
                  alt={projects[0].link}
                  fill
                  sizes="100%"
                  quality={100}
                  className="object-cover"
               />
            </motion.div>
         </AnimatePresence>
      </motion.div>
   );
}
