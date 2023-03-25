import React from "react";

type Props = {
   onClick: () => void;
   isFilterOpen: boolean;
};

export default function FilterButton({ onClick, isFilterOpen }: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-10 duration-300 bg-primary rounded-lg text-white flex items-center overflow-hidden ${
            isFilterOpen ? "w-36" : "w-36 md:w-10 hover:w-36"
         }`}
      >
         <div className="aspect-square h-full grid place-content-center">
            <span className="material-icons">sort</span>
         </div>
         <div className="min-w-max ml-1">
            {`${isFilterOpen ? "Close" : "Open"} Filter`}
         </div>
      </button>
   );
}
