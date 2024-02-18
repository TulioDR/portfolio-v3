import { MotionValue, useTransform, motion } from "framer-motion";
import React from "react";

type Props = {
   large?: true;
   scroll: MotionValue<number>;
   initial: number;
   final: number;
};

export default function AboutCard({ large, scroll, initial, final }: Props) {
   const point1 = initial;
   const point2 = initial + (1 * (final - initial)) / 2;
   const point3 = final;

   const y = useTransform(scroll, [point1, point2], ["100%", "0%"]);
   const opacity = useTransform(scroll, [point2, point3], [0, 1]);

   return (
      <div
         className={`w-full rounded flex items-center justify-center shadow-xl bg-primary text-white ${
            large ? "col-span-2" : ""
         }`}
      >
         <div className="p-10">
            <div className="overflow-hidden">
               <motion.div
                  style={{ y }}
                  className="uppercase text-2xl font-semibold"
               >
                  Title
               </motion.div>
            </div>
            <motion.div style={{ opacity }}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
               debitis?.
            </motion.div>
         </div>
      </div>
   );
}
