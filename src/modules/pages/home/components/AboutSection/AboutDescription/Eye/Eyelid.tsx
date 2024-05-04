import React from "react";
import { AnimationControls, motion } from "framer-motion";

type Props = {
   animateControls: AnimationControls;
};

export default function Eyelid({ animateControls }: Props) {
   return (
      <motion.div
         animate={animateControls}
         className="h-1/2 w-full bg-white z-10"
      />
   );
}
