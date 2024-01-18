import FilterContainer from "./FilterContainer";

import ProjectModel from "@/models/ProjectModel";
import FilterHeader from "./FilterHeader";
import FilterBody from "./FilterBody";

import ToggleFilterButton from "./ToggleFilterButton";
import useProjectsFilter from "../../hooks/useProjectsFilter";

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
      containerControls,
      innerControls,
   } = useProjectsFilter(setFilteredProjects);

   return (
      <>
         <ToggleFilterButton
            openFilter={openFilter}
            closeFilter={closeFilter}
            isFilterOpen={isFilterOpen}
         />
         {isFilterOpen && (
            <FilterContainer
               containerControls={containerControls}
               innerControls={innerControls}
            >
               <FilterHeader closeFilter={closeFilter} />
               <FilterBody
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
