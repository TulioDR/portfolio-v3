import React from "react";
import {
   MotionValue,
   motion,
   useMotionTemplate,
   useTransform,
} from "framer-motion";
import useTabletPositionContext from "../../context/TabletPositionContext";
type Props = {
   children: React.ReactNode;
   scroll: MotionValue<number>;
};

export default function TabletContainer({ children, scroll }: Props) {
   const { positions } = useTabletPositionContext();
   const { h1, a1, a2, a3, w1, w2, w3, c1 } = positions;
   const width = useTransform(
      scroll,
      [a3, w1, w3, c1],
      [
         "calc(25% + 40px)",
         "calc(50% + 0px)",
         "calc(50% + 0px)",
         "calc(40% + 0px)",
      ]
   );

   const top = useTransform(
      scroll,
      [h1, a1, a3, w1, w3, c1],
      ["100%", "50%", "50%", "0%", "0%", "50%"]
   );
   const y = useTransform(
      scroll,
      [h1, a1, a3, w1, w3, c1],
      ["0%", "-50%", "-50%", "0%", "0%", "-50%"]
   );

   const right = useTransform(
      scroll,
      [a1, a2, a3, w1, w3, c1],
      ["50%", "0%", "0%", "50%", "50%", "25%"]
   );
   const x = useTransform(
      scroll,
      [a1, a2, a3, w1, w3, c1],
      ["50%", "0%", "0%", "50%", "50%", "50%"]
   );

   const rotateX = useTransform(scroll, [a3, w1, w3, c1], [45, 0, 0, 45]);
   const rotateZ = useTransform(scroll, [a3, w1, w3, c1], [43, 0, 0, 43]);

   const s = useTransform(scroll, [a3, w1, w3, c1], [2, 0, 0, 2]);
   const boxShadow = useMotionTemplate`${s}px ${s}px 0 ${s}px white`;

   return (
      <div className="z-20 fixed top-0 left-0 w-full h-screen pointer-events-none px-20 pb-10 pt-20">
         <div className="w-full h-full relative">
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
               }}
               className="absolute aspect-video rounded-2xl"
            >
               {children}
            </motion.div>
         </div>
      </div>
   );
}
