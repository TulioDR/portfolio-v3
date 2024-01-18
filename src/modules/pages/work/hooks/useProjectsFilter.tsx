import work from "@/assets/work";
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

   const containerControls = useAnimationControls();
   const innerControls = useAnimationControls();

   const openFilter = async () => {
      await setIsFilterOpen(true);
      await containerControls.start({
         width: "auto",
         opacity: 1,
         transition: { duration: 0.3 },
      });
      await containerControls.start({
         height: "auto",
         transition: { duration: 0.3 },
      });
      await innerControls.start({
         opacity: 1,
         transition: { duration: 0.5 },
      });
   };
   const closeFilter = async () => {
      await innerControls.start({
         opacity: 0,
         transition: { duration: 0.3 },
      });
      await containerControls.start({
         height: 5,
         transition: { duration: 0.3 },
      });
      await containerControls.start({
         width: 10,
         opacity: 0,
         transition: { duration: 0.3 },
      });
      setIsFilterOpen(false);
   };

   useEffect(() => {
      const founded = work.filter((project) =>
         selectedTech.every((value) =>
            project.technologies.some(({ name }) => name === value.name)
         )
      );
      setFilteredProjects(founded);
   }, [selectedTech, setFilteredProjects]);

   return {
      selectedTech,
      addTech,
      removeTech,
      resetFilter,
      isFilterOpen,
      openFilter,
      closeFilter,
      containerControls,
      innerControls,
   };
}
