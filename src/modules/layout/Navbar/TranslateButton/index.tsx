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
         className="text-white flex items-center gap-1 bg-accent rounded px-5"
      >
         <LanguageIndicator isActive={isActive}>en</LanguageIndicator>
         <span>/</span>
         <LanguageIndicator isActive={isActive}>es</LanguageIndicator>
      </button>
   );
}
