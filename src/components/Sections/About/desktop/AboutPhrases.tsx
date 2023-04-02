import { MotionValue, useSpring, useTransform } from "framer-motion";
import Phrase from "./Phrase";
import useLanguageContext from "@/context/LanguageContext";

interface Props {
   scrollYProgress: MotionValue<number>;
}

export default function AboutPhrases({ scrollYProgress }: Props) {
   const scrollYVelocity = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
   });

   const x1 = useTransform(scrollYVelocity, [0.3, 0.6], ["-50%", "0%"]);
   const x2 = useTransform(scrollYVelocity, [0.4, 0.7], ["-50%", "0%"]);
   const x3 = useTransform(scrollYVelocity, [0.5, 0.8], ["-50%", "0%"]);
   const x4 = useTransform(scrollYVelocity, [0.6, 0.9], ["-50%", "0%"]);
   const x5 = useTransform(scrollYVelocity, [0.7, 0.9], ["-50%", "0%"]);

   const op1 = useTransform(scrollYVelocity, [0.3, 0.6], [0, 1]);
   const op2 = useTransform(scrollYVelocity, [0.4, 0.7], [0, 1]);
   const op3 = useTransform(scrollYVelocity, [0.5, 0.8], [0, 1]);
   const op4 = useTransform(scrollYVelocity, [0.6, 0.9], [0, 1]);
   const op5 = useTransform(scrollYVelocity, [0.7, 0.9], [0, 1]);

   const { currentLanguage } = useLanguageContext();
   const { sub1, sub2, sub3, sub4, sub5 } = currentLanguage.about;
   return (
      <div className="flex justify-between h-full w-full flex-1">
         <div className="w-1/2 h-full flex flex-col justify-around pr-5 2xl:pr-10">
            <Phrase x={x1} opacity={op1}>
               {sub1}
            </Phrase>
            <Phrase x={x2} opacity={op2}>
               {sub2}
            </Phrase>
            <Phrase x={x3} opacity={op3}>
               {sub3}
            </Phrase>
         </div>
         <div className="w-1/2 h-full pl-80">
            <div className="flex flex-col items-end justify-evenly h-full pl-5 2xl:pl-10">
               <Phrase x={x4} opacity={op4}>
                  {sub4}
               </Phrase>
               <Phrase x={x5} opacity={op5}>
                  {sub5}
               </Phrase>
            </div>
         </div>
      </div>
   );
}
