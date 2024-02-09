import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import useTabletPositionContext from "../../context/TabletPositionContext";

type Props = {
   scroll: MotionValue<number>;
};

export default function LoadingWork({ scroll }: Props) {
   const { positions } = useTabletPositionContext();
   const { a4, w1 } = positions;

   const width = useTransform(scroll, [a4, w1], ["0%", "100%"]);

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="h-full w-full flex items-center justify-center"
      >
         <div className="space-y-[5%] w-[90%] h-[90%] flex flex-col items-center justify-center ">
            <div className="h-[8%] w-full">
               <motion.div style={{ width }} className="bg-white h-full" />
            </div>
            <div className="text-white">Loading work...</div>
         </div>
      </motion.div>
   );
}
