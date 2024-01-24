"use client";

import {
   useMotionValueEvent,
   useScroll,
   motion,
   AnimatePresence,
} from "framer-motion";
import HomeTitle from "./HomeTitle";
import { useEffect, useState } from "react";
import HomeLogo from "./HomeLogo";

export default function HomeSection() {
   const { scrollY } = useScroll();

   const [showOnTop, setShowOnTop] = useState<boolean>(false);
   const [showBottom, setShowBottom] = useState<boolean>(false);

   useMotionValueEvent(scrollY, "change", (latest) => {
      if (latest === 0) setShowOnTop(false);
      else setShowOnTop(true);
   });

   useEffect(() => {
      setShowBottom(showOnTop);
   }, [showOnTop]);

   return (
      <div className="h-screen w-full overflow-hidden bg-gradient-to-b from-[#141B25] via-[#141B25] to-primary">
         <div className="h-full w-full relative text-white flex flex-col items-center justify-center">
            <div className="flex items-center">
               <div className="text-[10vw] uppercase">Tulio Ruzo</div>
            </div>
            <div className="text-[1.5vw] uppercase tracking-widest">
               SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.
            </div>
         </div>
      </div>
   );
}
