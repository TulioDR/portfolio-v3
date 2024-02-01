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
   const { h2, a1, a2, a3, w1, w3, c1 } = positions;
   const width = useTransform(
      scroll,
      [a3, w1, w3, c1],
      [
         "calc(25% + 5rem)",
         "calc(50% + 0rem)",
         "calc(50% + 0rem)",
         "calc(40% + 0rem)",
      ]
   );

   const top = useTransform(
      scroll,
      [h2, a1, a3, w1, w3, c1],
      ["100%", "50%", "50%", "50%", "50%", "50%"]
   );
   const y = useTransform(
      scroll,
      [h2, a1, a3, w1, w3, c1],
      ["0%", "-50%", "-50%", "-50%", "-50%", "-50%"]
   );

   const right = useTransform(
      scroll,
      [a1, a2, a3, w1, w3, c1],
      ["50%", "0%", "0%", "97%", "97%", "25%"]
   );
   const x = useTransform(
      scroll,
      [a1, a2, a3, w1, w3, c1],
      ["50%", "0%", "0%", "99%", "99%", "50%"]
   );

   const rotateX = useTransform(scroll, [a3, w1, w3, c1], [45, 0, 0, 45]);
   const rotateY = useTransform(scroll, [a3, w1, w3, c1], [0, 30, 30, 0]);
   const rotateZ = useTransform(scroll, [a3, w1, w3, c1], [43, 0, 0, 43]);

   const perspective = useTransform(
      scroll,
      [a3, w1, w3, c1],
      [7000, 2000, 2000, 7000]
   );

   const s1 = useTransform(scroll, [a3, w1, w3, c1], [2, -2, -2, 2]);
   const s2 = useTransform(scroll, [a3, w1, w3, c1], [2, 0, 0, 2]);
   const boxShadow = useMotionTemplate`${s1}px ${s2}px 0 ${s2}px white`;

   return (
      <div className="z-10 fixed top-0 left-0 w-full h-screen pointer-events-none py-20 px-40">
         <motion.div
            style={{ perspective: perspective }}
            className="w-full h-full relative"
         >
            <motion.div
               style={{
                  rotateX,
                  rotateY,
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
         </motion.div>
      </div>
   );
}
