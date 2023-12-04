import React from "react";
import FilterHeaderContainer from "./FilterHeaderContainer";
import { AnimationControls } from "framer-motion";
import FilterHeaderButton from "./FilterHeaderButton";

type Props = {
   expandFilter: () => void;
   contractFilter: () => void;
   isFilterOpen: boolean;
   headerContainerControls: AnimationControls;
};

export default function FilterHeader({
   expandFilter,
   contractFilter,
   isFilterOpen,
   headerContainerControls,
}: Props) {
   return (
      <FilterHeaderContainer
         isFilterOpen={isFilterOpen}
         animationControls={headerContainerControls}
      >
         <FilterHeaderButton onClick={expandFilter} icon="filter_alt" />
         <div className="flex items-center">
            <span className="material-icons">drag_indicator</span>
            <span className="uppercase">Drag me!</span>
            <span className="material-icons">drag_indicator</span>
         </div>
         <FilterHeaderButton onClick={contractFilter} icon="close" />
      </FilterHeaderContainer>
   );
}
