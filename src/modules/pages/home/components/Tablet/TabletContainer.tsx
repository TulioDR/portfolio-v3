import React from "react";
import {
   MotionValue,
   motion,
   useMotionTemplate,
   useTransform,
} from "framer-motion";
type Props = {
   children: React.ReactNode;
   firstScroll: MotionValue<number>;
   secondScroll: MotionValue<number>;
};

export default function TabletContainer({
   children,
   firstScroll,
   secondScroll,
}: Props) {
   const top = useTransform(firstScroll, [0, 1], ["100%", "50%"]);
   const y = useTransform(firstScroll, [0, 1], ["-50%", "-50%"]);
   const left = useTransform(secondScroll, [0, 1], ["50%", "75%"]);

   // const s1 = useTransform(scroll, [a4, w1, w3, c1], [2, -2, -2, 2]);
   // const s2 = useTransform(scroll, [a4, w1, w3, c1], [2, 0, 0, 2]);
   // const boxShadow = useMotionTemplate`${s1}px ${s2}px 0 ${s2}px white`;

   // const opacity = useTransform(scroll, [0, 1], [0, 1]);
   // const brightness = useTransform(scroll, [0, 1], [0, 1]);
   // const filter = useMotionTemplate`brightness(${brightness})`;

   return (
      <motion.div
         style={{
            rotateX: 45,
            rotateZ: 43,
            top,
            y,
            left,
            x: "-50%",
            boxShadow: "2px 2px 0 2px white",
         }}
         className="absolute aspect-[2/3] rounded-lg w-1/4 bg-accent"
      >
         {children}
      </motion.div>
   );
}
