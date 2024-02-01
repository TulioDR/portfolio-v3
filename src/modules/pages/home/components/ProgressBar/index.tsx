import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function ProgressBar() {
   const { scrollYProgress } = useScroll();
   const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

   return (
      <div className="fixed top-0 right-20 h-screen w-20 z-20 flex items-center justify-center">
         <div className="h-1/3 w-0.5 bg-gray-600 flex flex-col items-center rounded-full">
            <motion.div
               style={{ height }}
               className="w-1 bg-white rounded-full"
            />
         </div>
      </div>
   );
}
