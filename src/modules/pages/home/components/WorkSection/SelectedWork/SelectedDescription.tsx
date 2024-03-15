import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function SelectedDescription({ children }: Props) {
   return (
      <motion.span
         initial={{ opacity: 0, x: "-15%" }}
         animate={{
            opacity: 1,
            x: "0%",
            transition: { duration: 0.3, ease: "easeOut" },
         }}
         exit={{ opacity: 0, x: "-15%", transition: { duration: 0.1 } }}
         className="text-white text-lg max-w-[50%] text-center"
      >
         {children}
      </motion.span>
   );
}
