import { AnimatePresence } from "framer-motion";
import FilterContainer from "./FilterContainer";
import useProjectsFilter from "@/hooks/useProjectsFilter";
import ProjectModel from "@/models/ProjectModel";
import FilterHeader from "./FilterHeader";
import FilterBody from "./FilterBody";

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
      headerContainerControls,
      filterContainerControls,
      showFilterBody,
      contractHeader,
   } = useProjectsFilter(setFilteredProjects);

   return (
      <FilterContainer
         filterContainerControls={filterContainerControls}
         isFilterOpen={isFilterOpen}
      >
         <FilterHeader
            expandFilter={openFilter}
            contractFilter={closeFilter}
            isFilterOpen={isFilterOpen}
            headerContainerControls={headerContainerControls}
         />
         <AnimatePresence onExitComplete={contractHeader}>
            {showFilterBody && (
               <FilterBody
                  addTech={addTech}
                  removeTech={removeTech}
                  selectedTech={selectedTech}
                  resetFilter={resetFilter}
               />
            )}
         </AnimatePresence>
      </FilterContainer>
   );
}
