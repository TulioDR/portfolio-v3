import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
   openFilter: () => void;
   closeFilter: () => void;
   isFilterOpen: boolean;
};

export default function ToggleFilterButton({
   openFilter,
   closeFilter,
   isFilterOpen,
}: Props) {
   return (
      <div className="aspect-square h-full">
         <div className="border border-white overflow-hidden rounded-full h-full bg-black w-full text-white hover:text-white/50">
            <AnimatePresence mode="wait">
               {isFilterOpen ? (
                  <motion.button
                     key="close"
                     onClick={closeFilter}
                     initial={{ y: "-100%" }}
                     animate={{ y: 0 }}
                     exit={{ y: "-100%" }}
                     transition={{ type: "spring", duration: 0.6 }}
                     className="grid place-content-center w-full h-full"
                  >
                     <span className="material-icons">close</span>
                  </motion.button>
               ) : (
                  <motion.button
                     key="open"
                     onClick={openFilter}
                     initial={{ y: "100%" }}
                     animate={{ y: 0 }}
                     exit={{ y: "100%" }}
                     transition={{ type: "spring", duration: 0.6 }}
                     className="grid place-content-center w-full h-full"
                  >
                     <span className="material-icons">filter_alt</span>
                  </motion.button>
               )}
            </AnimatePresence>
         </div>
      </div>
   );
}
