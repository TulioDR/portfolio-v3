import { LayoutModel } from "@/models/ProjectModel";
import { MotionValue, motion, useTransform } from "framer-motion";

type Props = {
   children: React.ReactNode;
   currentLayout: LayoutModel;
   springMotionX: MotionValue<any>;
   springMotionY: MotionValue<any>;
};

export default function ProjectTrack({
   children,
   currentLayout,
   springMotionX,
   springMotionY,
}: Props) {
   const isGrid = currentLayout === "grid";
   const isList = currentLayout === "list";
   const isCarousel = currentLayout === "carousel";

   const top = 10000;
   const xMotion = useTransform(springMotionX, [0, top], ["0%", "-100%"]);
   const yMotion = useTransform(springMotionY, [0, top], ["0%", "-100%"]);

   return (
      <motion.div
         style={{ x: xMotion, y: yMotion }}
         className={`absolute gap-10
            ${isGrid ? "w-2/3 top-1/2 grid grid-cols-2" : ""}
            ${isList ? "w-1/2 top-1/2 flex flex-col" : ""}
            ${isCarousel ? "h-1/2 left-1/2 flex" : ""}
         `}
      >
         {children}
      </motion.div>
   );
}
