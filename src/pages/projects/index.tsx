import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import { useState, useEffect } from "react";
import ProjectsContainer from "@/components/ProjectsPage/ProjectsContainer";
import ProjectsPageTitle from "@/components/ProjectsPage/ProjectsPageTitle";
import Head from "next/head";
import Filter from "@/components/ProjectsPage/Filter";
import LayoutButtons from "@/components/ProjectsPage/LayoutButtons";
import ProjectAnimation from "@/components/ProjectsPage/ProjectAnimation";
import ProjectAnimationModel from "@/models/ProjectAnimationModel";
import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import BackArrowButton from "@/components/BackArrowButton";
import { useRouter } from "next/router";
import useNavbarContext from "@/context/NavbarContext";
import { AnimatePresence } from "framer-motion";
import ProjectModel, { LayoutModel } from "@/models/ProjectModel";
import projects from "@/assets/projects";

export default function ProjectsPage() {
   const { setBlack } = useNavbarContext();
   useEffect(() => {
      window.scrollTo({ top: 0 });
      setBlack();
   }, [setBlack]);

   const [currentLayout, setCurrentLayout] = useState<LayoutModel>("mixed");

   const [isProjectExpanded, setIsProjectExpanded] = useState<boolean>(true);
   const toggleExpanded = () => setIsProjectExpanded((prevState) => !prevState);

   const [selectedProject, setSelectedProject] =
      useState<ProjectAnimationModel | null>(null);

   const { setIsBackFromProjects } = useBackFromProjectsContext();
   const router = useRouter();
   const goBack = () => {
      setIsBackFromProjects(true);
      router.push("/#projects");
   };

   const [filteredProjects, setFilteredProjects] =
      useState<ProjectModel[]>(projects);
   return (
      <div className="w-full min-h-screen overflow-x-hidden">
         <Head>
            <title>Projects - by Tulio Ruzo</title>
            <meta name="description" content="Check out my projects!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <ProjectAnimation selectedProject={selectedProject} />
         <MainContainer>
            <div className="flex justify-between items-center mt-20 overflow-hidden pb-7">
               <ProjectsPageTitle />
               <BackArrowButton onClick={goBack} isArrowWhite={false} />
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
            <ProjectsContainer
               currentLayout={currentLayout}
               isProjectExpanded={isProjectExpanded}
            >
               <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                     <ProjectCard
                        key={project.link}
                        project={project}
                        currentLayout={currentLayout}
                        small={index === 1 || index === 6}
                        setSelectedProject={setSelectedProject}
                        // Only for bug fixing when there is one project displayed
                        filteredProjects={filteredProjects}
                     />
                  ))}
               </AnimatePresence>
            </ProjectsContainer>
         </MainContainer>
      </div>
   );
}
