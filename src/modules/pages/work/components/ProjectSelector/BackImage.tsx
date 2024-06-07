import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projects from "@/assets/projects";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   project: ProjectModel;
   EXIT_DURATION: number;
};

export default function BackImage({ project, EXIT_DURATION }: Props) {
   return (
      <motion.div
         initial={{ y: "25%", opacity: 0 }}
         exit={{ y: "0%", opacity: 1 }}
         transition={{
            duration: EXIT_DURATION,
            ease: "easeInOut",
            opacity: { duration: 0 },
         }}
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
   );
}
