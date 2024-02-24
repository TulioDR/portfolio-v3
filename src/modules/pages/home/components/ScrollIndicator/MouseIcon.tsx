import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function MouseIcon({}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
         className="w-7 h-12 pt-3 rounded-xl flex flex-col items-center border border-white"
      >
         <div className="w-[3px] h-4 bg-white rounded-full animate-bounce" />
      </motion.div>
   );
}
