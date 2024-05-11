import React, { useState } from "react";
import HeaderCardContainer from "./HeaderCardContainer";
import {
   AnimatePresence,
   MotionValue,
   useMotionValueEvent,
} from "framer-motion";
import BrightScreen from "./BrightScreen";

type Props = {
   firstScroll: MotionValue<number>;
   secondScroll: MotionValue<number>;
};

export default function HeaderCard({ firstScroll, secondScroll }: Props) {
   const [showBright, setShowBright] = useState<boolean>(true);

   useMotionValueEvent(firstScroll, "change", (current) => {
      if (current >= 1) setShowBright(false);
      else setShowBright(true);
   });

   return (
      <HeaderCardContainer
         firstScroll={firstScroll}
         secondScroll={secondScroll}
      >
         <AnimatePresence>{showBright && <BrightScreen />}</AnimatePresence>
         <div className="w-full h-full border-8 border-accent rounded-lg"></div>
      </HeaderCardContainer>
   );
}
