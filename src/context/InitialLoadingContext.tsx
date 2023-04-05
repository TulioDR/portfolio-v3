import { createContext, useContext, useState } from "react";

interface ContextInterface {
   onLoadingAnimationComplete: () => void;
   isFullyLoaded: boolean;
}
const InitialLoadingContext = createContext({} as ContextInterface);
export default function useInitialLoadingContext() {
   return useContext(InitialLoadingContext);
}

interface Props {
   children: React.ReactNode;
}
export function InitialLoadingContextProvider({ children }: Props) {
   const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);

   const onLoadingAnimationComplete = () => {
      setIsFullyLoaded(true);
   };

   const value = {
      onLoadingAnimationComplete,
      isFullyLoaded,
   };

   return (
      <InitialLoadingContext.Provider value={value}>
         {children}
      </InitialLoadingContext.Provider>
   );
}
