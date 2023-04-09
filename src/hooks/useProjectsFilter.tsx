import projects from "@/assets/projects";
import allSkills from "@/assets/skills/allSkills";
import SkillModel from "@/models/SkillModel";
import { useEffect, useState } from "react";

export default function useProjectsFilter() {
   const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
   const toggleFilter = () => setIsFilterOpen((prevState) => !prevState);
   const closeFilter = () => setIsFilterOpen(false);

   const [selectedTech, setSelectedTech] = useState<SkillModel[]>([]);
   const [notSelectedTech, setNotSelectedTech] =
      useState<SkillModel[]>(allSkills);

   const [filteredProjects, setFilteredProjects] = useState<any[]>(projects);

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
      setSelectedTech,
      notSelectedTech,
      setNotSelectedTech,
      filteredProjects,
      isFilterOpen,
      toggleFilter,
      closeFilter,
   };
}
