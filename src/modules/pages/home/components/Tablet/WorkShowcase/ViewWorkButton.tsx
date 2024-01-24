import React, { useState } from "react";
import {
   AnimatePresence,
   MotionValue,
   motion,
   useMotionValueEvent,
} from "framer-motion";

type Props = {
   scroll: MotionValue<number>;
};

export default function ViewWorkButton({ scroll }: Props) {
   // const opacity = useTransform(scroll, [0.8, 0.9], [0, 1]);
   // const scale = useTransform(scroll, [0.8, 0.9], [0.7, 1]);
   // const y= useTransform(scroll, [y]);

   const [showButton, setShowButton] = useState<boolean>(false);

   useMotionValueEvent(scroll, "change", (latest) => {
      if (latest > 0.85) {
         if (showButton) return;
         setShowButton(true);
      } else {
         if (!showButton) return;
         setShowButton(false);
      }
   });
   return (
      <div className="w-1/2 h-full absolute top-0 right-0 flex justify-center items-center z-10">
         <AnimatePresence>
            {showButton && (
               <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                     duration: 0.5,
                     ease: [0.65, 0, 0.076, 1],
                  }}
                  className="rounded-full px-10 bg-orange-800 aspect-square "
               >
                  <div className="text-white text-2xl w-min text-center">
                     View Work
                  </div>
               </motion.button>
            )}
         </AnimatePresence>
      </div>
   );
}
