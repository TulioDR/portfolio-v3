import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";

type Props = {
   children: React.ReactNode;
   firstScroll: MotionValue<number>;
   secondScroll: MotionValue<number>;
};

export default function HeaderCardContainer({
   children,
   firstScroll,
   secondScroll,
}: Props) {
   const top = useTransform(firstScroll, [0, 1], ["100%", "50%"]);
   const y = useTransform(firstScroll, [0, 1], ["-50%", "-50%"]);
   const left = useTransform(secondScroll, [0, 1], ["50%", "75%"]);
   return (
      <motion.div
         style={{ rotateX: 40, rotateZ: 30, top, y, left, x: "-50%" }}
         initial={{ boxShadow: "2px 2px 0 2px white" }}
         className="absolute aspect-[2/3] rounded-lg w-1/5"
      >
         {children}
      </motion.div>
   );
}
