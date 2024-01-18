import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface Props {
   yProgress: MotionValue<any>;
}
export default function OpenWorkButton({ yProgress }: Props) {
   const top = useTransform(yProgress, [0, 1], ["0%", "100%"]);
   const y = useTransform(yProgress, [0, 1], ["0%", "-100%"]);

   return (
      <motion.div
         style={{ top, y }}
         className="absolute shadow-lg right-40 rounded-full aspect-square w-36 bg-gradient-to-br from-orange-900 to-orange-700 grid place-content-center"
      >
         <span className="w-min text-white text-xl uppercase text-center">
            View Work
         </span>
      </motion.div>
   );
}
