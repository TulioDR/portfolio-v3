import React from "react";
import FilterHeaderContainer from "./FilterHeaderContainer";
import { AnimationControls } from "framer-motion";
import DragMessage from "./DragMessage";
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
         <FilterHeaderButton icon={"sort"} onClick={expandFilter} />
         <DragMessage />
         <FilterHeaderButton onClick={contractFilter} icon="close" />
      </FilterHeaderContainer>
   );
}
