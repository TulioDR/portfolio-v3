import React from "react";
import { MotionValue, motion, useSpring, useTransform } from "framer-motion";

type Props = {
   xPercentage: MotionValue<number>;
   x: MotionValue<number>;
   y: MotionValue<number>;
   isCardOn: boolean;
};

export default function Wand({ xPercentage, x, y, isCardOn }: Props) {
   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothX = useSpring(x, smoothOptions);
   const smoothY = useSpring(y, smoothOptions);

   const rotateZ = useTransform(xPercentage, [0, 1], [-10, 10]);
   return (
      <motion.div
         style={{ x: "-50%", top: smoothY, left: smoothX, rotateZ }}
         className="absolute aspect-[1/10] w-12 flex flex-col z-30 rounded-2xl overflow-hidden"
      >
         <div
            className={`w-full h-1/5 duration-500 bg-accent ${
               isCardOn ? "brightness-100" : "brightness-50"
            }`}
         />
         <div className="flex-1 w-full bg-white" />
      </motion.div>
   );
}
