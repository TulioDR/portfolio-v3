import React from "react";

type Props = {
   onClick: () => void;
   dropdownId?: string | null;
};

export default function DropdownButton({ onClick, dropdownId }: Props) {
   return (
      <div className="absolute top-full w-full left-0 flex flex-col items-center">
         <button
            onClick={onClick}
            className="rounded-full border-4 -translate-y-1/2 border-white bg-primary z-10 h-12 aspect-square hover:bg-white text-white hover:text-black"
         >
            <div
               className={`w-full h-full grid place-content-center ${
                  dropdownId ? "rotate-180" : ""
               }`}
            >
               <span className="material-symbols-outlined">arrow_downward</span>
            </div>
         </button>
      </div>
   );
}
