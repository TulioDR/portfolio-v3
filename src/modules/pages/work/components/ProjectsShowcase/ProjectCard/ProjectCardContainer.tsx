import { LayoutModel } from "@/models/ProjectModel";
import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   children: React.ReactNode;
   id: string;
   currentLayout: LayoutModel;
   newRef: React.MutableRefObject<null>;
};

export default function ProjectCardContainer({
   onClick,
   children,
   id,
   currentLayout,
   newRef,
}: Props) {
   const isList = currentLayout === "list";
   const isGrid = currentLayout === "grid";
   const isCarousel = currentLayout === "carousel";

   return (
      <motion.div
         ref={newRef}
         id={id}
         onClick={onClick}
         className={`flex-shrink-0 cursor-pointer flex items-center justify-center
            ${isGrid ? "aspect-video" : ""}
            ${isList ? "aspect-[16/5]" : ""}
            ${isCarousel ? "aspect-[7/9]" : ""}
         `}
      >
         <motion.div
            initial={isCarousel ? { width: 0 } : { height: 0 }}
            animate={isCarousel ? { width: "100%" } : { height: "100%" }}
            exit={isCarousel ? { width: 0 } : { height: 0 }}
            transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
            className={` relative overflow-hidden ${
               isCarousel ? "h-full" : "w-full"
            }`}
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
