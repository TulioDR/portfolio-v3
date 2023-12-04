import React, { createContext, useContext } from "react";
import { MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface ContextInterface {
   scrolledValue: number;
   springMotion: MotionValue<any>;
   refreshScroll: () => void;
}

const ScrollContext = createContext({} as ContextInterface);
export default function useScrollContext() {
   return useContext(ScrollContext);
}

type Props = { children: React.ReactNode };
export function ScrollContextProvider({ children }: Props) {
   const { scrollYProgress } = useScroll();
   const springMotion = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });

   const percentage = useTransform(springMotion, [0, 1], [0, 100]);

   const [scrolledValue, setScrolledValue] = useState<number>(0);
   const [refresh, setRefresh] = useState<boolean>(false);
   const refreshScroll = () => setRefresh((prev) => !prev);

   // useEffect(() => {
   //    const doSomething = () => {
   //       const value = Math.trunc(percentage.get());
   //       setScrolledValue(value);
   //    };
   //    const unsubY = percentage.on("change", doSomething);
   //    return () => {
   //       unsubY();
   //    };
   // }, [percentage, refresh]);

   const value: ContextInterface = {
      scrolledValue,
      springMotion,
      refreshScroll,
   };

   return (
      <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
   );
}
