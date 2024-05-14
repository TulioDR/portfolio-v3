import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import projects from "@/assets/projects";

import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import MainButton from "../MainButton";
import MainContainer from "../MainContainer";
import MainTitle from "../MainTitle";

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
         <div className="bg-primary ">
            <MainTitle white>Selected Work</MainTitle>
            <div className="h-screen hidden lg:block sticky top-0 w-full md:py-20 2xl:py-40 overflow-hidden">
               <MainContainer hFull>
                  <div className="w-full h-full relative">
                     <motion.div
                        style={{ x, left }}
                        className="flex gap-10 flex-shrink-0 h-full absolute"
                     >
                        {projects.map((work, index) => (
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
            <div ref={progressRef} className="h-[400vh] hidden lg:block" />
         </div>
         <MainContainer>
            <div className="w-full grid sm:grid-cols-2 gap-5 lg:hidden pb-20">
               {projects.map((work, index) => (
                  <WorkCard
                     key={work.title}
                     work={work}
                     number={`0${index + 1}`}
                     scrollYProgress={scrollYProgress}
                  />
               ))}
            </div>
         </MainContainer>
      </motion.div>
   );
}
