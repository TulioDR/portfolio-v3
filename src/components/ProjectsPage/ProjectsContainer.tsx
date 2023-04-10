import { LayoutModel } from "@/models/ProjectModel";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   currentLayout: LayoutModel;
   isProjectExpanded: boolean;
};

export default function ProjectsContainer({
   currentLayout,
   isProjectExpanded,
   children,
}: Props) {
   const container = {
      initial: {},
      animate: {
         transition: {
            delayChildren: 0.4,
            staggerChildren: 0.18,
         },
      },
      exit: { opacity: 0, transition: { duration: 0.4 } },
   };
   const isList = currentLayout === "list";
   const isMixed = currentLayout === "mixed";
   return (
      <div className="overflow-y-hidden">
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`grid gap-2 sm:gap-3 md:gap-5 lg:gap-7 pb-7 ${
               isList
                  ? isProjectExpanded
                     ? "grid-cols-1 md:grid-cols-2"
                     : "grid-cols-1"
                  : isProjectExpanded
                  ? "grid-cols-2 md:grid-cols-3"
                  : "grid-cols-2 md:grid-cols-2"
            } ${
               isMixed
                  ? isProjectExpanded
                     ? "grid-rows-6 md:grid-rows-4"
                     : "grid-rows-6 md:grid-rows-6"
                  : ""
            }`}
         >
            {children}
         </motion.div>
      </div>
   );
}
