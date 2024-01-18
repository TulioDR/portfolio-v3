import useLanguageContext from "@/context/LanguageContext";
import { motion, MotionValue, useTransform } from "framer-motion";

interface Props {
   scroll: MotionValue<number>;
}

export default function AboutCardDesktop({ scroll }: Props) {
   const width = useTransform(scroll, [0.25, 0.5], ["100%", "25%"]);

   const height = useTransform(
      scroll,
      [0.25, 0.5],
      ["calc(100% - 0rem)", "calc(100% - 5rem)"]
   );
   const borderRadius = useTransform(scroll, [0.25, 0.5], [0, 24]);
   const marginRight = useTransform(scroll, [0.25, 0.5], [0, 80]);
   const padding = useTransform(
      scroll,
      [0.25, 0.5],
      ["150px 250px", "56px 40px"]
   );

   const { currentLanguage } = useLanguageContext();
   const { card } = currentLanguage.about;
   return (
      <div className="hidden lg:flex items-center justify-end absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <motion.div
            style={{
               height,
               width,
               borderRadius,
               padding,
               marginRight,
            }}
            className="rounded-3xl bg-primary text-white font-semibold text-2xl 2xl:text-3xl z-10"
         >
            <div className="w-full h-full text-5xl">About Me</div>
         </motion.div>
      </div>
   );
}
