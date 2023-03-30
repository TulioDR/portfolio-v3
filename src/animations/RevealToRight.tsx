import { motion } from "framer-motion";

export const revealToRightAnimation = {
   initial: { x: "-100%" },
   animate: {
      x: 0,
      transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
   },
   exit: {
      x: "-100%",
      transition: { duration: 0.4, ease: [0.645, 0.045, 0.355, 1] },
   },
};

type Props = {
   children: React.ReactNode;
   about?: boolean;
};

export default function RevealToRight({ children, about }: Props) {
   return (
      <motion.div
         variants={revealToRightAnimation}
         className={`${about ? "" : "sm:w-max"}`}
      >
         {children}
      </motion.div>
   );
}
