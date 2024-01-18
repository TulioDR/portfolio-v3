import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";

type Props = {
   scroll: MotionValue<number>;
};

export default function LoadingWork({ scroll }: Props) {
   const width = useTransform(scroll, [0.5, 0.7], ["0%", "100%"]);

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="h-full w-full flex flex-col items-center justify-center gap-4 p-4"
      >
         <div className="h-5 w-full">
            <motion.div style={{ width }} className="bg-white h-full" />
         </div>
         <div className="text-white">Loading...</div>
      </motion.div>
   );
}
