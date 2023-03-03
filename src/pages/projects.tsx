import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import Sidebar from "@/components/ProjectsPage/Sidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectsContainer from "@/components/ProjectsPage/ProjectsContainer";
import Link from "next/link";
import useBackFromProjectsContext from "@/context/BackFromProjectsContext";

export default function ProjectsPage() {
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

   const { setIsBackFromProjects } = useBackFromProjectsContext();
   const handleClick = () => {
      setIsBackFromProjects(true);
   };

   return (
      <MainContainer>
         <div className="overflow-hidden flex justify-between items-start">
            <motion.h1
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               exit={{ x: "-100%" }}
               transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
               className="text-8xl pb-7 font-semibold w-min"
            >
               Projects
            </motion.h1>
            <Link
               onClick={handleClick}
               href="/#projects"
               className="py-2 bg-slate-800 text-white mt-5 w-20 text-center"
            >
               Go Back
            </Link>
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
