import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   showMessage: boolean;
};

export default function ClockMessage({ showMessage }: Props) {
   return (
      <AnimatePresence>
         {showMessage && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute z-50 top-0 left-0 w-full h-full bg-white rounded-full border-accent border-8"
            >
               <div className="w-full h-full flex flex-col text-center justify-center items-center font-semibold uppercase text-black text-xl">
                  <div>Good time</div>
                  <div>management</div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
