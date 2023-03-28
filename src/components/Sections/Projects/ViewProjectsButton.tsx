import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
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
   return (
      <motion.div
         onClick={onClick}
         style={isBackFromProjects ? {} : { y }}
         initial={{ x: 100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ x: 100, opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="bg-yellow-600 text-black cursor-pointer rounded-full aspect-square w-min text-xl p-7 z-10"
      >
         View Projects
      </motion.div>
   );
}
