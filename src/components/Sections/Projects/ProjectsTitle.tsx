import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import { motion, MotionValue, useTransform } from "framer-motion";
import SectionTitle from "../SectionTitle";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   scrollYProgressVelocity: MotionValue<any>;
};

export default function ProjectsTitle({ scrollYProgressVelocity }: Props) {
   const { isBackFromProjects } = useBackFromProjectsContext();
   const y = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["-150%", "0%", "0%"]
   );

   const { currentLanguage } = useLanguageContext();
   const { title } = currentLanguage.projects;
   return (
      <motion.div
         style={isBackFromProjects ? {} : { y }}
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ x: -100, opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="text-yellow-600 xl:text-9xl pointer-events-none z-10"
      >
         <SectionTitle>{title}</SectionTitle>
      </motion.div>
   );
}
