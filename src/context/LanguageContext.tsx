import { createContext, useContext, useState } from "react";

interface ContextInterface {
   isEnglish: boolean;
   toggleLanguage: () => void;
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

   const value: ContextInterface = {
      isEnglish,
      toggleLanguage,
   };
   return (
      <LanguageContext.Provider value={value}>
         {children}
      </LanguageContext.Provider>
   );
}
