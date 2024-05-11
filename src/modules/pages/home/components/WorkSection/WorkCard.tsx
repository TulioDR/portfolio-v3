import ProjectModel from "@/models/ProjectModel";
import {
   MotionValue,
   useMotionValue,
   useMotionValueEvent,
   motion,
   useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

type Props = {
   work: ProjectModel;
   number: string;
   scrollYProgress: MotionValue<number>;
};

export default function WorkCard({ work, number, scrollYProgress }: Props) {
   const cardRef = useRef<HTMLDivElement>(null);
   const percentage = useMotionValue(0);

   useEffect(() => {
      const { width, right } = cardRef.current!.getBoundingClientRect();
      const fullWidth = window.innerWidth + width;
      const currentPosition = right;

      const value = currentPosition / fullWidth;
      percentage.set(value);
   }, [percentage]);

   useMotionValueEvent(scrollYProgress, "change", () => {
      const { width, right } = cardRef.current!.getBoundingClientRect();
      const fullWidth = window.innerWidth + width;
      const currentPosition = right;

      const value = currentPosition / fullWidth;
      percentage.set(value);
   });

   const left = useTransform(percentage, [0, 1], ["0%", "100%"]);
   const x = useTransform(percentage, [0, 1], ["0%", "-100%"]);

   return (
      <div
         ref={cardRef}
         className="aspect-square h-full rounded-3xl relative overflow-hidden flex-shrink-0"
      >
         <div className="w-full h-full relative overflow-hidden border-[12px] border-black rounded-xl">
            <motion.div
               style={{ x, left }}
               className="absolute top-0 h-full aspect-video"
            >
               <Image
                  src={work.img}
                  alt={work.title}
                  sizes="100%"
                  fill
                  className="object-cover "
               />
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full flex items-end justify-end bg-gradient-to-t from-black/70 to-transparent">
               <div className="px-5 pb-5 w-3/4 flex justify-end">
                  <span className="font-bold text-white text-right text-4xl">
                     {work.title}
                  </span>
               </div>
            </div>
         </div>
         <div
            style={{ boxShadow: "0px 0px 0px 9999px black" }}
            className="absolute top-1/2 -translate-y-1/2 left-1/4 aspect-square bg-transparent rounded-full w-[200%]"
         ></div>
         <div className="w-full h-full absolute top-0 left-0 z-10 flex justify-between">
            <div className="w-1/4 h-full py-8 flex flex-col justify-between">
               <span className="text-white text-5xl font-black text-center">
                  {number}
               </span>
               <div className="flex flex-col items-center gap-5">
                  <button className="aspect-square w-1/2 rounded-full border border-white hover:bg-white text-white hover:text-black">
                     A
                  </button>
                  <button className="aspect-square w-1/2 rounded-full border border-white hover:bg-white text-white hover:text-black">
                     B
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
