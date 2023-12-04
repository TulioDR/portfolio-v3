import React from "react";
import { motion } from "framer-motion";
import { LayoutModel } from "@/models/ProjectModel";

type Props = {
   currentLayout: LayoutModel;
};

export default function ScrollIcon({ currentLayout }: Props) {
   const isGrid = currentLayout === "grid";
   const isList = currentLayout === "list";
   const isCarousel = currentLayout === "carousel";
   return (
      <div
         className={`absolute top-0 left-0 flex items-center justify-center 
            ${isGrid ? "w-full h-1/2" : ""}
            ${isList ? "w-full h-1/2" : ""}
            ${isCarousel ? "w-1/2 h-full" : ""}
         `}
      >
         <motion.div
            layout="position"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
            className="flex flex-col items-center"
         >
            <div className="rounded-xl border-white border w-10 h-20 flex flex-col items-center pt-4">
               <div className="w-1 h-5 bg-white rounded-full animate-bounce"></div>
            </div>
            <div className="text-white">Scroll</div>
         </motion.div>
      </div>
   );
}
