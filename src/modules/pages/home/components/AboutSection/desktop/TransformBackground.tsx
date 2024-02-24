import useLanguageContext from "@/context/LanguageContext";
import { motion, MotionValue, useTransform } from "framer-motion";
import ScrollIndicator from "../../ScrollIndicator";

interface Props {
   scrollTitle: MotionValue<number>;
   scroll: MotionValue<number>;
   lastScroll: MotionValue<number>;
}

export default function TransformBackground({
   scrollTitle,
   scroll,
   lastScroll,
}: Props) {
   const width = useTransform(
      scroll,
      [0, 1],
      ["calc(100% - 0rem)", "calc(33% - 3.89rem)"]
   );
   const height = useTransform(
      scroll,
      [0, 1],
      ["calc(100% - 0rem)", "calc(100% - 7.5rem)"]
   );
   const borderRadius = useTransform(scroll, [0, 1], [0, 4]);
   const marginRight = useTransform(scroll, [0, 1], [0, 80]);
   const marginBottom = useTransform(scroll, [0, 1], [0, 40]);
   const paddingTop = useTransform(scroll, [0, 1], ["5rem", "2.5rem"]);

   const y = useTransform(scrollTitle, [0, 1], ["100%", "0%"]);

   const { currentLanguage } = useLanguageContext();
   const { card } = currentLanguage.about;

   return (
      <div className="hidden lg:flex items-end z-10 justify-end absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
         <motion.div
            style={{
               height,
               width,
               borderRadius,
               paddingTop,
               marginRight,
               marginBottom,
            }}
            className="bg-primary text-white flex flex-col justify-between shadow-xl"
         >
            <div className="overflow-hidden">
               <motion.div
                  style={{ y }}
                  className="font-semibold text-4xl xl:text-5xl 2xl:text-6xl text-center uppercase"
               >
                  About me
               </motion.div>
            </div>
            <div className="pb-10 mx-auto">
               <ScrollIndicator scroll={lastScroll} />
            </div>
         </motion.div>
      </div>
   );
}
