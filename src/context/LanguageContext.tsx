import GlobalTranslationsModel from "@/models/GlobalTranslationsModel";
import english from "@/translations/en/global";
import spanish from "@/translations/es/global";
import { createContext, useContext, useEffect, useState } from "react";

interface ContextInterface {
   isEnglish: boolean;
   toggleLanguage: () => void;
   currentLanguage: GlobalTranslationsModel;
}

const LanguageContext = createContext({} as ContextInterface);

export default function useLanguageContext() {
   return useContext(LanguageContext);
}

interface Props {
   children: React.ReactNode;
}

export function LanguageContextProvider({ children }: Props) {
   const [isEnglish, setIsEnglish] = useState<boolean>(true);
   const toggleLanguage = () => setIsEnglish((prev) => !prev);

   const [currentLanguage, setCurrentLanguage] =
      useState<GlobalTranslationsModel>(english);

   useEffect(() => {
      if (isEnglish) setCurrentLanguage(english);
      else setCurrentLanguage(spanish);
   }, [isEnglish]);

   const value: ContextInterface = {
      isEnglish,
      toggleLanguage,
      currentLanguage,
   };
   return (
      <LanguageContext.Provider value={value}>
         {children}
      </LanguageContext.Provider>
   );
}
