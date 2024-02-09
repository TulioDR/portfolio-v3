import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import MainButton from "../../MainButton";

type Props = {
   scroll: MotionValue<number>;
};

export default function AboutMeButton({ scroll }: Props) {
   const y = useTransform(scroll, [0, 1], ["100%", "0%"]);

   return (
      <div className="h-full w-full flex justify-end items-center">
         <div className="w-[calc(25%+5rem)] grid place-content-center overflow-hidden">
            <motion.div style={{ y }}>
               <MainButton>
                  <div>More</div>
                  <div>about me</div>
               </MainButton>
            </motion.div>
         </div>
      </div>
   );
}
