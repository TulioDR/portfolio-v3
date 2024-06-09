import ProjectModel from "@/models/ProjectModel";
import Image from "next/image";
import React, { useEffect } from "react";
import SelectorBorder from "./SelectorBorder";
import SelectorTitle from "./SelectorTitle";
import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
   project: ProjectModel;
   onMouseEnter: () => void;
   isSelected: boolean;
   isOpen: boolean;
   index: number;
};

export default function SelectorProject({
   project,
   onMouseEnter,
   isSelected,
   isOpen,
   index,
}: Props) {
   const thickness = 4;

   const projectControls = useAnimationControls();

   useEffect(() => {
      const duration = 0.3;
      if (isOpen) {
         projectControls.start({
            y: "0%",
            opacity: 1,
            transition: { duration, delay: index * 0.08 },
         });
      } else {
         projectControls.start({
            y: "50%",
            opacity: 0,
            transition: { duration },
         });
      }
   }, [isOpen, projectControls, index]);

   useEffect(() => {
      if (isSelected) projectControls.start({ scale: 1.1 });
      else projectControls.start({ scale: 1 });
   }, [isSelected, projectControls]);

   const router = useRouter();
   const handleClick = () => {
      router.push("work/" + project.link);
   };
   return (
      <motion.div
         id={project.link + "-selector-project"}
         initial={{ opacity: 0, y: "50%" }}
         animate={projectControls}
         style={{ padding: thickness }}
         onMouseEnter={onMouseEnter}
         onClick={handleClick}
         className="aspect-video h-40 relative group cursor-pointer bg-gray-700 p-1 overflow-hidden"
      >
         <SelectorBorder thickness={thickness} isSelected={isSelected} />
         <div className="relative w-full h-full">
            <Image
               src={project.img}
               alt={project.title}
               fill
               sizes="100%"
               priority
               className="object-cover"
            />
            <SelectorTitle isSelected={isSelected} project={project} />
         </div>
      </motion.div>
   );
}
