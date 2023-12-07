import MainContainer from "@/components/MainContainer";
import { useState, useEffect } from "react";

import Head from "next/head";

import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
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

   const [currentLayout, setCurrentLayout] = useState<LayoutModel>("carousel");

   const { setIsBackFromProjects } = useBackFromProjectsContext();
   const router = useRouter();

   const [filteredProjects, setFilteredProjects] =
      useState<ProjectModel[]>(projects);

   const [selectedProject, setSelectedProject] = useState<ProjectModel | null>(
      null
   );

   return (
      <>
         <ProjectsShowcase
            currentLayout={currentLayout}
            filteredProjects={filteredProjects}
            setSelectedProject={setSelectedProject}
         />
         <div className="fixed bottom-0 left-0 pb-5 w-full flex justify-center z-10">
            <div className="flex gap-5">
               <Filter setFilteredProjects={setFilteredProjects} />
               <LayoutButtons
                  currentLayout={currentLayout}
                  setCurrentLayout={setCurrentLayout}
               />
            </div>
         </div>
      </>
   );
}
