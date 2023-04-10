import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import { useState, useEffect } from "react";
import ProjectsContainer from "@/components/ProjectsPage/ProjectsContainer";
import ProjectsPageTitle from "@/components/ProjectsPage/ProjectsPageTitle";
import Head from "next/head";
import Filter from "@/components/ProjectsPage/Filter/Filter";
import LayoutButtons from "@/components/ProjectsPage/LayoutButtons";
import ProjectAnimation from "@/components/ProjectsPage/ProjectAnimation";
import ProjectAnimationModel from "@/models/ProjectAnimationModel";
import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import BackArrowButton from "@/components/BackArrowButton";
import { useRouter } from "next/router";
import useNavbarContext from "@/context/NavbarContext";
import { AnimatePresence } from "framer-motion";
import { LayoutModel } from "@/models/ProjectModel";
import useProjectsFilter from "@/hooks/useProjectsFilter";

export default function ProjectsPage() {
   const { setBlack } = useNavbarContext();
   useEffect(() => {
      window.scrollTo({ top: 0 });
      setBlack();
   }, [setBlack]);

   const [currentLayout, setCurrentLayout] = useState<LayoutModel>("mixed");

   const [isProjectExpanded, setIsProjectExpanded] = useState<boolean>(true);
   const toggleProjectsExpanded = () =>
      setIsProjectExpanded((prevState) => !prevState);

   const {
      selectedTech,
      setSelectedTech,
      notSelectedTech,
      setNotSelectedTech,
      filteredProjects,
      isFilterOpen,
      toggleFilter,
      closeFilter,
   } = useProjectsFilter();

   const [selectedProject, setSelectedProject] =
      useState<ProjectAnimationModel | null>(null);

   const { setIsBackFromProjects } = useBackFromProjectsContext();
   const router = useRouter();
   const goBack = () => {
      setIsBackFromProjects(true);
      router.push("/#projects");
   };

   return (
      <>
         <Head>
            <title>Projects - by Tulio Ruzo</title>
            <meta name="description" content="Check out my projects!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <ProjectAnimation selectedProject={selectedProject} />
         {isFilterOpen && (
            <Filter
               close={closeFilter}
               selectedTech={selectedTech}
               setSelectedTech={setSelectedTech}
               notSelectedTech={notSelectedTech}
               setNotSelectedTech={setNotSelectedTech}
            />
         )}
         <MainContainer>
            <div className="flex justify-between items-center mt-20 overflow-hidden pb-7">
               <ProjectsPageTitle />
               <BackArrowButton onClick={goBack} isArrowWhite={false} />
            </div>
            <LayoutButtons
               currentLayout={currentLayout}
               setCurrentLayout={setCurrentLayout}
               toggleFilter={toggleFilter}
               toggleProjectsExpanded={toggleProjectsExpanded}
               isProjectExpanded={isProjectExpanded}
               isFilterOpen={isFilterOpen}
            />
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
                     />
                  ))}
               </AnimatePresence>
            </ProjectsContainer>
         </MainContainer>
      </>
   );
}
