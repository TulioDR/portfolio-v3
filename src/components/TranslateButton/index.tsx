import { useState } from "react";
import spanish from "@/assets/images/languages/spanish.jpg";
import english from "@/assets/images/languages/english.png";
import LanguageOption from "./LanguageOption";
import MainContainer from "../MainContainer";

export default function TranslateButton() {
   const [isEnglish, setIsEnglish] = useState<boolean>(false);
   const toggle = () => setIsEnglish((prev) => !prev);

   return (
      <div className="fixed bottom-7 w-full pointer-events-none">
         <MainContainer>
            <div className="w-full flex justify-end">
               <button
                  onClick={toggle}
                  className="h-14 w-14 p-2 hover:w-36 duration-300 z-10 rounded-full overflow-hidden bg-orange-700 flex justify-end pointer-events-auto"
               >
                  <div className="w-20 h-full rounded-full mr-2 flex-shrink-0 overflow-hidden">
                     <div
                        className={`w-40 h-full overflow-hidden flex duration-300 ${
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
            </div>
         </MainContainer>
      </div>
   );
}
