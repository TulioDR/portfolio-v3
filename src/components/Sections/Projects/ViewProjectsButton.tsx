import {
   AnimatePresence,
   motion,
   MotionValue,
   useTransform,
} from "framer-motion";

type Props = {
   onClick: () => void;
   showScreen: boolean;
   scrollYProgressVelocity: MotionValue<any>;
};

export default function ViewProjectsButton({
   onClick,
   showScreen,
   scrollYProgressVelocity,
}: Props) {
   const y = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["150%", "0%", "0%"]
   );
   return (
      <AnimatePresence>
         {!showScreen && (
            <motion.div
               onClick={onClick}
               style={{ y }}
               exit={{ x: 100, opacity: 0, transition: { duration: 0.2 } }}
               className="bg-yellow-600 text-black cursor-pointer rounded-full aspect-square w-min text-xl p-7 z-10"
            >
               View Projects
            </motion.div>
         )}
      </AnimatePresence>
   );
}
