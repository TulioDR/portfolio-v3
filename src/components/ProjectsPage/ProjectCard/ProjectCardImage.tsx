import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { LayoutModel } from "@/models/ProjectModel";

type Props = {
   tiltRef: React.RefObject<HTMLDivElement>;
   src: StaticImageData;
   alt: string;
   small: boolean;
   currentLayout: LayoutModel;
};

export default function ProjectCardImage({
   tiltRef,
   src,
   alt,
   currentLayout,
   small,
}: Props) {
   return (
      <motion.div
         className={`overflow-hidden h-full flex justify-center group
      ${currentLayout === "mixed" && small ? "aspect-video" : ""}
      ${currentLayout === "grid" ? "aspect-square" : ""}
      ${currentLayout === "list" ? "aspect-video" : ""}
      `}
      >
         <div className="aspect-video h-full group-hover:scale-110 duration-300">
            <motion.div
               ref={tiltRef}
               layout
               className="relative h-full aspect-video"
            >
               <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="100%"
                  className="object-cover object-top"
                  priority
               />
            </motion.div>
         </div>
      </motion.div>
   );
}
