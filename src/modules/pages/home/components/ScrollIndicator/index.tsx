import React, { useState } from "react";
import MouseIcon from "./MouseIcon";
import BarIndicator from "./BarIndicator";
import {
   AnimatePresence,
   MotionValue,
   useMotionValueEvent,
} from "framer-motion";

type Props = {
   scroll: MotionValue<number>;
};

export default function ScrollIndicator({ scroll }: Props) {
   const [showIndicator, setShowIndicator] = useState<boolean>(false);

   useMotionValueEvent(scroll, "change", (current) => {
      if (current <= 0) setShowIndicator(false);
      else setShowIndicator(true);
   });
   return (
      <AnimatePresence>
         {showIndicator && (
            <div className="w-full flex flex-col items-center gap-5">
               <MouseIcon />
               <BarIndicator scroll={scroll} />
            </div>
         )}
      </AnimatePresence>
   );
}
