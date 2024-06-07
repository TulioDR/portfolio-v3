import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   isOpen: boolean;
};

export default function GradientBackground({ isOpen }: Props) {
   return (
      <motion.div
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="w-screen h-[50vh]"
      >
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full bg-gradient-to-t from-black/80 to-transparent"
               />
            )}
         </AnimatePresence>
      </motion.div>
   );
}
