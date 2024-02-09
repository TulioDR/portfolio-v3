import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MainButton({ children }: Props) {
   const [isHovered, setIsHovered] = useState<boolean>(false);
   const onHoverStart = () => setIsHovered(true);
   const onHoverEnd = () => setIsHovered(false);

   return (
      <motion.button
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         className="w-44 2xl:w-52 z-50 aspect-square rounded-full overflow-hidden shadow-xl pointer-events-auto relative bg-gray-200 text-black hover:text-white duration-500"
      >
         <span className="text-lg font-semibold">{children}</span>
         <AnimatePresence>
            {isHovered && (
               <motion.div
                  initial={{ y: "150%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-150%" }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
                  className="absolute top-0 left-0 w-full h-full -z-10 flex items-center justify-center "
               >
                  <motion.div className="rounded-full bg-primary w-[200%] h-[200%]" />
               </motion.div>
            )}
         </AnimatePresence>
      </motion.button>
   );
}
