import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import MainButton from "../../MainButton";

type Props = {
   scroll: MotionValue<number>;
};

export default function AboutMeButton({ scroll }: Props) {
   const top = useTransform(scroll, [0, 1], ["0%", "50%"]);
   const y = useTransform(scroll, [0, 1], ["0%", "-50%"]);

   return (
      <div className="h-full w-full px-40">
         <div className="relative h-full w-full">
            <motion.div
               style={{ top, y }}
               className="absolute right-0 grid place-content-center w-[calc(25%+5rem)]"
            >
               <MainButton light>About Me</MainButton>
            </motion.div>
         </div>
      </div>
   );
}
