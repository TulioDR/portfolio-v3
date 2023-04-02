import useLanguageContext from "@/context/LanguageContext";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";

interface Props {
   scrollYProgress: MotionValue<number>;
}

export default function AboutCardDesktop({ scrollYProgress }: Props) {
   const scrollYProgressVelocity = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
   });

   const width = useTransform(
      scrollYProgressVelocity,
      [0, 0.75],
      ["calc(100% + 0rem)", "calc(0% + 20rem)"]
   );
   const height = useTransform(
      scrollYProgressVelocity,
      [0, 0.75],
      ["calc(100% - 0rem)", "calc(100% - 10rem)"]
   );
   const borderRadius = useTransform(
      scrollYProgressVelocity,
      [0, 0.75],
      ["0px", "24px"]
   );

   const marginLeft = useTransform(
      scrollYProgressVelocity,
      [0, 0.75],
      ["0%", "50%"]
   );

   const padding = useTransform(
      scrollYProgressVelocity,
      [0, 0.75],
      ["150px 250px", "56px 40px"]
   );

   const { currentLanguage } = useLanguageContext();
   const { card } = currentLanguage.about;
   return (
      <div className="hidden lg:flex items-center absolute top-0 left-0 w-full h-full overflow-hidden">
         <motion.div
            style={{
               height,
               width,
               borderRadius,
               marginLeft,
               padding,
            }}
            className="rounded-3xl bg-primary text-white font-semibold text-2xl 2xl:text-3xl drop-shadow-2xl"
         >
            <div className="w-40">{card}</div>
         </motion.div>
      </div>
   );
}
