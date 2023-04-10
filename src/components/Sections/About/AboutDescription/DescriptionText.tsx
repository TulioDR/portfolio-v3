import useLanguageContext from "@/context/LanguageContext";
import { useTransform, MotionValue, motion } from "framer-motion";

type Props = {
   scrollVelocity: MotionValue<any>;
   scrollRef: React.RefObject<HTMLDivElement>;
};

export default function DescriptionText({ scrollVelocity, scrollRef }: Props) {
   const x1 = useTransform(scrollVelocity, [0.3, 0.6], ["-100%", "0%"]);
   const x2 = useTransform(scrollVelocity, [0.4, 0.7], ["-100%", "0%"]);
   const x3 = useTransform(scrollVelocity, [0.5, 0.8], ["-100%", "0%"]);
   const x4 = useTransform(scrollVelocity, [0.6, 0.9], ["-100%", "0%"]);

   const op1 = useTransform(scrollVelocity, [0.3, 0.6], [0, 1]);
   const op2 = useTransform(scrollVelocity, [0.4, 0.7], [0, 1]);
   const op3 = useTransform(scrollVelocity, [0.5, 0.8], [0, 1]);
   const op4 = useTransform(scrollVelocity, [0.6, 0.9], [0, 1]);

   const { currentLanguage } = useLanguageContext();
   const { p1, p2, p3, p4 } = currentLanguage.about;
   return (
      <div
         ref={scrollRef}
         className="space-y-5 text-xs sm:text-sm md:text-base lg:text-lg text-main-white font-light pr-5 overflow-hidden"
      >
         <motion.div style={{ x: x1, opacity: op1 }}>{p1}</motion.div>
         <motion.div style={{ x: x2, opacity: op2 }}>{p2}</motion.div>
         <motion.div style={{ x: x3, opacity: op3 }}>{p3}</motion.div>
         <motion.div style={{ x: x4, opacity: op4 }}>{p4}</motion.div>
      </div>
   );
}
