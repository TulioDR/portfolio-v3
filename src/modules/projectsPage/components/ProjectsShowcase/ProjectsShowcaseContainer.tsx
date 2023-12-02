import { LayoutModel } from "@/models/ProjectModel";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   currentLayout: LayoutModel;
};

export default function ProjectsShowcaseContainer({
   currentLayout,
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
   const isCascade = currentLayout === "cascade";

   return (
      <motion.div
         // variants={container}
         // initial="initial"
         // animate="animate"
         // exit="exit"
         className={` grid 
         ${isList ? "gap-5 sm:grid-cols-2 lg:grid-cols-3" : ""}
         ${isCascade ? "gap-10" : ""}
         `}
      >
         {children}
      </motion.div>
   );
}
