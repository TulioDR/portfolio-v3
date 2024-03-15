import React from "react";
import { motion } from "framer-motion";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   selected: boolean;
   onHoverStart: () => void;
   onHoverEnd: () => void;
   work: ProjectModel;
};

export default function WorkTitle({
   onHoverStart,
   onHoverEnd,
   work,
   selected,
}: Props) {
   const items = {
      initial: { opacity: 0, x: "-100%" },
      animate: { opacity: 1, x: "0%", transition: { duration: 0.5 } },
   };

   return (
      <motion.div
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         variants={items}
         className="font-thin text-2xl xl:text-3xl 2xl:text-4xl cursor-pointer max-w-max"
      >
         <span
            className={`duration-300 text-white ${selected ? "underline" : ""}`}
         >
            {work.title}
         </span>
      </motion.div>
   );
}
