import React, { useEffect, useState } from "react";
import ProjectsShowcaseContainer from "./ProjectsShowcase/ProjectsShowcaseContainer";
import ProjectCard from "./ProjectsShowcase/ProjectCard";
import ProjectSelector from "./ProjectSelector";
import projects from "@/assets/projects";
import ProjectModel from "@/models/ProjectModel";
import { LenisInstance } from "@studio-freight/react-lenis";

type Props = {
   lenisRef: React.RefObject<LenisInstance>;
};

export default function DesktopWork({ lenisRef }: Props) {
   const [selectedWork, setSelectedWork] = useState<ProjectModel | null>(null);
   const [showBackground, setShowBackground] = useState<boolean>(false);
   const [showSelectedInfo, setShowSelectedInfo] = useState<boolean>(false);

   const openModal = (project: ProjectModel) => {
      setSelectedWork(project);
      setShowSelectedInfo(true);
   };

   const closeModal = () => {
      if (showBackground) setShowBackground(false);
      if (showSelectedInfo) setShowSelectedInfo(false);
   };

   useEffect(() => {
      if (!selectedWork) return;

      const childElement = document.getElementById(selectedWork.link)!;
      const parentElement = childElement.parentElement!;

      const { left: parentLeft } = parentElement.getBoundingClientRect();
      const { left: childLeft } = childElement.getBoundingClientRect();

      const childPosition = childLeft - parentLeft;
      const halfChild = childElement.clientWidth / 2;
      const halfWindow = window.innerWidth / 2;
      const newPosition = childPosition - halfWindow + halfChild;

      lenisRef.current!.scrollTo(newPosition, { duration: 0.5 });
   }, [selectedWork]);

   return (
      <>
         <ProjectsShowcaseContainer onWheel={closeModal}>
            {projects.map((project, i) => (
               <ProjectCard
                  key={project.link}
                  i={i}
                  project={project}
                  onClick={() => openModal(project)}
                  isProjectOpen={showSelectedInfo}
                  isSelected={project.link === selectedWork?.link}
                  setShowBackground={setShowBackground}
                  setSelectedWork={setSelectedWork}
               />
            ))}
         </ProjectsShowcaseContainer>
         <ProjectSelector
            showBackground={showBackground}
            selectedWork={selectedWork}
            setSelectedWork={setSelectedWork}
         />
      </>
   );
}
