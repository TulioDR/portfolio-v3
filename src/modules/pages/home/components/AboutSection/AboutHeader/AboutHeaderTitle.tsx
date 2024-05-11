import { MotionValue, useTransform, motion } from "framer-motion";
import useLanguageContext from "@/context/LanguageContext";
import SectionTitle from "@/components/Sections/SectionTitle";

interface Props {
   scroll: MotionValue<number>;
}

export default function AboutTitle({ scroll }: Props) {
   const y = useTransform(scroll, [0, 1], ["100%", "0%"]);

   const { currentLanguage } = useLanguageContext();
   const { title } = currentLanguage.about;
   return (
      <div className="relative overflow-hidden">
         <motion.div style={{ y }} className="">
            <SectionTitle>{title}</SectionTitle>
         </motion.div>
      </div>
   );
}
