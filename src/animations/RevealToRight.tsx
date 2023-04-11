import { motion } from "framer-motion";

interface Props {
   children: React.ReactNode;
   reverse?: boolean;
   main?: true;
}

export default function RevealToRight({ children, reverse, main }: Props) {
   const revealHorizontalAnimation = {
      initial: { x: reverse ? "100%" : "-100%" },
      animate: {
         x: 0,
         transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
      },
      exit: {
         x: reverse ? "100%" : "-100%",
         transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
      },
   };

   return main ? (
      <motion.div
         variants={revealHorizontalAnimation}
         initial="initial"
         animate="animate"
         exit="exit"
         className="w-max"
      >
         {children}
      </motion.div>
   ) : (
      <motion.div variants={revealHorizontalAnimation} className="w-max">
         {children}
      </motion.div>
   );
}
