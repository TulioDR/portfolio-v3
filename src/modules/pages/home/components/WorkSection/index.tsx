import React, { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import projects from "@/assets/projects";
import WorkSelector from "./WorkSelector";

import { motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";
import SelectedWork from "./SelectedWork";

type Props = {};

export default function WorkSection({}: Props) {
   const progressRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: progressRef,
      offset: ["start start", "end end"],
   });

   const [layout, setLayout] = useState<number | null>(null);
   const selectedWork = [projects[1], projects[2], projects[3]];

   return (
      <motion.div
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         ref={progressRef}
      >
         <div
            id="work"
            className="h-screen sticky top-0 w-full bg-primary pt-24 pl-30 pr-10 pb-10"
         >
            <div className="w-full h-full flex gap-10">
               <div className="h-full flex flex-col justify-center relative text-white">
                  <WorkSelector
                     layout={layout}
                     setLayout={setLayout}
                     selectedWork={selectedWork}
                  />
                  <div className="absolute bottom-0 left-0">
                     <ScrollIndicator scroll={scrollYProgress} />
                  </div>
               </div>
               <div className="flex-1 h-full  flex justify-center relative">
                  <SelectedWork selectedWork={selectedWork} layout={layout} />
               </div>
            </div>
         </div>
         <div className="h-screen" />
         <div className="h-screen" />
      </motion.div>
   );
}
