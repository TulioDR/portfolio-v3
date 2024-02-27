import React from "react";
import { motion } from "framer-motion";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   selected: boolean;
   onHoverStart: any;
   work: ProjectModel;
};

export default function WorkTitle({ onHoverStart, work, selected }: Props) {
   const items = {
      initial: { opacity: 0, x: "-100%" },
      animate: { opacity: 1, x: "0%", transition: { duration: 0.5 } },
   };

   return (
      <motion.div
         onHoverStart={onHoverStart}
         variants={items}
         className="font-thin text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer max-w-max"
      >
         <span
            className={`duration-300 ${
               selected ? "text-white" : "text-gray-400"
            }`}
         >
            {work.title}
         </span>
      </motion.div>
   );
}
