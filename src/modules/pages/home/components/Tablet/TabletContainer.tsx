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
   const { a1, a2, a3, a4, w1, w3, c1 } = positions!;
   const width = useTransform(
      scroll,
      [a4, w1, w3, c1],
      [
         "calc(25% + 3.7rem)",
         "calc(40% + 0rem)",
         "calc(40% + 0rem)",
         "calc(40% + 0rem)",
      ]
   );

   const right = useTransform(
      scroll,
      [a2, a3, a4, w1, w3, c1],
      ["50%", "0%", "0%", "98%", "98%", "25%"]
   );
   const x = useTransform(
      scroll,
      [a2, a3, a4, w1, w3, c1],
      ["50%", "0%", "0%", "99%", "99%", "50%"]
   );

   const top = useTransform(
      scroll,
      [a4, w1, w3, c1],
      ["50%", "100%", "100%", "50%"]
   );
   const y = useTransform(
      scroll,
      [a4, w1, w3, c1],
      ["-50%", "-100%", "-100%", "-50%"]
   );

   const rotateX = useTransform(scroll, [a4, w1, w3, c1], [45, 0, 0, 45]);
   // const rotateY = useTransform(scroll, [a4, w1, w3, c1], [0, 30, 30, 0]);
   const rotateZ = useTransform(scroll, [a4, w1, w3, c1], [43, 0, 0, 43]);

   // const perspective = useTransform(
   //    scroll,
   //    [a4, w1, w3, c1],
   //    [7000, 2000, 2000, 7000]
   // );

   const s1 = useTransform(scroll, [a4, w1, w3, c1], [2, -2, -2, 2]);
   const s2 = useTransform(scroll, [a4, w1, w3, c1], [2, 0, 0, 2]);
   const boxShadow = useMotionTemplate`${s1}px ${s2}px 0 ${s2}px white`;

   const opacity = useTransform(scroll, [a1, a2], [0, 1]);
   const brightness = useTransform(scroll, [a1, a2], [0, 1]);
   const filter = useMotionTemplate`brightness(${brightness})`;

   return (
      <div className="z-10 fixed top-0 left-0 w-full h-screen pointer-events-none pt-20 pb-10 px-20">
         <motion.div
            style={{ perspective: "none" }}
            className="w-full h-full relative"
         >
            <motion.div
               style={{
                  rotateX,
                  // rotateY,
                  rotateZ,
                  width,
                  top,
                  y,
                  right,
                  x,
                  boxShadow,
                  opacity,
                  filter,
               }}
               className="absolute aspect-video rounded-lg"
            >
               {children}
            </motion.div>
         </motion.div>
      </div>
   );
}
