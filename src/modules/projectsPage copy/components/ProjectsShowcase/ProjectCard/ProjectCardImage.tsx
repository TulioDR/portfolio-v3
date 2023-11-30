import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { LayoutModel } from "@/models/ProjectModel";

type Props = {
   src: StaticImageData;
   alt: string;
   small: boolean;
   currentLayout: LayoutModel;
};

export default function ProjectCardImage({
   src,
   alt,
   currentLayout,
   small,
}: Props) {
   return (
      <motion.div
         transition={{ duration: 2 }}
         className={`overflow-hidden h-full flex justify-center group
      ${currentLayout === "mixed" && small ? "aspect-video" : ""}
      ${currentLayout === "grid" ? "aspect-square" : ""}
      ${currentLayout === "list" ? "aspect-video" : ""}
      `}
      >
         <div className="aspect-video h-full">
            <motion.div layout className="relative h-full aspect-video">
               <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="100%"
                  className="object-cover"
                  priority
               />
            </motion.div>
         </div>
      </motion.div>
   );
}
