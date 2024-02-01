import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

type Props = {
   initial: number;
   final: number;
   number: string;
};

export default function Bar({ initial, final, number }: Props) {
   const { scrollYProgress } = useScroll();
   const height = useTransform(
      scrollYProgress,
      [initial, final],
      ["0%", "100%"]
   );
   return (
      <div className="flex-1 flex flex-col items-center gap-2">
         <div className="text-white text-sm font-light uppercase">{number}</div>
         <div className="flex-1 w-0.5 bg-gray-600 flex flex-col items-center rounded-full">
            <motion.div
               style={{ height }}
               className="w-1.5 bg-white rounded-full"
            />
         </div>
      </div>
   );
}
