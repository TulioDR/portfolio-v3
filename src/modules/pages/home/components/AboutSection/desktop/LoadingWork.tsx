import React, { useState } from "react";
import {
   AnimatePresence,
   MotionValue,
   motion,
   useMotionValueEvent,
   useTransform,
} from "framer-motion";
import WorkSection from "../../WorkSection";

type Props = {
   scroll: MotionValue<number>;
};

export default function LoadingWork({ scroll }: Props) {
   const width = useTransform(
      scroll,
      [0, 1],
      ["calc(33% - 3.89rem)", "calc(100% - 0rem)"]
   );
   const height = useTransform(
      scroll,
      [0, 1],
      ["calc(50% - 4.4rem)", "calc(100% - 0rem)"]
   );
   const borderRadius = useTransform(scroll, [0, 1], [4, 0]);
   const marginBottom = useTransform(scroll, [0, 1], [40, 0]);

   const loadingWidth = useTransform(scroll, [0, 1], ["0%", "100%"]);

   const [showLoading, setShowLoading] = useState<boolean>(false);
   const [showWork, setShowWork] = useState<boolean>(false);

   useMotionValueEvent(scroll, "change", (current) => {
      if (current <= 0) {
         setShowLoading(false);
      } else if (current >= 1) {
         setShowWork(true);
         setShowLoading(false);
      } else {
         setShowWork(false);
         setShowLoading(true);
      }
   });

   return (
      <div
         className={`hidden lg:flex items-end justify-center absolute top-0 left-0 w-full h-screen overflow-hidden ${
            showLoading || showWork ? "z-20" : ""
         }`}
      >
         <motion.div
            style={{ height, width, borderRadius, marginBottom }}
            className="bg-primary text-white shadow-xl"
         >
            <AnimatePresence mode="wait">
               {showLoading && (
                  <motion.div
                     key="loading"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.2 }}
                     className="flex items-center justify-center w-full h-full"
                  >
                     <div className="flex flex-col items-center gap-2">
                        <div className="text-sm">LOADING WORK...</div>
                        <div className="w-72 bg-gray-500 h-3">
                           <motion.div
                              style={{ width: loadingWidth }}
                              className="bg-white h-full w-full"
                           />
                        </div>
                     </div>
                  </motion.div>
               )}
               {showWork && <WorkSection key="work" />}
            </AnimatePresence>
         </motion.div>
      </div>
   );
}
