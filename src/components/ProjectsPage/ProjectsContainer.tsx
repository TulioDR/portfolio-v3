import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   layout: "normal" | "grid" | "list";
   showFilter: boolean;
};

export default function ProjectsContainer({
   layout,
   showFilter,
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
   };
   return (
      <motion.div
         variants={container}
         initial="initial"
         animate="animate"
         className={`grid gap-7 pr-7 pb-7 flex-1 ${
            layout === "list"
               ? showFilter
                  ? "grid-cols-1"
                  : "grid-cols-2"
               : showFilter
               ? "grid-cols-2"
               : "grid-cols-3"
         } ${
            layout === "normal"
               ? showFilter
                  ? "grid-rows-6"
                  : "grid-rows-4"
               : ""
         }`}
      >
         {children}
      </motion.div>
   );
}
