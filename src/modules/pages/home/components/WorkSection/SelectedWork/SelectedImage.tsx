import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   currentWork: ProjectModel;
   fromBottom?: true;
   fromLeft?: true;
   fromRight?: true;
};

export default function SelectedImage({
   currentWork,
   fromBottom,
   fromLeft,
   fromRight,
}: Props) {
   return (
      <div
         className={`w-1/2 aspect-video flex items-end 
         ${fromRight ? "justify-end" : ""}
         ${fromLeft ? "justify-start" : ""}
      `}
      >
         <motion.div
            initial={fromBottom ? { height: "0%" } : { width: "0%" }}
            animate={fromBottom ? { height: "100%" } : { width: "100%" }}
            exit={fromBottom ? { height: "0%" } : { width: "0%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`overflow-hidden relative ${
               fromBottom ? "w-full" : "h-full"
            }`}
         >
            <div
               className={`absolute bottom-0 aspect-video 
                  ${fromBottom ? "w-full" : "h-full"}
                  ${fromRight ? "right-0" : ""}
                  ${fromLeft ? "left-0" : ""}
               `}
            >
               <Image
                  src={currentWork.img}
                  alt="image"
                  fill
                  sizes="100%"
                  className="object-cover"
                  priority
               />
            </div>
         </motion.div>
      </div>
   );
}
