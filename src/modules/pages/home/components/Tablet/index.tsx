import React, { useState } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import LoadingWork from "./LoadingWork";
import BrightScreen from "./BrightScreen";
import WorkShowcase from "./WorkShowcase";
import WorkScreenInnerContainer from "./WorkScreenInnerContainer";
import TabletContainer from "./TabletContainer";
import useTabletPositionContext from "../../context/TabletPositionContext";

type Props = {};

export default function Tablet({}: Props) {
   const [showWork, setShowWork] = useState<boolean>(false);
   const [showBrightScreen, setShowBrightScreen] = useState<boolean>(true);

   const { scrollYProgress: scroll } = useScroll();

   const { positions } = useTabletPositionContext();
   const { a4, w1, w3 } = positions;

   useMotionValueEvent(scroll, "change", (current) => {
      if (current < a4 || current > w3) {
         if (showBrightScreen) return;
         setShowBrightScreen(true);
      } else {
         if (!showBrightScreen) return;
         setShowBrightScreen(false);
      }
   });
   useMotionValueEvent(scroll, "change", (current) => {
      if (current > w1) {
         if (showWork) return;
         setShowWork(true);
      } else {
         if (!showWork) return;
         setShowWork(false);
      }
   });

   return (
      <TabletContainer scroll={scroll}>
         <AnimatePresence>
            {showBrightScreen && <BrightScreen key="bright" />}
         </AnimatePresence>
         <WorkScreenInnerContainer>
            <AnimatePresence mode="wait">
               {showWork ? (
                  <WorkShowcase key="work" scroll={scroll} />
               ) : (
                  <LoadingWork key="loading" scroll={scroll} />
               )}
            </AnimatePresence>
         </WorkScreenInnerContainer>
      </TabletContainer>
   );
}
