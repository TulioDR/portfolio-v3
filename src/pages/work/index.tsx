import ProjectModel, { LayoutModel } from "@/models/ProjectModel";
import LayoutButtons from "@/modules/pages/work/components/LayoutButtons";
import ProjectsShowcase from "@/modules/pages/work/components/ProjectsShowcase";
import ReactLenis from "@studio-freight/react-lenis";
import React, { useState } from "react";
import projects from "@/assets/projects";
type Props = {};

export default function WorkPage({}: Props) {
   const [currentLayout, setCurrentLayout] = useState<LayoutModel>("carousel");

   const [filteredProjects, setFilteredProjects] =
      useState<ProjectModel[]>(projects);

   const [selectedProject, setSelectedProject] = useState<ProjectModel | null>(
      null
   );

   const isCarousel = currentLayout === "carousel";
   return (
      <ReactLenis
         root
         options={{ orientation: isCarousel ? "horizontal" : "vertical" }}
      >
         <ProjectsShowcase
            currentLayout={currentLayout}
            filteredProjects={filteredProjects}
            setSelectedProject={setSelectedProject}
         />
         <LayoutButtons
            currentLayout={currentLayout}
            setCurrentLayout={setCurrentLayout}
         />
      </ReactLenis>
   );
}
