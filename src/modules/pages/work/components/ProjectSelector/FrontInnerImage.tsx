import React from "react";

import { motion } from "framer-motion";
import ProjectModel from "@/models/ProjectModel";
import Image from "next/image";

type Props = {
   project: ProjectModel;
};

export default function FrontInnerImage({ project }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0, width: "110vw", height: "110vh" }}
         animate={{ opacity: 1, width: "100vw", height: "100vh" }}
         exit={{ opacity: 1 }}
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
   );
}
