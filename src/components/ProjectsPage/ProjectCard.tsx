import { motion } from "framer-motion";
import Image from "next/image";
import landscape from "@/assets/images/projects/film-organizer.png";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

type Props = {
   small?: boolean;
   currentLayout: "grid" | "list" | "normal";
};

export default function ProjectCard({ currentLayout, small }: Props) {
   const item = {
      initial: { y: 100, opacity: 0 },
      animate: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.4, ease: [0.645, 0.045, 0.355, 1] },
      },
   };

   const tiltElementRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
      VanillaTilt.init(tiltElementRef.current!, {
         reverse: true,
         glare: true,
         "max-glare": 0.3,
      });
   }, []);
   return (
      <motion.div
         layout
         variants={item}
         className={`bg-white border-black border-[4px] shadow-xl relative cursor-pointer overflow-hidden group
         ${
            currentLayout === "normal"
               ? small
                  ? "row-span-1"
                  : "row-span-2"
               : ""
         }`}
      >
         <div
            className={`overflow-hidden h-full flex justify-center group
            ${currentLayout === "normal" && small ? "aspect-video" : ""}
            ${currentLayout === "grid" ? "aspect-square" : ""}
            ${currentLayout === "list" ? "aspect-video" : ""}
            `}
         >
            <motion.div
               ref={tiltElementRef}
               layout
               className="relative h-full aspect-video"
            >
               <Image
                  src={landscape}
                  alt="image"
                  fill
                  sizes="100%"
                  className="object-cover group-hover:scale-[1.15] duration-200"
                  priority
               />
            </motion.div>
         </div>
         <motion.div
            className={`absolute w-full bottom-0 bg-gradient-to-t from-black to-transparent px-7 pb-7 pt-20 pointer-events-none group-hover:opacity-0 duration-300`}
         >
            <div className="text-3xl font-bold text-center text-white">
               Card Title
            </div>
         </motion.div>
      </motion.div>
   );
}
