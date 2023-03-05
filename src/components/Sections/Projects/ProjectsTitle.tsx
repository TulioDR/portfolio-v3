import {
   AnimatePresence,
   motion,
   MotionValue,
   useTransform,
} from "framer-motion";
import SectionTitle from "../SectionTitle";

type Props = {
   showScreen: boolean;
   scrollYProgressVelocity: MotionValue<any>;
};

export default function ProjectsTitle({
   showScreen,
   scrollYProgressVelocity,
}: Props) {
   const y = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["-150%", "0%", "0%"]
   );
   return (
      <AnimatePresence>
         {!showScreen && (
            <motion.div
               style={{ y }}
               exit={{ x: -100, opacity: 0, transition: { duration: 0.2 } }}
               className="text-yellow-600 xl:text-9xl pointer-events-none z-10"
            >
               <SectionTitle>Projects</SectionTitle>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
