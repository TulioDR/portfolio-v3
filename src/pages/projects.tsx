import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import { useState, useEffect } from "react";
import ProjectsContainer from "@/components/ProjectsPage/ProjectsContainer";
import ProjectsPageTitle from "@/components/ProjectsPage/ProjectsPageTitle";
import BackButton from "@/components/ProjectsPage/BackButton";
import Head from "next/head";
import Filter from "@/components/ProjectsPage/Filter/Filter";
import LayoutButtons from "@/components/ProjectsPage/LayoutButtons";
import { StaticImageData } from "next/image";
import SkillModel from "@/models/SkillModel";
import allSkills from "@/assets/skills/allSkills";
import projects from "@/assets/projects";

export default function ProjectsPage() {
   const [currentLayout, setCurrentLayout] = useState<
      "normal" | "grid" | "list"
   >("normal");

   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, []);

   const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
   const toggleFilter = () => setIsFilterOpen((prevState) => !prevState);
   const closeFilter = () => setIsFilterOpen(false);

   const [isProjectExpanded, setIsProjectExpanded] = useState<boolean>(true);
   const toggleProjectsExpanded = () =>
      setIsProjectExpanded((prevState) => !prevState);

   const [selectedTech, setSelectedTech] = useState<SkillModel[]>([]);
   const [tech, setTech] = useState<SkillModel[]>(allSkills);

   const addToSelectedTech = (
      name: string,
      logo: StaticImageData,
      link: string
   ) => {
      const newArray = tech.filter((tech) => tech.name !== name);
      setTech(newArray);
      setSelectedTech((oldArray) => [...oldArray, { name, logo, link }]);
   };

   const removeFromSelectedTech = (
      name: string,
      logo: StaticImageData,
      link: string
   ) => {
      setTech((oldArray) => [...oldArray, { name, logo, link }]);
      const newArray = selectedTech.filter((tech) => tech.name !== name);
      setSelectedTech(newArray);
   };

   const [filteredProjects, setFilteredProjects] = useState<any[]>(projects);
   useEffect(() => {
      const founded = projects.filter((project) =>
         selectedTech.every((value) =>
            project.technologies.some(({ name }) => name === value.name)
         )
      );
      setFilteredProjects(founded);
   }, [selectedTech]);

   return (
      <>
         <Head>
            <title>Projects - by Tulio Ruzo</title>
            <meta name="description" content="Check out my projects!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {isFilterOpen && (
            <Filter
               close={closeFilter}
               tech={tech}
               selectedTech={selectedTech}
               addToSelectedTech={addToSelectedTech}
               removeFromSelectedTech={removeFromSelectedTech}
            />
         )}
         <MainContainer>
            <div className="flex justify-between items-center mt-20 overflow-hidden pb-7">
               <ProjectsPageTitle />
               <BackButton />
            </div>
            <LayoutButtons
               currentLayout={currentLayout}
               setCurrentLayout={setCurrentLayout}
               toggleFilter={toggleFilter}
               toggleProjectsExpanded={toggleProjectsExpanded}
               isProjectExpanded={isProjectExpanded}
               isFilterOpen={isFilterOpen}
            />
            <div className="overflow-y-hidden">
               <ProjectsContainer
                  currentLayout={currentLayout}
                  isProjectExpanded={isProjectExpanded}
               >
                  {filteredProjects.map((project, index) => (
                     <ProjectCard
                        key={project.title + index}
                        title={project.title}
                        img={project.img}
                        currentLayout={currentLayout}
                        small={index === 1 || index === 6}
                     />
                  ))}
               </ProjectsContainer>
            </div>
         </MainContainer>
      </>
   );
}
