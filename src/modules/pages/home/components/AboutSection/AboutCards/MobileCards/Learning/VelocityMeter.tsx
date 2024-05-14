import React from "react";
import { MotionValue, motion, useTransform, useVelocity } from "framer-motion";

type Props = {
   smoothY: MotionValue<number>;
};

export default function VelocityMeter({ smoothY }: Props) {
   const velocity = useVelocity(smoothY);

   const rotate = useTransform(
      velocity,
      [-6000, 0, 6000],
      ["180deg", "0deg", "180deg"]
   );

   const velocityMarks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

   return (
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 z-10 aspect-[2/1] overflow-hidden bg-white rounded-t-[9999px]">
         <div className="w-full h-full flex items-end">
            <motion.div
               style={{ rotate, clipPath: "polygon(0 50%, 100% 100%, 100% 0)" }}
               className="h-1 w-1/2 bg-black origin-right flex justify-end"
            />
         </div>
         <div className="absolute top-0 left-0 w-full h-full z-10">
            {velocityMarks.map((mark) => (
               <div
                  key={mark}
                  style={{ rotate: `${(180 / 6) * mark}deg` }}
                  className="absolute top-0 left-0 w-full h-full flex justify-center p-0.5 origin-bottom"
               >
                  <div className="h-[15%] w-0.5 bg-black" />
               </div>
            ))}
         </div>
         <div className="absolute left-1/2 -translate-x-1/2 rounded-full w-3 aspect-square bottom-0 translate-y-1/2 bg-accent" />
      </div>
   );
}
