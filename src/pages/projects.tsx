import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import Sidebar from "@/components/ProjectsPage/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import ProjectsContainer from "@/components/ProjectsPage/ProjectsContainer";
import ProjectsPageTitle from "@/components/ProjectsPage/ProjectsPageTitle";
import BackButton from "@/components/ProjectsPage/Sidebar/BackButton";
import Head from "next/head";

export default function ProjectsPage() {
   const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true);
   const toggle = () => setIsSidebarExpanded((prev) => !prev);

   const [currentLayout, setCurrentLayout] = useState<
      "normal" | "grid" | "list"
   >("normal");

   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, []);

   return (
      <>
         <Head>
            <title>Projects - by Tulio Ruzo</title>
            <meta name="description" content="Check out my projects!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <MainContainer>
            <div className="flex mt-20 items-center">
               <ProjectsPageTitle />
               <BackButton />
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
      </>
   );
}
