import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projects from "@/assets/projects";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   project: ProjectModel;
   EXIT_DURATION: number;
   isSelected: boolean;
};

export default function BackImage({
   project,
   EXIT_DURATION,
   isSelected,
}: Props) {
   console.log(project);
   return (
      <motion.div
         initial={{ y: "25%", opacity: 0 }}
         exit={{
            y: isSelected ? "0%" : "25%",
            opacity: isSelected ? 1 : 0,
         }}
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
