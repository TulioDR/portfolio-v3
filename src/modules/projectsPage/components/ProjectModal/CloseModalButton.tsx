import React from "react";
import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
};

export default function CloseModalButton({ onClick }: Props) {
   return (
      <motion.button
         whileHover={{ scale: 1.1 }}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, transition: { duration: 0.4 } }}
         exit={{ opacity: 0, transition: { duration: 0.4 } }}
         onClick={onClick}
         className="absolute top-5 right-5 md:top-10 md:right-10 z-20"
      >
         <span className="material-icons !text-3xl md:!text-5xl !text-white">
            close
         </span>
      </motion.button>
   );
}
