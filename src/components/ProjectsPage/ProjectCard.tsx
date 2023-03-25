import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

type Props = {
   title: string;
   img: StaticImageData;
   small?: boolean;
   currentLayout: "grid" | "list" | "normal";
};

export default function ProjectCard({
   title,
   img,
   small,
   currentLayout,
}: Props) {
   const item = {
      initial: { scale: 0.9, opacity: 0 },
      animate: {
         scale: 1,
         opacity: 1,
         transition: { duration: 0.4, ease: [0.645, 0.045, 0.355, 1] },
      },
      exit: {
         scale: 0.9,
         opacity: 0,
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
            <div className="aspect-video h-full group-hover:scale-110 duration-300">
               <motion.div
                  ref={tiltElementRef}
                  layout
                  className="relative h-full aspect-video "
               >
                  <Image
                     src={img}
                     alt={title}
                     fill
                     sizes="100%"
                     className="object-cover"
                     priority
                  />
               </motion.div>
            </div>
         </div>
         <motion.div
            className={`absolute w-full bottom-0 bg-gradient-to-t from-black to-transparent px-7 pb-7 pt-20 pointer-events-none group-hover:opacity-0 duration-300`}
         >
            <motion.div
               layout="position"
               className="text-3xl font-bold text-center text-white"
            >
               {title}
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
