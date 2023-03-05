import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import Sidebar from "@/components/ProjectsPage/Sidebar/Sidebar";
import { useState } from "react";
import ProjectsContainer from "@/components/ProjectsPage/ProjectsContainer";
import ProjectsPageTitle from "@/components/ProjectsPage/ProjectsPageTitle";

export default function ProjectsPage() {
   const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true);
   const toggle = () => setIsSidebarExpanded((prev) => !prev);

   const [currentLayout, setCurrentLayout] = useState<
      "normal" | "grid" | "list"
   >("normal");

   return (
      <MainContainer>
         <ProjectsPageTitle />
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
