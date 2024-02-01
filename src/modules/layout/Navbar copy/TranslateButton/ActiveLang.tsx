import React from "react";
import { motion } from "framer-motion";
type Props = {
   isActive: boolean;
   children: React.ReactNode;
};

export default function ActiveLang({ isActive, children }: Props) {
   return (
      <div
         className={`absolute top-0 left-0 h-full w-full flex ${
            isActive ? "justify-start" : "justify-end"
         }`}
      >
         <motion.div
            layout
            transition={{ type: "spring", duration: 0.6 }}
            className={`h-full w-10 overflow-hidden rounded-lg bg-orange-700 flex ${
               isActive ? "justify-start" : "justify-end"
            }`}
         >
            <motion.div
               layout
               transition={{ type: "spring", duration: 0.6 }}
               className="h-full min-w-[96px] flex justify-between items-center text-white"
            >
               {children}
            </motion.div>
         </motion.div>
      </div>
   );
}
