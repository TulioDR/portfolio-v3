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
      <div className=" h-screen w-full overflow-hidden">
         <div className="h-full w-full relative text-white flex flex-col items-center justify-center">
            <div className="text-9xl font-light">
               <div>Tulio</div>
               <div>Ruzo</div>
            </div>
            <div className="text-lg">Software Developer</div>
         </div>
      </div>
   );
}
