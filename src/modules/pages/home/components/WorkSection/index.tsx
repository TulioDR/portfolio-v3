import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import projects from "@/assets/projects";

import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import MainButton from "../MainButton";
import MainContainer from "../MainContainer";

type Props = {};

export default function WorkSection({}: Props) {
   const progressRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: progressRef,
      offset: ["start end", "end end"],
   });
   const selectedWork = [projects[1], projects[2], projects[3]];

   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
   const left = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

   return (
      <motion.div>
         <div className="h-screen sticky top-0 w-full bg-primary py-20 2xl:py-40 overflow-hidden">
            <MainContainer hFull>
               <div className="w-full h-full relative">
                  <motion.div
                     style={{ x, left }}
                     className="flex gap-10 flex-shrink-0 h-full absolute"
                  >
                     <div className=" aspect-square h-full text-white flex flex-col justify-center items-center gap-10">
                        <h1 className="font-semibold text-5xl">
                           Selected Work
                        </h1>
                        <MainButton>View all work</MainButton>
                     </div>
                     {selectedWork.map((work, index) => (
                        <WorkCard
                           key={work.title}
                           work={work}
                           number={`0${index + 1}`}
                           scrollYProgress={scrollYProgress}
                        />
                     ))}
                  </motion.div>
               </div>
            </MainContainer>
         </div>
         <div ref={progressRef} className="h-[200vh]" />
      </motion.div>
   );
}
