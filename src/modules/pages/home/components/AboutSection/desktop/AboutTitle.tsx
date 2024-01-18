import { MotionValue, useSpring, useTransform, motion } from "framer-motion";
import useLanguageContext from "@/context/LanguageContext";

interface Props {
   scrollYProgress: MotionValue<number>;
}

export default function AboutTitle({ scrollYProgress }: Props) {
   const scrollYProgressVelocity = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
   });

   const y = useTransform(scrollYProgressVelocity, [0, 0.75], ["-100%", "0%"]);

   const { currentLanguage } = useLanguageContext();
   const { title } = currentLanguage.about;
   return (
      <motion.div style={{ y }} className="pt-24">
         {/* <SectionTitle>{title}</SectionTitle> */}
      </motion.div>
   );
}
