import { motion, AnimationControls } from "framer-motion";
import React from "react";

type Props = {
   animationControls: AnimationControls;
};

export default function JumboBackground({ animationControls }: Props) {
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={animationControls}
         className="absolute h-full top-0 left-0 bg-gradient-to-br from-orange-800 to-orange-600"
      />
   );
}
