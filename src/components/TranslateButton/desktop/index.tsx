import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SwitchLanBtn from "./SwitchLanBtn";
import TranslateIcon from "./TranslateIcon";

export default function TranslateButtonDesktop() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const handleHoverStart = () => setIsOpen(true);
   const handleHOverEnd = () => setIsOpen(false);

   return (
      <motion.div
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHOverEnd}
         className={`h-14 duration-200 flex justify-center rounded-full overflow-hidden bg-main-orange text-white ${
            isOpen ? "w-56" : "w-14"
         }`}
      >
         <AnimatePresence mode="wait">
            {isOpen ? (
               <SwitchLanBtn key="switch" />
            ) : (
               <TranslateIcon key="icon" />
            )}
         </AnimatePresence>
      </motion.div>
   );
}
