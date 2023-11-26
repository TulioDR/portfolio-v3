import projects from "@/assets/projects";
import ProjectModel from "@/models/ProjectModel";

import SkillModel from "@/models/SkillModel";
import { useAnimationControls } from "framer-motion";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

export default function useProjectsFilter(
   setFilteredProjects: Dispatch<SetStateAction<ProjectModel[]>>
) {
   const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
   const [selectedTech, setSelectedTech] = useState<SkillModel[]>([]);

   const addTech = (tech: SkillModel) => {
      setSelectedTech((oldArray) => [...oldArray, tech]);
   };
   const removeTech = (tech: SkillModel) => {
      const newArray = selectedTech.filter(({ name }) => name !== tech.name);
      setSelectedTech(newArray);
   };
   const resetFilter = () => {
      setSelectedTech([]);
   };

   const headerContainerControls = useAnimationControls();
   const filterContainerControls = useAnimationControls();
   const [showFilterBody, setShowFilterBody] = useState<boolean>(false);

   const openFilter = async () => {
      setIsFilterOpen(true);
      await headerContainerControls.start({
         width: "auto",
         transition: { duration: 0.4, ease: "easeInOut" },
      });
      setShowFilterBody(true);
   };
   const closeFilter = () => {
      setIsFilterOpen(false);
      setShowFilterBody(false);
   };

   const contractHeader = () => {
      filterContainerControls.start({
         x: 0,
         y: 0,
         transition: { duration: 0.4 },
      });
      headerContainerControls.start({
         width: 40,
         transition: { duration: 0.4, ease: "easeInOut" },
      });
   };

   useEffect(() => {
      const founded = projects.filter((project) =>
         selectedTech.every((value) =>
            project.technologies.some(({ name }) => name === value.name)
         )
      );
      setFilteredProjects(founded);
   }, [selectedTech]);

   return {
      selectedTech,
      addTech,
      removeTech,
      resetFilter,
      isFilterOpen,
      openFilter,
      closeFilter,
      contractHeader,
      headerContainerControls,
      filterContainerControls,
      showFilterBody,
   };
}
