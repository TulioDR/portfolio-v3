import { AnimationControls, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   front?: boolean;
   animationControls: AnimationControls;
   src: StaticImageData;
};

export default function ExpertiseCard({
   front,
   animationControls,
   src,
}: Props) {
   return (
      <div
         className={`aspect-[2/3] w-1/2 ${
            front
               ? "-rotate-6 -translate-x-1/4 -translate-y-[2%]"
               : "rotate-6 translate-x-1/4 translate-y-[2%]"
         }`}
      >
         <motion.div
            animate={animationControls}
            className={`w-full h-full rounded-xl pointer-events-auto p-1 flex items-center justify-center ${
               front ? "bg-blue-400 " : "bg-white"
            }`}
         >
            <div className="aspect-square w-full relative">
               <Image src={src} alt="image" fill className="object-cover" />
            </div>
         </motion.div>
      </div>
   );
}
