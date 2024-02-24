import React, { useEffect, useState } from "react";
import MouseIcon from "./MouseIcon";
import BarIndicator from "./BarIndicator";
import {
   AnimatePresence,
   MotionValue,
   useMotionValueEvent,
} from "framer-motion";

type Props = {
   scroll: MotionValue<number>;
   alwaysShow?: true;
};

export default function ScrollIndicator({ scroll, alwaysShow }: Props) {
   const [showIndicator, setShowIndicator] = useState<boolean>(false);

   useEffect(() => {
      if (alwaysShow) setShowIndicator(true);
   }, [alwaysShow]);

   useMotionValueEvent(scroll, "change", (current) => {
      if (alwaysShow) return;

      if (current <= 0) setShowIndicator(false);
      else setShowIndicator(true);
   });
   return (
      <div className="lg:w-48 xl:w-60 2xl:w-80">
         <AnimatePresence>
            {showIndicator && (
               <div className="w-full flex flex-col items-center gap-5">
                  <MouseIcon />
                  <BarIndicator scroll={scroll} />
               </div>
            )}
         </AnimatePresence>
      </div>
   );
}
