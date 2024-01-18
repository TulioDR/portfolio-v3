import React from "react";
import {
   MotionValue,
   motion,
   useMotionTemplate,
   useTransform,
} from "framer-motion";
type Props = {
   children: React.ReactNode;
   scroll: MotionValue<number>;
};

export default function WorkScreenContainer({ children, scroll }: Props) {
   const width = useTransform(scroll, [0.7, 0.9], ["25%", "100%"]);

   const top = useTransform(scroll, [0, 0.25], ["100%", "50%"]);
   const y = useTransform(
      scroll,
      [0, 0.25, 0.5, 0.7],
      ["0%", "-50%", "0%", "-50%"]
   );

   const right = useTransform(
      scroll,
      [0.25, 0.5, 0.7, 0.9],
      [
         "calc(50% + 0px)",
         "calc(0% + 80px)",
         "calc(0% + 80px)",
         "calc(50% + 0px)",
      ]
   );
   const x = useTransform(
      scroll,
      [0.25, 0.5, 0.7, 0.9],
      ["50%", "0%", "0%", "50%"]
   );

   const rotateX = useTransform(scroll, [0.7, 0.85], [45, 0]);
   const rotateZ = useTransform(scroll, [0.7, 0.85], [43, 0]);

   const s = useTransform(scroll, [0.7, 0.85], [2, 0]);
   const boxShadow = useMotionTemplate`${s}px ${s}px 0 ${s}px white`;

   const innerHeight = useTransform(scroll, [0.9, 1], ["95%", "100%"]);
   const innerWidth = useTransform(scroll, [0.9, 1], ["95%", "100%"]);

   return (
      <motion.div
         style={{
            rotateX,
            rotateZ,
            width,
            top,
            right,
            x,
            y,
            boxShadow,
            transformStyle: "preserve-3d",
         }}
         className="cursor-pointer absolute z-20 bg-orange-700 aspect-video rounded-2xl flex items-center justify-center"
      >
         <motion.div
            style={{ width: innerWidth, height: innerHeight }}
            className="relative bg-black rounded-2xl"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
