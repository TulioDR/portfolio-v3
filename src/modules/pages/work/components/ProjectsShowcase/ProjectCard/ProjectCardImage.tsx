import {
   AnimationControls,
   MotionValue,
   motion,
   useTransform,
} from "framer-motion";
import { useMotionTemplate } from "framer-motion";

import useProjectCardHeight from "../../../hooks/useProjectCardHeight";

type Props = {
   src: string;
   alt: string;
   scrollXProgress: MotionValue<number>;
   isSelected: boolean;
   containerControls: AnimationControls;
};

export default function ProjectCardImage({
   src,
   alt,
   scrollXProgress,
   isSelected,
   containerControls,
}: Props) {
   const x = useTransform(scrollXProgress, [0, 1], ["100%", "0%"]);
   const objectPosition = useMotionTemplate`${x} 50%`;
   const { height: fixedHeight } = useProjectCardHeight(alt);

   // Add Scale change
   return (
      <motion.div
         initial={{ height: 0, width: "100%" }}
         animate={containerControls}
         transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
         className="overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center"
      >
         <motion.img
            style={{
               objectPosition,
               height: isSelected ? "100%" : fixedHeight,
            }}
            src={src}
            alt={alt}
            className="object-cover w-full h-full"
         />
      </motion.div>
   );
}
