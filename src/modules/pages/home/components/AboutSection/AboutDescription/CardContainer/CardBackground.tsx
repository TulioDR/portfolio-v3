import React from "react";
import { AnimationControls, motion } from "framer-motion";

type Props = {
   animationControls: AnimationControls;
   extraWidth: number;
   right?: true;
   originalWidth: number;
};

export default function CardBackground({
   animationControls,
   extraWidth,
   right,
   originalWidth,
}: Props) {
   return (
      <motion.div
         initial={{ width: "100%" }}
         animate={animationControls}
         transition={{ duration: 0.3 }}
         className={`absolute top-0 h-full flex bg-white overflow-hidden rounded-3xl shadow-xl flex-shrink-0 ${
            right ? "left-0" : "right-0 flex-row-reverse"
         }`}
      >
         <div
            style={{ width: originalWidth }}
            className="h-full flex-shrink-0"
         />
         <div
            style={{ width: extraWidth }}
            className={`h-full py-5  flex-shrink-0 flex flex-col justify-center items-center gap-5 ${
               right ? "pl-2 pr-5" : "pl-5 pr-2"
            }`}
         >
            <h2 className="text-sm md:text-base lg:text-lg xl:text-xl text-black font-bold text-center">
               Hight attention to detail
            </h2>
            <div className="text-xs md:text-sm xl:text-base text-black text-center">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Temporibus veniam sed tenetur tempore alias quis reiciendis
               quibusdam! Recusandae, a delectus!
            </div>
         </div>
      </motion.div>
   );
}
