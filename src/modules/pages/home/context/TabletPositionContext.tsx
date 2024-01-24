import React, { createContext, useContext, useEffect, useState } from "react";

interface TabletPositionInterface {
   positions: any;
}

const TabletPositionContext = createContext({} as TabletPositionInterface);

export default function useTabletPositionContext() {
   return useContext(TabletPositionContext);
}

type Props = { children: React.ReactNode };
export function TabletPositionProvider({ children }: Props) {
   const NUMBER_OF_PAGES = 7;
   const [positions, setPositions] = useState<any>(undefined);
   useEffect(() => {
      const sl = 1 / NUMBER_OF_PAGES;
      const h1 = sl * 0;
      const a1 = sl * 1;
      const a2 = sl * 2;
      const a3 = sl * 3;
      const w1 = sl * 4;
      const w2 = sl * 5;
      const w3 = sl * 6;
      const c1 = sl * 7;
      setPositions({ h1, a1, a2, a3, w1, w2, w3, c1 });
   }, [NUMBER_OF_PAGES]);

   const value: TabletPositionInterface = {
      positions,
   };
   if (!positions) return <></>;
   return (
      <TabletPositionContext.Provider value={value}>
         {children}
      </TabletPositionContext.Provider>
   );
}
