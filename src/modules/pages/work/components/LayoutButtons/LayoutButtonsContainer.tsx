import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function LayoutButtonsContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0, y: "100%" }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: "100%" }}
         transition={{ duration: 0.4 }}
         className="w-full h-full pt-14 flex flex-col gap-2 items-center justify-center pointer-events-auto bg-primary/50"
      >
         {children}
      </motion.div>
   );
}
