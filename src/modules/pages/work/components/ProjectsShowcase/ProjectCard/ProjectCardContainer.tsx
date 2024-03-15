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
         className={`flex-shrink-0 cursor-pointer overflow-hidden relative flex items-center justify-center
            ${isGrid ? "aspect-video" : ""}
            ${isList ? "aspect-[16/5]" : ""}
            ${isCarousel ? "aspect-[7/9]" : ""}
         `}
      >
         {/* <motion.div
            initial={isCarousel ? { height: 0 } : { width: 0 }}
            animate={isCarousel ? { height: "100%" } : { width: "100%" }}
            exit={isCarousel ? { height: 0 } : { width: 0 }}
            transition={{ duration: 2, ease: [0.645, 0.045, 0.355, 1] }}
            className={`relative overflow-hidden bg-green-500 ${
               isCarousel ? "w-full" : "h-full"
            }`}
         > */}
         {children}
         {/* </motion.div> */}
      </motion.div>
   );
}
