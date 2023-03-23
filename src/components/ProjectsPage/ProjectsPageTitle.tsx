import { motion } from "framer-motion";

export default function ProjectsPageTitle() {
   return (
      <motion.h1
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         exit={{ x: "-100%" }}
         transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
         className="text-8xl font-semibold w-min"
      >
         Projects
      </motion.h1>
   );
}
