import useLanguageContext from "@/context/LanguageContext";
import React from "react";

type Props = {
   onClick: () => void;
   isFilterOpen: boolean;
};

export default function FilterButton({ onClick, isFilterOpen }: Props) {
   const { currentLanguage } = useLanguageContext();
   const { open, close } = currentLanguage.projects.filer;
   return (
      <button
         onClick={onClick}
         className={`h-10 duration-300 bg-main-primary rounded-lg text-white flex items-center overflow-hidden ${
            isFilterOpen ? "w-32" : "w-32 md:w-10 hover:w-32"
         }`}
      >
         <div className="aspect-square h-full grid place-content-center">
            <span className="material-icons">sort</span>
         </div>
         <div className="min-w-max text-sm">{isFilterOpen ? close : open}</div>
      </button>
   );
}
