import { AnimationControls, motion } from "framer-motion";
import React from "react";

type Props = {
   front?: boolean;
   animationControls: AnimationControls;
};

export default function ExpertiseCard({ front, animationControls }: Props) {
   return (
      <div
         className={`aspect-[2/3] w-1/2 ${
            front
               ? "-rotate-6 -translate-x-1/4 -translate-y-[2%]"
               : "rotate-6 translate-x-1/4 translate-y-[2%]"
         }`}
      >
         <motion.div
            animate={animationControls}
            className={`w-full h-full rounded-xl pointer-events-auto ${
               front ? "bg-blue-400 " : "bg-white"
            }`}
         ></motion.div>
      </div>
   );
}
