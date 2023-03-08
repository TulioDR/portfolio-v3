import { MotionValue, useSpring, useTransform, motion } from "framer-motion";
import SectionTitle from "../SectionTitle";

interface Props {
   scrollYProgress: MotionValue<number>;
}

export default function AboutTitle({ scrollYProgress }: Props) {
   const scrollYProgressVelocity = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
   });

   const y = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["-100%", "0%", "0%"]
   );

   return (
      <motion.div style={{ y }} className="pt-24">
         <SectionTitle>About me</SectionTitle>
      </motion.div>
   );
}
