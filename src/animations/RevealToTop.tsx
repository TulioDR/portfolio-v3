import { motion } from "framer-motion";
type Props = {
   children: React.ReactNode;
};

const revealToTopAnimation = {
   initial: { y: "110%" },
   animate: { y: 0, transition: { duration: 0.5 } },
   exit: { y: "110%", transition: { duration: 0.5 } },
};

export default function RevealToTop({ children }: Props) {
   return <motion.div variants={revealToTopAnimation}>{children}</motion.div>;
}
