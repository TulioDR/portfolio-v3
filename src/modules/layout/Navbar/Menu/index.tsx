import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
   open: boolean;
   closeMenu: () => void;
};

export default function Menu({ open, closeMenu }: Props) {
   return (
      <AnimatePresence>
         {open && (
            <motion.div
               initial={{ height: "0%" }}
               animate={{ height: "100%" }}
               exit={{ height: "0%" }}
               transition={{ duration: 0.3 }}
               onClick={closeMenu}
               className="w-full absolute bottom-full left-0 bg-black rounded-t-xl px-2"
            >
               <div className="w-full h-full border-b border-white"></div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
