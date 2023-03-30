import { motion } from "framer-motion";

interface Props {
   children: React.ReactNode;
   reverse?: boolean;
}

export default function RevealToTop({ children, reverse }: Props) {
   const revealVerticalAnimation = {
      initial: { y: reverse ? "-100%" : "100%" },
      animate: {
         y: 0,
         transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
      },
      exit: {
         y: reverse ? "-100%" : "100%",
         transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
      },
   };
   return (
      <motion.div variants={revealVerticalAnimation}>{children}</motion.div>
   );
}
