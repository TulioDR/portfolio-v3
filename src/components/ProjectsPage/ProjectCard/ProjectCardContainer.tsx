import { LayoutModel } from "@/models/ProjectModel";
import { motion } from "framer-motion";

type Props = {
   elementRef: React.RefObject<HTMLDivElement>;
   onClick: () => void;
   currentLayout: LayoutModel;
   small?: boolean;
   children: React.ReactNode;
   isOneProject: boolean;
};

export default function ProjectCardContainer({
   elementRef,
   onClick,
   currentLayout,
   small,
   children,
   isOneProject,
}: Props) {
   const item = {
      initial: { opacity: 0 },
      animate: {
         opacity: 1,
         transition: { duration: 0.4, ease: [0.645, 0.045, 0.355, 1] },
      },
      exit: {
         opacity: 0,
         transition: { duration: 0.4, ease: [0.645, 0.045, 0.355, 1] },
      },
   };
   return (
      <motion.div
         ref={elementRef}
         layout
         variants={item}
         initial="initial"
         animate="animate"
         exit="exit"
         onClick={onClick}
         className={`bg-white border-black border-[4px] shadow-xl relative cursor-pointer overflow-hidden group
            ${
               currentLayout === "mixed"
                  ? isOneProject
                     ? "aspect-[5/6]"
                     : small
                     ? "row-span-1"
                     : "row-span-2"
                  : ""
            }`}
      >
         {children}
      </motion.div>
   );
}
