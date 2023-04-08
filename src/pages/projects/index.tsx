import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import { useState, useEffect } from "react";
import ProjectsContainer from "@/components/ProjectsPage/ProjectsContainer";
import ProjectsPageTitle from "@/components/ProjectsPage/ProjectsPageTitle";
import Head from "next/head";
import Filter from "@/components/ProjectsPage/Filter/Filter";
import LayoutButtons from "@/components/ProjectsPage/LayoutButtons";
import SkillModel from "@/models/SkillModel";
import projects from "@/assets/projects";
import ProjectAnimation from "@/components/ProjectsPage/ProjectAnimation";
import ProjectAnimationModel from "@/models/ProjectAnimationModel";
import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import BackArrowButton from "@/components/BackArrowButton";
import { useRouter } from "next/router";
import useNavbarContext from "@/context/NavbarContext";

export default function ProjectsPage() {
   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, []);

   const { setBlack } = useNavbarContext();
   useEffect(() => setBlack(), []);

   const [currentLayout, setCurrentLayout] = useState<
      "normal" | "grid" | "list"
   >("normal");

   const [isProjectExpanded, setIsProjectExpanded] = useState<boolean>(true);
   const toggleProjectsExpanded = () =>
      setIsProjectExpanded((prevState) => !prevState);

   const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
   const toggleFilter = () => setIsFilterOpen((prevState) => !prevState);
   const closeFilter = () => setIsFilterOpen(false);

   const [selectedTech, setSelectedTech] = useState<SkillModel[]>([]);
   const [filteredProjects, setFilteredProjects] = useState<any[]>(projects);
   useEffect(() => {
      const founded = projects.filter((project) =>
         selectedTech.every((value) =>
            project.technologies.some(({ name }) => name === value.name)
         )
      );
      setFilteredProjects(founded);
   }, [selectedTech]);

   const [selectedProject, setSelectedProject] =
      useState<ProjectAnimationModel | null>(null);

   const { setIsBackFromProjects } = useBackFromProjectsContext();
   const router = useRouter();
   const handleClick = () => {
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
            />
         )}
         <MainContainer>
            <div className="flex justify-between items-center mt-20 overflow-hidden pb-7">
               <ProjectsPageTitle />
               <BackArrowButton onClick={handleClick} isArrowWhite={false} />
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
               {filteredProjects.map((project, index) => (
                  <ProjectCard
                     key={project.link + index}
                     project={project}
                     currentLayout={currentLayout}
                     small={index === 1 || index === 6}
                     setSelectedProject={setSelectedProject}
                  />
               ))}
            </ProjectsContainer>
         </MainContainer>
      </>
   );
}
