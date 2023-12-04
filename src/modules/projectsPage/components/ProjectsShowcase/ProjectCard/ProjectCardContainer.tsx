import { LayoutModel } from "@/models/ProjectModel";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
type Props = {
   onClick: () => void;
   children: React.ReactNode;
   id: string;
   currentLayout: LayoutModel;
};

export default function ProjectCardContainer({
   onClick,
   children,
   id,
   currentLayout,
}: Props) {
   const isList = currentLayout === "list";
   const isGrid = currentLayout === "grid";
   const isCarousel = currentLayout === "carousel";

   return (
      <motion.div
         layout
         id={id}
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.9 }}
         transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
         onClick={onClick}
         className={`flex-shrink-0 cursor-pointer overflow-hidden
            ${isGrid ? "aspect-video" : ""}
            ${isList ? "aspect-[16/5] flex items-end" : ""}
            ${isCarousel ? "aspect-[8/9] flex justify-end" : ""}
         `}
      >
         <motion.div
            layout
            className={`relative aspect-video ${
               isCarousel ? "h-full" : "w-full"
            }`}
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
