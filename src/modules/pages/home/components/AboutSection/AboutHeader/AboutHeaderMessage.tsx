import { MotionValue, useMotionValueEvent, motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
   scroll: MotionValue<number>;
};

export default function AboutHeaderMessage({ scroll }: Props) {
   const [showMessage, setShowMessage] = useState<boolean>(false);

   useMotionValueEvent(scroll, "change", (current) => {
      if (current >= 1) setShowMessage(true);
      else setShowMessage(false);
   });
   return (
      <motion.div
         animate={{ opacity: showMessage ? 1 : 0 }}
         transition={{ duration: 0.2 }}
         className="text-xs sm:text-sm flex justify-center items-center absolute bottom-12 2xl:bottom-24 left-0 w-full"
      >
         <div>You can press the button</div>
         <button className="aspect-square w-10 mx-1 rounded-full bg-gray-400 inline-block hover:bg-accent text-white">
            <span className="material-symbols-outlined !text-2xl">
               chevron_left
            </span>
         </button>
         <div>to expand the cards below</div>
      </motion.div>
   );
}
