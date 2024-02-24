import ProjectModel from "@/models/ProjectModel";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
   currentWork: ProjectModel;
};

export default function SelectedWork({ currentWork }: Props) {
   return (
      <AnimatePresence mode="wait">
         <motion.div
            key={currentWork.title}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.1 }}
            className="w-full h-full relative"
         >
            <Image
               src={currentWork.img}
               alt="image"
               fill
               sizes="100%"
               className="object-cover"
               priority
            />
         </motion.div>
      </AnimatePresence>
   );
}
