import MainContainer from "@/components/MainContainer";
import { useState, useEffect } from "react";

import Head from "next/head";

import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import BackArrowButton from "@/components/BackArrowButton";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import ProjectModel, { LayoutModel } from "@/models/ProjectModel";
import projects from "@/assets/projects";
import ProjectsShowcase from "@/modules/projectsPage/components/ProjectsShowcase";
import ProjectModal from "@/modules/projectsPage/components/ProjectModal";
import ProjectsPageTitle from "@/modules/projectsPage/components/ProjectsPageTitle";
import Filter from "@/modules/projectsPage/components/Filter";
import LayoutButtons from "@/modules/projectsPage/components/LayoutButtons";
import SectionContainer from "@/components/Sections/SectionContainer";

export default function ProjectsPage() {
   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, []);

   const [currentLayout, setCurrentLayout] = useState<LayoutModel>("mixed");

   const [isProjectExpanded, setIsProjectExpanded] = useState<boolean>(true);
   const toggleExpanded = () => setIsProjectExpanded((prevState) => !prevState);

   const { setIsBackFromProjects } = useBackFromProjectsContext();
   const router = useRouter();
   const goBack = () => {
      setIsBackFromProjects(true);
      router.push("/#projects");
   };

   const [filteredProjects, setFilteredProjects] =
      useState<ProjectModel[]>(projects);

   const [selectedProject, setSelectedProject] = useState<ProjectModel | null>(
      null
   );

   const onExitComplete = () => {
      document.body.style.overflowY = "auto";
   };

   return (
      <div className="w-full min-h-screen">
         <Head>
            <title>Projects - by Tulio Ruzo</title>
            <meta name="description" content="Check out my projects!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <SectionContainer lightBg>
            <MainContainer>
               <div className="flex justify-between items-center pt-20 overflow-hidden pb-7">
                  <ProjectsPageTitle />
                  <BackArrowButton onClick={goBack} black />
               </div>
               <div className="flex justify-end mb-7 relative">
                  <Filter setFilteredProjects={setFilteredProjects} />
                  <LayoutButtons
                     currentLayout={currentLayout}
                     setCurrentLayout={setCurrentLayout}
                     toggleExpanded={toggleExpanded}
                     isProjectExpanded={isProjectExpanded}
                  />
               </div>
               <ProjectsShowcase
                  currentLayout={currentLayout}
                  isProjectExpanded={isProjectExpanded}
                  filteredProjects={filteredProjects}
                  setSelectedProject={setSelectedProject}
               />
            </MainContainer>
            <AnimatePresence onExitComplete={onExitComplete}>
               {selectedProject && (
                  <ProjectModal
                     project={selectedProject}
                     close={() => setSelectedProject(null)}
                  />
               )}
            </AnimatePresence>
         </SectionContainer>
      </div>
   );
}
