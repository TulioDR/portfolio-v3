import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import Sidebar from "@/components/ProjectsPage/Sidebar/Sidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectsContainer from "@/components/ProjectsPage/ProjectsContainer";

export default function ProjectsPage() {
   const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true);
   const toggle = () => setIsSidebarExpanded((prev) => !prev);

   const [currentLayout, setCurrentLayout] = useState<
      "normal" | "grid" | "list"
   >("normal");

   return (
      <MainContainer>
         <div className="overflow-hidden">
            <motion.h1
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               exit={{ x: "-100%" }}
               transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
               className="text-8xl pb-8 font-semibold w-min"
            >
               Projects
            </motion.h1>
         </div>
         <div className="flex justify-between overflow-y-hidden">
            <ProjectsContainer
               currentLayout={currentLayout}
               isSidebarExpanded={isSidebarExpanded}
            >
               <ProjectCard currentLayout={currentLayout} />
               <ProjectCard currentLayout={currentLayout} small />
               <ProjectCard currentLayout={currentLayout} />
               <ProjectCard currentLayout={currentLayout} />
               <ProjectCard currentLayout={currentLayout} />
               <ProjectCard currentLayout={currentLayout} />
               <ProjectCard currentLayout={currentLayout} small />
            </ProjectsContainer>
            <Sidebar
               setCurrentLayout={setCurrentLayout}
               toggle={toggle}
               isSidebarExpanded={isSidebarExpanded}
               currentLayout={currentLayout}
            />
         </div>
      </MainContainer>
   );
}
