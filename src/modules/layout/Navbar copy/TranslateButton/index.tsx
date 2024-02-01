import { useState } from "react";
import LanguageIndicator from "./LanguageIndicator";
import ActiveLang from "./ActiveLang";
import TranslateContainer from "./TranslateContainer";

type Props = {};

export default function TranslateButton({}: Props) {
   const [isActive, setIsActive] = useState<boolean>(false);

   const toggle = () => {
      setIsActive((prev) => !prev);
   };
   return (
      <TranslateContainer onClick={toggle}>
         <LanguageIndicator>en</LanguageIndicator>
         <span>/</span>
         <LanguageIndicator>es</LanguageIndicator>
         <ActiveLang isActive={isActive}>
            <LanguageIndicator>En</LanguageIndicator>
            <span>/</span>
            <LanguageIndicator>Es</LanguageIndicator>
         </ActiveLang>
      </TranslateContainer>
   );
}
