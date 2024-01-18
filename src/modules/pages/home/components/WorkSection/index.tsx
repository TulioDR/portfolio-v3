import React, { useState } from "react";
import {
   AnimatePresence,
   MotionValue,
   useMotionValueEvent,
} from "framer-motion";
import WorkScreenContainer from "./WorkScreenContainer";
import LoadingWork from "./LoadingWork";
import BrightScreen from "./BrightScreen";
import WorkShowcase from "./WorkShowcase";

type Props = {
   scroll: MotionValue<number>;
};

export default function WorkSection({ scroll }: Props) {
   const [showLoading, setShowLoading] = useState<boolean>(false);
   const [showWork, setShowWork] = useState<boolean>(false);

   useMotionValueEvent(scroll, "change", (latest) => {
      if (latest > 0.5) {
         if (showLoading) return;
         setShowLoading(true);
      } else {
         if (!showLoading) return;
         setShowLoading(false);
      }
   });
   useMotionValueEvent(scroll, "change", (latest) => {
      if (latest > 0.7) {
         if (showWork) return;
         setShowWork(true);
      } else {
         if (!showWork) return;
         setShowWork(false);
      }
   });

   return (
      <div className="z-20 absolute top-0 left-0 w-full h-screen pointer-events-none">
         <div className="w-full h-full relative">
            <WorkScreenContainer scroll={scroll}>
               <AnimatePresence mode="wait">
                  {!showLoading && <BrightScreen key="bright" />}
                  {showLoading && !showWork && (
                     <LoadingWork key="loading" scroll={scroll} />
                  )}
                  {showLoading && showWork && (
                     <WorkShowcase key="work" scroll={scroll} />
                  )}
               </AnimatePresence>
            </WorkScreenContainer>
         </div>
      </div>
   );
}
