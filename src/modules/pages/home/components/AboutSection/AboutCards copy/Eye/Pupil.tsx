import React from "react";
import {
   AnimationControls,
   MotionValue,
   motion,
   useTransform,
} from "framer-motion";

type Props = {
   distanceFromCenter: MotionValue<number>;
   pupilControls: AnimationControls;
   rotateReverse: MotionValue<number>;
   rotate: MotionValue<number>;
};

export default function Pupil({
   distanceFromCenter,
   pupilControls,
   rotate,
   rotateReverse,
}: Props) {
   const x = useTransform(distanceFromCenter, [0, 1], ["-50%", "-100%"]);
   const left = useTransform(distanceFromCenter, [0, 1], ["50%", "100%"]);

   return (
      <div className="w-1/2 aspect-square">
         <motion.div
            style={{ rotate }}
            className="aspect-square h-full relative"
         >
            <motion.div
               style={{ top: "50%", y: "-50%", x, left, rotate: rotateReverse }}
               className="aspect-square absolute w-2/3 flex justify-center"
            >
               <motion.div
                  layout
                  initial={{
                     borderRadius: 12,
                  }}
                  animate={pupilControls}
                  className="w-full bg-accent"
               />
            </motion.div>
         </motion.div>
      </div>
   );
}
