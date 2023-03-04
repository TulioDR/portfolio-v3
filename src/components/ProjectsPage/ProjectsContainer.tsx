import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   currentLayout: "normal" | "grid" | "list";
   isSidebarExpanded: boolean;
};

export default function ProjectsContainer({
   currentLayout,
   isSidebarExpanded,
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
      exit: { y: 100, opacity: 0, transition: { duration: 0.1 } },
   };
   return (
      <motion.div
         variants={container}
         initial="initial"
         animate="animate"
         exit="exit"
         className={`grid gap-7 pb-7 pr-7 flex-1 ${
            currentLayout === "list"
               ? isSidebarExpanded
                  ? "grid-cols-1"
                  : "grid-cols-2"
               : isSidebarExpanded
               ? "grid-cols-2"
               : "grid-cols-3"
         } ${
            currentLayout === "normal"
               ? isSidebarExpanded
                  ? "grid-rows-6"
                  : "grid-rows-4"
               : ""
         }`}
      >
         {children}
      </motion.div>
   );
}
