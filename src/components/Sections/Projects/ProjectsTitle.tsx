import {
   AnimatePresence,
   motion,
   MotionValue,
   useTransform,
} from "framer-motion";

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
      ["-150%", "-50%", "-50%"]
   );
   return (
      <AnimatePresence>
         {!showScreen && (
            <motion.div
               style={{ y }}
               exit={{ x: -100, opacity: 0, transition: { duration: 0.2 } }}
               className="text-yellow-600 text-9xl absolute left-10 top-1/2 pointer-events-none z-10"
            >
               Projects
            </motion.div>
         )}
      </AnimatePresence>
   );
}
