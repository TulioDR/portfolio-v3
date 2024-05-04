import useLanguageContext from "@/context/LanguageContext";
import {
   motion,
   MotionValue,
   useMotionValueEvent,
   useTransform,
} from "framer-motion";
import { useState } from "react";

interface Props {
   firstScrollView: MotionValue<number>;
   scroll: MotionValue<number>;
}

export default function TransformBackground({
   firstScrollView,
   scroll,
}: Props) {
   const width = useTransform(
      scroll,
      [0, 1],
      ["calc(100% - 0rem)", "calc(100% - 160px)"]
   );
   const height = useTransform(
      scroll,
      [0, 1],
      ["calc(100% - 0rem)", "calc(100% - 136px)"]
   );
   const borderRadius = useTransform(scroll, [0, 1], [0, 24]);
   const marginRight = useTransform(scroll, [0, 1], [0, 40]);
   const marginBottom = useTransform(scroll, [0, 1], [0, 40]);
   const paddingTop = useTransform(scroll, [0, 1], ["5rem", "2.5rem"]);

   const { currentLanguage } = useLanguageContext();
   const { card } = currentLanguage.about;

   const [hideCard, setHideCard] = useState<boolean>(false);
   useMotionValueEvent(scroll, "change", (current) => {
      if (current >= 1) setHideCard(true);
      else setHideCard(false);
   });

   return (
      <div
         className={`hidden lg:flex items-end justify-end absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none ${
            hideCard ? "z-0" : "z-50"
         }`}
      >
         <motion.div
            style={{
               height,
               width,
               borderRadius,
               paddingTop,
               marginRight,
               marginBottom,
            }}
            className="bg-primary text-white flex flex-col justify-between shadow-xl relative"
         >
            <div className="absolute top-0 left-0 w-full flex justify-center">
               <div className="bg-zinc-700 h-14 w-96"></div>
            </div>
         </motion.div>
      </div>
   );
}
