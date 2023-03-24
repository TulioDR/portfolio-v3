import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import { useState, useEffect } from "react";
import ProjectsContainer from "@/components/ProjectsPage/ProjectsContainer";
import ProjectsPageTitle from "@/components/ProjectsPage/ProjectsPageTitle";
import BackButton from "@/components/ProjectsPage/Sidebar/BackButton";
import Head from "next/head";
import Filter from "@/components/ProjectsPage/Filter/Filter";
import LayoutButtons from "@/components/ProjectsPage/Sidebar/LayoutButtons";
import { StaticImageData } from "next/image";
import SkillModel from "@/models/SkillModel";
import allSkills from "@/assets/skills/allSkills";

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
      console.log(newArray);
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
            <div className="flex justify-between items-stretch mt-20 overflow-hidden pb-8">
               <ProjectsPageTitle />
               <div className="flex flex-col justify-between">
                  <BackButton />
                  <LayoutButtons
                     currentLayout={currentLayout}
                     setCurrentLayout={setCurrentLayout}
                     toggleFilter={toggleFilter}
                     toggleProjectsExpanded={toggleProjectsExpanded}
                  />
               </div>
            </div>
            <div className="overflow-y-hidden">
               <ProjectsContainer
                  currentLayout={currentLayout}
                  isProjectExpanded={isProjectExpanded}
               >
                  <ProjectCard currentLayout={currentLayout} />
                  <ProjectCard currentLayout={currentLayout} small />
                  <ProjectCard currentLayout={currentLayout} />
                  <ProjectCard currentLayout={currentLayout} />
                  <ProjectCard currentLayout={currentLayout} />
                  <ProjectCard currentLayout={currentLayout} />
                  <ProjectCard currentLayout={currentLayout} small />
               </ProjectsContainer>
            </div>
         </MainContainer>
      </>
   );
}
