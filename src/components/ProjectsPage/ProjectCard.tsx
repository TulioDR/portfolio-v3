import { motion } from "framer-motion";
import Image from "next/image";
import landscape from "@/assets/images/projects/film-organizer.png";

type Props = {
   small?: boolean;
   layout: "grid" | "list" | "normal";
};

export default function ProjectCard({ layout, small }: Props) {
   return (
      <motion.div
         layout
         className={`bg-white rounded-2xl overflow-hidden shadow-xl
         ${
            layout === "normal"
               ? small
                  ? "aspect-[16/9] row-span-1"
                  : "row-span-2"
               : ""
         } 
         ${layout === "grid" ? "aspect-square" : ""} 
         ${layout === "list" ? "h-24 w-full" : "flex justify-center"}`}
      >
         <motion.div className="p-5 bg-black relative w-full h-full overflow-hidden">
            <motion.div layout className="relative h-full aspect-video">
               <Image
                  src={landscape}
                  alt="image"
                  fill
                  className="object-cover"
               />
            </motion.div>
            {/* <motion.div
               layout="position"
               className={`absolute text-2xl font-bold text-gray-800 pl-5 top-0 ${
                  layout === "list"
                     ? "left-[170px] flex items-center h-full"
                     : "left-0 pt-5"
               }`}
            >
               Card Title
            </motion.div> */}
         </motion.div>
      </motion.div>
   );
}
