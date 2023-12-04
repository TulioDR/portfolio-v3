import FilterContainer from "./FilterContainer";
import useProjectsFilter from "@/hooks/useProjectsFilter";
import ProjectModel from "@/models/ProjectModel";
import FilterHeader from "./FilterHeader";
import FilterBody from "./FilterBody";

import ToggleFilterButton from "./ToggleFilterButton";

type Props = {
   setFilteredProjects: React.Dispatch<React.SetStateAction<ProjectModel[]>>;
};

export default function Filter({ setFilteredProjects }: Props) {
   const {
      openFilter,
      closeFilter,
      selectedTech,
      addTech,
      removeTech,
      resetFilter,
      isFilterOpen,
      filterBodyControls,
      filterContainerControls,
   } = useProjectsFilter(setFilteredProjects);

   return (
      <>
         <ToggleFilterButton
            openFilter={openFilter}
            closeFilter={closeFilter}
            isFilterOpen={isFilterOpen}
         />
         {isFilterOpen && (
            <FilterContainer animationControls={filterContainerControls}>
               <FilterHeader closeFilter={closeFilter} />
               <FilterBody
                  animationControls={filterBodyControls}
                  addTech={addTech}
                  removeTech={removeTech}
                  selectedTech={selectedTech}
                  resetFilter={resetFilter}
               />
            </FilterContainer>
         )}
      </>
   );
}
