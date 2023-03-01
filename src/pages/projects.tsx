import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import Sidebar from "@/components/ProjectsPage/Sidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectsContainer from "@/components/ProjectsPage/ProjectsContainer";

export default function projects() {
   const [showFilter, setShowFilter] = useState<boolean>(true);
   const toggle = () => {
      setShowFilter((prev) => !prev);
   };

   const [layout, setLayout] = useState<"normal" | "grid" | "list">("normal");

   const setNormal = () => {
      setLayout("normal");
   };
   const setGrid = () => {
      setLayout("grid");
   };
   const setList = () => {
      setLayout("list");
   };
   return (
      <MainContainer>
         <div className="overflow-hidden">
            <motion.h1
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
               className="text-8xl pb-7 font-semibold w-min"
            >
               Projects
            </motion.h1>
         </div>
         <div className="flex justify-between overflow-y-hidden">
            <ProjectsContainer layout={layout} showFilter={showFilter}>
               <ProjectCard layout={layout} />
               <ProjectCard layout={layout} small />
               <ProjectCard layout={layout} />
               <ProjectCard layout={layout} />
               <ProjectCard layout={layout} />
               <ProjectCard layout={layout} />
               <ProjectCard layout={layout} small />
            </ProjectsContainer>
            <Sidebar
               setNormal={setNormal}
               setGrid={setGrid}
               setList={setList}
               toggle={toggle}
               showFilter={showFilter}
            />
         </div>
      </MainContainer>
   );
}
