import { motion } from "framer-motion";
import Image from "next/image";
import landscape from "@/assets/images/projects/film-organizer.png";

type Props = {
   small?: boolean;
   layout: "grid" | "list" | "normal";
};

export default function ProjectCard({ layout, small }: Props) {
   const item = {
      initial: { y: 100, opacity: 0 },
      animate: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.4, ease: [0.645, 0.045, 0.355, 1] },
      },
   };
   return (
      <motion.div
         layout
         variants={item}
         className={`bg-white border-black border-[4px] shadow-xl relative cursor-pointer
         ${layout === "normal" ? (small ? "row-span-1" : "row-span-2") : ""}`}
      >
         <div
            className={`overflow-hidden h-full 
            ${layout === "normal" && small ? "aspect-video" : ""}
            ${layout === "grid" ? "aspect-square" : ""}`}
         >
            <motion.div layout className="relative h-full aspect-video">
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
         <motion.div
            className={`absolute w-full h-full top-0 text-white grid place-content-center bg-black bg-opacity-80 opacity-0 hover:opacity-100 duration-300 group`}
         >
            <div className="scale-50 group-hover:scale-100 duration-300 text-3xl font-bold">
               Card Title
            </div>
         </motion.div>
      </motion.div>
   );
}
