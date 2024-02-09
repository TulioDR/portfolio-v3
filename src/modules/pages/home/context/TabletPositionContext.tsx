import React, { createContext, useContext, useEffect, useState } from "react";

interface PositionsModel {
   h1: number;
   h2: number;
   h3: number;
   a1: number;
   a2: number;
   a3: number;
   a4: number;
   w1: number;
   w2: number;
   w3: number;
   c1: number;
}
interface TabletPositionInterface {
   positions: PositionsModel;
}

const TabletPositionContext = createContext({} as TabletPositionInterface);

export default function useTabletPositionContext() {
   return useContext(TabletPositionContext);
}

type Props = { children: React.ReactNode };
export function TabletPositionProvider({ children }: Props) {
   const NUMBER_OF_PAGES = 10;

   const [positions, setPositions] = useState<PositionsModel>(
      {} as PositionsModel
   );
   useEffect(() => {
      const sl = 1 / NUMBER_OF_PAGES;
      const h1 = sl * 0;
      const h2 = sl * 1;
      const h3 = sl * 2;
      const a1 = sl * 3;
      const a2 = sl * 4;
      const a3 = sl * 5;
      const a4 = sl * 6;
      const w1 = sl * 7;
      const w2 = sl * 8;
      const w3 = sl * 9;
      const c1 = sl * 10;
      setPositions({ h1, h2, h3, a1, a2, a3, a4, w1, w2, w3, c1 });
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
