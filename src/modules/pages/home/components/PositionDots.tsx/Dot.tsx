import React from "react";
import {
   AnimatePresence,
   motion,
   useScroll,
   useTransform,
} from "framer-motion";

type Props = {
   initial: number;
   final: number;
   active: boolean;
};

export default function Dot({ initial, final, active }: Props) {
   const { scrollYProgress } = useScroll();
   const pathLength = useTransform(scrollYProgress, [initial, final], [0, 1]);

   return (
      <div className="relative w-10 aspect-square flex items-center justify-center">
         <div
            className={`aspect-square rounded-full w-2 duration-500 ${
               active ? "bg-white" : "bg-gray-500"
            } `}
         />
         <AnimatePresence>
            {active && (
               <svg className="absolute top-0 left-0 w-full h-full">
                  {/* <motion.circle
                     cx="50%"
                     cy="50%"
                     r="18"
                     className="stroke-gray-500 fill-none stroke-[2px]"
                     initial={{ pathLength: 0, rotateZ: -90 }}
                     animate={{ pathLength: 1 }}
                     exit={{ pathLength: 0, rotateY: 180 }}
                     transition={{
                        pathLength: { duration: 1 },
                        rotateY: { duration: 0 },
                     }}
                  /> */}
                  <motion.circle
                     cx="50%"
                     cy="50%"
                     r="18"
                     className="stroke-white fill-none stroke-[2px] "
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.5 }}
                     style={{ pathLength, rotateZ: -90 }}
                  />
               </svg>
            )}
         </AnimatePresence>
      </div>
   );
}
