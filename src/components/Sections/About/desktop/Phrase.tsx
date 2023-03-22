import { motion, MotionValue } from "framer-motion";

interface Props {
   children: React.ReactNode;
   x: MotionValue<string>;
   opacity: MotionValue<number>;
}
export default function Phrase({ children, x, opacity }: Props) {
   return (
      <motion.div
         style={{ x, opacity }}
         className="text-white text-lg sm:text-xl xl:text-2xl font-semibold rounded-2xl border border-slate-900 py-3 px-4 max-w-max sm:w-auto"
      >
         {children}
      </motion.div>
   );
}
