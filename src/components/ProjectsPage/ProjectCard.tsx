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

   const tilt = useRef<HTMLDivElement>(null);
   useEffect(() => {
      VanillaTilt.init(tilt.current!, {
         reverse: true,
         glare: true,
         "max-glare": 0.3,
      });
   }, []);
   return (
      <motion.div
         layout
         variants={item}
         className={`bg-white border-black border-[4px] shadow-xl relative cursor-pointer overflow-hidden
         ${
            currentLayout === "normal"
               ? small
                  ? "row-span-1"
                  : "row-span-2"
               : ""
         }`}
      >
         <div
            className={`overflow-hidden h-full flex justify-center scale-[1.15]
            ${currentLayout === "normal" && small ? "aspect-video" : ""}
            ${currentLayout === "grid" ? "aspect-square" : ""}
            ${currentLayout === "list" ? "aspect-video" : ""}
            `}
         >
            <motion.div
               ref={tilt}
               layout
               className="relative h-full aspect-video"
            >
               <Image
                  src={landscape}
                  alt="image"
                  fill
                  sizes="100%"
                  className="object-cover"
                  priority
               />
            </motion.div>
         </div>
         {/* <motion.div
            className={`absolute w-full h-full top-0 text-white grid place-content-center bg-black bg-opacity-80 opacity-0 hover:opacity-100 duration-300 group`}
         >
            <div className="scale-50 group-hover:scale-100 duration-300 text-3xl font-bold">
               Card Title
            </div>
         </motion.div> */}
      </motion.div>
   );
}
