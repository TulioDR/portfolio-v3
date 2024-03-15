import ProjectModel from "@/models/ProjectModel";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
   currentWork: ProjectModel;
};

export default function SelectedWork({ currentWork }: Props) {
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={{ width: "100%" }}
         transition={{ duration: 0.5 }}
         className="h-full relative"
      >
         <AnimatePresence mode="wait">
            <motion.div
               key={currentWork.title}
               initial={{ opacity: 0.5 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0.5 }}
               transition={{ duration: 0.1 }}
               className="w-full h-full relative brightness-75"
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
            <div className="absolute top-0 left-0 z-10 backdrop-blur-lg h-full w-full flex justify-center items-center p-10">
               <div className="relative aspect-video w-full shadow-xl">
                  <Image
                     src={currentWork.img}
                     alt="image"
                     fill
                     sizes="100%"
                     className="object-cover"
                     priority
                  />
               </div>
            </div>
         </AnimatePresence>
      </motion.div>
   );
}
