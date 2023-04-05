import spanish from "@/assets/images/languages/spanish.jpg";
import english from "@/assets/images/languages/english.png";
import useLanguageContext from "@/context/LanguageContext";
import React from "react";
import LanguageOption from "./LanguageOption";

export default function TranslateButtonDesktop() {
   const { isEnglish, toggleLanguage } = useLanguageContext();
   return (
      <button
         onClick={toggleLanguage}
         className="h-14 w-14 p-2 hover:w-36 duration-300 rounded-full overflow-hidden bg-orange-700 flex justify-end"
      >
         <div className="w-20 h-full rounded-full mr-2 flex-shrink-0 overflow-hidden">
            <div
               className={`w-40 h-full flex duration-300 ${
                  isEnglish ? "-translate-x-1/2" : ""
               }`}
            >
               <LanguageOption src={spanish} alt="spanish" />
               <LanguageOption src={english} alt="english" />
            </div>
         </div>
         <div className="h-full aspect-square text-white grid place-content-center flex-shrink-0">
            <span className="material-icons">translate</span>
         </div>
      </button>
   );
}
