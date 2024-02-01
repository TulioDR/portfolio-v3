import { useState } from "react";
import LanguageIndicator from "./LanguageIndicator";

type Props = {};

export default function TranslateButton({}: Props) {
   const [isActive, setIsActive] = useState<boolean>(false);

   const toggle = () => {
      setIsActive((prev) => !prev);
   };
   return (
      <button
         onClick={toggle}
         className="h-10 px-5 text-white flex items-center gap-2 pointer-events-auto"
      >
         <LanguageIndicator isActive={isActive}>en</LanguageIndicator>
         <span>/</span>
         <LanguageIndicator isActive={!isActive}>es</LanguageIndicator>
      </button>
   );
}
