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
         style={isCarousel ? { x, right } : { y, bottom }}
         className={`absolute aspect-video flex items-center justify-center ${
            isCarousel ? "h-full" : "w-full"
         }`}
      >
         <motion.div
            initial={isCarousel ? { height: 0 } : { width: 0 }}
            animate={isCarousel ? { height: "100%" } : { width: "100%" }}
            exit={isCarousel ? { height: 0 } : { width: 0 }}
            transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
            className={`relative overflow-hidden ${
               isCarousel ? "w-full" : "h-full"
            }`}
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
      </motion.div>
   );
}
