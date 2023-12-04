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

   const [currentLayout, setCurrentLayout] = useState<LayoutModel>("grid");

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
      <div className="w-full bg-[#141414]">
         <Head>
            <title>Projects - by Tulio Ruzo</title>
            <meta name="description" content="Check out my projects!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <SectionContainer minHScreen>
            <MainContainer>
               <div className="space-y-7">
                  <div className="flex justify-between items-center pt-20 text-white">
                     <ProjectsPageTitle />
                     <BackArrowButton onClick={goBack} black />
                  </div>
                  <div className="flex justify-end relative">
                     <Filter setFilteredProjects={setFilteredProjects} />
                     <LayoutButtons
                        currentLayout={currentLayout}
                        setCurrentLayout={setCurrentLayout}
                     />
                  </div>
                  <div className="pb-20">
                     <ProjectsShowcase
                        currentLayout={currentLayout}
                        filteredProjects={filteredProjects}
                        setSelectedProject={setSelectedProject}
                     />
                  </div>
               </div>
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
