import { useState } from "react";
import LanguageOption from "./LanguageOption";

export default function TranslateButton() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => setIsOpen((prev) => !prev);

   return (
      <div
         className={`fixed bottom-7 right-[5%] 2xl:bottom-16 2xl:right-16 z-10 overflow-hidden rounded-xl bg-orange-700 duration-300 flex flex-col items-end justify-end ${
            isOpen ? "w-36 h-36" : "h-14 w-14"
         }`}
         style={{
            clipPath: isOpen
               ? "circle(100% at 50% 50%)"
               : "circle(50% at 50% 50%)",
         }}
      >
         <div className="w-36 px-2 h-20 flex-shrink-0 flex flex-col justify-between">
            <LanguageOption>Español</LanguageOption>
            <LanguageOption>English</LanguageOption>
         </div>
         <button
            onClick={toggle}
            className="h-14 aspect-square text-white grid place-content-center flex-shrink-0"
         >
            <span className="material-icons">
               {isOpen ? "close" : "translate"}
            </span>
         </button>
      </div>
   );
}
