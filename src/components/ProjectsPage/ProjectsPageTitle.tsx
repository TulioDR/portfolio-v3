import useLanguageContext from "@/context/LanguageContext";
import { motion } from "framer-motion";
import SectionTitle from "../Sections/SectionTitle";

export default function ProjectsPageTitle() {
   const { currentLanguage } = useLanguageContext();
   const { title } = currentLanguage.projects;
   return (
      <motion.div
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         exit={{ x: "-100%" }}
         transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
         className="w-min"
      >
         <SectionTitle>{title}</SectionTitle>
      </motion.div>
   );
}
