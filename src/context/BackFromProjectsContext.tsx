import { createContext, useContext, useState } from "react";

interface ContextInterface {
   isBackFromProjects: boolean;
   setIsBackFromProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

const BackFromProjectsContext = createContext({} as ContextInterface);
export default function useBackFromProjectsContext() {
   return useContext(BackFromProjectsContext);
}

interface Props {
   children: React.ReactNode;
}
export function BackFromContextProvider({ children }: Props) {
   const [isBackFromProjects, setIsBackFromProjects] = useState<boolean>(false);

   const value: ContextInterface = {
      isBackFromProjects,
      setIsBackFromProjects,
   };

   return (
      <BackFromProjectsContext.Provider value={value}>
         {children}
      </BackFromProjectsContext.Provider>
   );
}
