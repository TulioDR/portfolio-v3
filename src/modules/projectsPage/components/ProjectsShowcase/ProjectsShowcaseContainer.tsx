import { LayoutModel } from "@/models/ProjectModel";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   currentLayout: LayoutModel;
   isProjectExpanded: boolean;
};

export default function ProjectsShowcaseContainer({
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
   return (
      <motion.div
         // variants={container}
         // initial="initial"
         // animate="animate"
         // exit="exit"
         className={`gap-5 grid ${
            isProjectExpanded ? " sm:grid-cols-2 lg:grid-cols-3" : ""
         }`}
      >
         {children}
      </motion.div>
   );
}
