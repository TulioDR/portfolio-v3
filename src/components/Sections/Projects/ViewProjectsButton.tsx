import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import useLanguageContext from "@/context/LanguageContext";
import { motion, MotionValue, useTransform } from "framer-motion";

type Props = {
   onClick: () => void;
   scrollYProgressVelocity: MotionValue<any>;
};

export default function ViewProjectsButton({
   onClick,
   scrollYProgressVelocity,
}: Props) {
   const { isBackFromProjects } = useBackFromProjectsContext();

   const y = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["150%", "0%", "0%"]
   );

   const { currentLanguage } = useLanguageContext();
   const { button } = currentLanguage.projects;
   return (
      <motion.div
         onClick={onClick}
         style={isBackFromProjects ? {} : { y }}
         initial={{ x: 100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ x: 100, opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="bg-yellow-600 text-black cursor-pointer rounded-full aspect-square w-32 text-xl z-10 grid place-content-center"
      >
         <div className="w-min">{button}</div>
      </motion.div>
   );
}
