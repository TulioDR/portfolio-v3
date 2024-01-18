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
         className="fixed bottom-0 left-0 pb-5 w-full flex justify-center z-10 pointer-events-none"
      >
         <div className="flex gap-5">{children}</div>
      </motion.div>
   );
}
