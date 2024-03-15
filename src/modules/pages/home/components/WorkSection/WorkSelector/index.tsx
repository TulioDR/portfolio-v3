import React from "react";
import WorkTitle from "./WorkTitle";
import ProjectModel from "@/models/ProjectModel";
import { motion } from "framer-motion";
import WorkSelectorTitle from "./WorkSelectorTitle";

type Props = {
   layout: number | null;
   setLayout: React.Dispatch<React.SetStateAction<number | null>>;
   selectedWork: ProjectModel[];
};

export default function WorkSelector({
   layout,
   setLayout,
   selectedWork,
}: Props) {
   const container = {
      initial: {},
      animate: { transition: { staggerChildren: 0.2 } },
   };

   return (
      <div>
         <WorkSelectorTitle />
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="overflow-hidden"
         >
            {selectedWork.map((work, index) => (
               <WorkTitle
                  key={work.title}
                  selected={layout === index + 1}
                  onHoverStart={() => setLayout(index + 1)}
                  onHoverEnd={() => setLayout(null)}
                  work={work}
               />
            ))}
         </motion.div>
      </div>
   );
}
