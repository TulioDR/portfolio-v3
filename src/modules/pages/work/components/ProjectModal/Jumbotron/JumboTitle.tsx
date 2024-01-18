import { motion, AnimationControls } from "framer-motion";
import React from "react";

type Props = {
   children: React.ReactNode;
   animationControls: AnimationControls;
};

export default function JumboTitle({ children, animationControls }: Props) {
   return (
      <div className="overflow-hidden">
         <motion.div
            initial={{ y: "100%" }}
            animate={animationControls}
            className="min-w-max text-center text-lg sm:text-xl md:text-2xl text-white font-semibold"
         >
            {children}
         </motion.div>
      </div>
   );
}
