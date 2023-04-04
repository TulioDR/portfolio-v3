import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = { isError: boolean };

export default function InputError({ isError }: Props) {
   return (
      <AnimatePresence>
         {isError && (
            <motion.div
               initial={{ height: 0, marginTop: 0 }}
               animate={{ height: 16, marginTop: 8 }}
               exit={{ height: 0, marginTop: 0 }}
               transition={{ duration: 0.4 }}
               className="w-full bg-red-800"
            ></motion.div>
         )}
      </AnimatePresence>
   );
}
