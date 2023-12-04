import Image, { StaticImageData } from "next/image";
import { MotionValue, motion, useTransform } from "framer-motion";
import { LayoutModel } from "@/models/ProjectModel";

type Props = {
   src: StaticImageData;
   alt: string;
   springMotionX: MotionValue<any>;
   springMotionY: MotionValue<any>;
   currentLayout: LayoutModel;
};

export default function ProjectCardImage({
   src,
   alt,
   springMotionX,
   springMotionY,
   currentLayout,
}: Props) {
   const top = 10000;

   const isGrid = currentLayout === "grid";

   const xMotion = useTransform(springMotionX, [0, top], ["0%", "50%"]);
   const yMotion = useTransform(
      springMotionY,
      [0, top],
      ["0%", isGrid ? "0%" : "50%"]
   );

   return (
      <motion.div
         style={{ x: xMotion, y: yMotion }}
         className="w-full h-full relative"
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
