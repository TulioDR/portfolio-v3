import React, { useRef, useState } from "react";
import MainButton from "../MainButton";
import ProjectsBackground from "./ProjectsBackground";
import { useScroll, useTransform, motion } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";
import projects from "@/assets/projects";
import Image from "next/image";
import SelectedWork from "./SelectedWork";
import HalfBack from "./SelectedWork";
import ProjectModel from "@/models/ProjectModel";
type Props = {};

export default function WorkSection({}: Props) {
   const progressRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: progressRef,
      offset: ["start start", "end end"],
   });

   const top = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

   const [currentWork, setCurrentWork] = useState<ProjectModel>(projects[1]);

   return (
      <div ref={progressRef}>
         <div
            id="work"
            className="h-screen sticky top-0 w-full overflow-hidden bg-primary"
         >
            <div className="w-full h-full relative">
               <HalfBack currentWork={currentWork} />
               <div className="w-full h-full px-20 pt-20 pb-10 absolute top-0 left-0 z-10">
                  <div className="w-full h-full relative flex items-end text-white">
                     <div className="w-full flex justify-between items-end">
                        <div className="flex flex-col gap-20">
                           <div className="space-y-5">
                              <div>SELECTED WORK</div>
                              <div className="text-7xl font-medium">
                                 DYONISAS
                              </div>
                           </div>
                           <div className="text-5xl ">
                              <span className="">01</span>
                              <span className="text-gray-500">/03</span>
                           </div>
                        </div>
                        <SelectedWork
                           setCurrentWork={setCurrentWork}
                           currentWork={currentWork}
                        />
                     </div>
                  </div>
               </div>
            </div>
            {/* <div className="absolute top-0 left-0 flex jus gap-10 w-full h-full pt-20 pb-10 px-20">
               <div className="flex-1 h-full flex justify-end">
                  <div className="w-1/2 relative">
                     <div className="absolute bottom-0 w-full left-0 ">
                        <div className="lg:w-48 xl:w-60 2xl:w-80 mx-auto">
                           <ScrollIndicator scroll={scrollYProgress} />
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
         </div>
         <div className="h-screen" />
         <div className="h-screen" />
      </div>
   );
}
