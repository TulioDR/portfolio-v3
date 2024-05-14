import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
   children: React.ReactNode;
   tall?: true;
   large?: true;
   text: string;
   title: string;
};

export default function MobileContainer({
   children,
   tall,
   large,
   text,
   title,
}: Props) {
   const [showText, setShowText] = useState<boolean>(false);
   const handleClick = () => {
      setShowText((prev) => !prev);
   };

   return (
      <div
         onClick={handleClick}
         className={`rounded-3xl cursor-pointer bg-black relative shadow-xl border-[12px] border-white overflow-hidden
         ${tall ? "row-span-2 aspect-[1/2] lg:aspect-auto" : ""} 
         ${large ? "col-span-2 aspect-[2/1]" : ""}
         ${!large && !tall ? "aspect-square" : ""}
         `}
      >
         <AnimatePresence>
            {showText && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full text-black bg-white absolute px-2 top-0 left-0 flex flex-col items-center justify-center gap-5 z-30"
               >
                  <h4 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
                     {title}
                  </h4>
                  <div className="text-xs md:text-sm lg:text-base text-center">
                     {text}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
         {children}
      </div>
   );
}
