import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function WorkSelectorTitle({}: Props) {
   return (
      <div className="overflow-hidden uppercase mb-5">
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5 }}
         >
            Selected Work
         </motion.div>
      </div>
   );
}
