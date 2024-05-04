import React from "react";
import { AnimationControls, MotionValue, motion } from "framer-motion";

type Props = {
   animationControls: AnimationControls;
   pathLength: MotionValue<number>;
};

export default function ClockContainer({
   animationControls,
   pathLength,
}: Props) {
   return (
      <svg className="w-full h-full -rotate-90 p-[2px] overflow-visible relative">
         <motion.circle
            r="50%"
            cx="50%"
            cy="50%"
            className="stroke-accent fill-white stroke-[4px] relative"
            animate={animationControls}
            style={{ pathLength }}
         />
      </svg>
   );
}
