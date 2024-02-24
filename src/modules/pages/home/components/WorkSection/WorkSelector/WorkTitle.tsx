import React from "react";
import { motion } from "framer-motion";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   selected: boolean;
   onHoverStart: any;
   work: ProjectModel;
};

export default function WorkTitle({ onHoverStart, work, selected }: Props) {
   return (
      <motion.div
         onHoverStart={onHoverStart}
         className={`font-thin text-4xl xl:text-5xl 2xl:text-6xl duration-300 cursor-pointer max-w-max ${
            selected ? "text-white" : "text-gray-400"
         }`}
      >
         {work.title}
      </motion.div>
   );
}
