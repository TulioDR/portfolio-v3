import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import { motion, MotionValue, useTransform } from "framer-motion";
import SectionTitle from "../SectionTitle";

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
   return (
      <motion.div
         style={isBackFromProjects ? {} : { y }}
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ x: -100, opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="text-yellow-600 xl:text-9xl pointer-events-none z-10"
      >
         <SectionTitle>Projects</SectionTitle>
      </motion.div>
   );
}
