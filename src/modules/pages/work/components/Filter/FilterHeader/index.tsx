import React from "react";
import FilterHeaderButton from "./FilterHeaderButton";

type Props = {
   closeFilter: () => void;
};

export default function FilterHeader({ closeFilter }: Props) {
   return (
      <div className="flex items-center justify-between h-full w-full px-4">
         <div className="flex items-center">
            <span className="material-symbols-outlined">drag_indicator</span>
            <span>Drag me!</span>
         </div>
         <FilterHeaderButton onClick={closeFilter} icon="close" />
      </div>
   );
}
