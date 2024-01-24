import useLanguageContext from "@/context/LanguageContext";
import { motion, MotionValue, useTransform } from "framer-motion";
import MainButton from "../../MainButton";

interface Props {
   scroll: MotionValue<number>;
}

export default function AboutCardDesktop({ scroll }: Props) {
   const width = useTransform(scroll, [0, 1], ["100%", "25%"]);

   const height = useTransform(
      scroll,
      [0, 1],
      ["calc(100% - 0rem)", "calc(100% - 10rem)"]
   );
   const borderRadius = useTransform(scroll, [0, 1], [0, 24]);
   const marginRight = useTransform(scroll, [0, 1], [0, 80]);
   const padding = useTransform(scroll, [0, 1], ["150px 250px", "56px 40px"]);

   const { currentLanguage } = useLanguageContext();
   const { card } = currentLanguage.about;
   return (
      <div className="hidden lg:flex items-center justify-end absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
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
            <div className="w-full h-full grid place-content-center z-50">
               <MainButton light>About me</MainButton>
            </div>
         </motion.div>
      </div>
   );
}
