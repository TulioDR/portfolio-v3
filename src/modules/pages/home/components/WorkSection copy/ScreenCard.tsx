import React, { useState } from "react";
import {
   AnimatePresence,
   MotionValue,
   motion,
   useMotionValueEvent,
   useTransform,
} from "framer-motion";

type Props = {
   scroll: MotionValue<number>;
};

export default function ScreenCard({ scroll }: Props) {
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

   const [showWork, setShowWork] = useState<boolean>(false);

   useMotionValueEvent(scroll, "change", (latest) => {
      if (latest > 0.5) {
         if (showWork) return;
         console.log("turn off");
         setShowWork(true);
      } else {
         if (!showWork) return;
         console.log("turn on");
         setShowWork(false);
      }
   });

   return (
      <div className="z-20 absolute top-0 left-0 w-full h-screen">
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
                  transformStyle: "preserve-3d",
               }}
               className="cursor-pointer absolute z-20 bg-orange-700 aspect-video rounded-2xl flex items-center justify-center"
            >
               <div className="w-[95%] h-[95%] relative">
                  <div
                     key="one"
                     className="text-center uppercase font-semibold text-4xl w-full h-full flex items-center justify-center bg-black text-white rounded-2xl"
                  >
                     Work
                  </div>
                  <AnimatePresence>
                     {!showWork && (
                        <motion.div
                           key="two"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.4 }}
                           style={{ boxShadow: "0px 0px 30px 0px #fff" }}
                           className="w-full h-full bg-white rounded-2xl absolute top-0 left-0"
                        />
                     )}
                  </AnimatePresence>
               </div>
            </motion.div>
         </div>
      </div>
   );
}
