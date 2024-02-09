import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";

type Props = {
   scroll: MotionValue<number>;
};

export default function BarIndicator({ scroll }: Props) {
   const width = useTransform(scroll, [0, 1], ["0%", "100%"]);
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={{ width: "100%" }}
         exit={{ width: 0 }}
         transition={{ duration: 0.5 }}
         className="h-0.5 bg-gray-700 flex justify-center items-center rounded-full"
      >
         <motion.div style={{ width }} className="rounded-full bg-white h-1" />
      </motion.div>
   );
}
