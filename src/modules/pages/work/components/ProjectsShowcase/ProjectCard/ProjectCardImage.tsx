import Image, { StaticImageData } from "next/image";
import { MotionValue, motion, useTransform } from "framer-motion";
import { LayoutModel } from "@/models/ProjectModel";

type Props = {
   src: StaticImageData;
   alt: string;
   currentLayout: LayoutModel;
   scrollXProgress: MotionValue<number>;
   scrollYProgress: MotionValue<number>;
};

export default function ProjectCardImage({
   src,
   alt,
   currentLayout,
   scrollXProgress,
   scrollYProgress,
}: Props) {
   const isCarousel = currentLayout === "carousel";

   const x = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);
   const right = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

   const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
   const bottom = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

   return (
      <motion.div
         transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
         style={isCarousel ? { x, right } : { y, bottom }}
         className={`absolute aspect-video ${isCarousel ? "h-full" : "w-full"}`}
      >
         <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            className="object-cover"
            priority
         />
      </motion.div>
   );
}
