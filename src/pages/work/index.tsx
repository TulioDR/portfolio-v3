import ProjectModel from "@/models/ProjectModel";
import ProjectsShowcaseContainer from "@/modules/pages/work/components/ProjectsShowcase/ProjectsShowcaseContainer";
import ReactLenis, { LenisInstance } from "@studio-freight/react-lenis";
import React, { useEffect, useRef, useState } from "react";
import projects from "@/assets/projects";
import ProjectCard from "@/modules/pages/work/components/ProjectsShowcase/ProjectCard";
import ProjectSelector from "@/modules/pages/work/components/ProjectSelector";

export default function WorkPage() {
   const lenisRef = useRef<LenisInstance>(null);

   const [selectedWork, setSelectedWork] = useState<ProjectModel | null>(null);
   const [showBackground, setShowBackground] = useState<boolean>(false);
   const [showSelectedInfo, setShowSelectedInfo] = useState<boolean>(false);

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

   const openModal = (project: ProjectModel) => {
      setSelectedWork(project);
      setShowSelectedInfo(true);
   };

   const closeModal = () => {
      if (showBackground) setShowBackground(false);
      if (showSelectedInfo) setShowSelectedInfo(false);
   };

   return (
      <ReactLenis ref={lenisRef} root options={{ orientation: "horizontal" }}>
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
      </ReactLenis>
   );
}
