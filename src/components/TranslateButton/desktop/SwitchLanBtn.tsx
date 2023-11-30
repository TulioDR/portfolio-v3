import useLanguageContext from "@/context/LanguageContext";
import { motion } from "framer-motion";
type Props = {};

export default function SwitchLanBtn({}: Props) {
   const { isEnglish, toggleLanguage } = useLanguageContext();
   return (
      <motion.button
         onClick={toggleLanguage}
         initial={{ y: "100%" }}
         animate={{ y: 0 }}
         exit={{ y: "100%" }}
         transition={{ duration: 0.2 }}
         className="h-14 flex-1 md:flex-none md:w-56 flex items-center justify-end md:justify-center min-w-max uppercase text-xs gap-2"
      >
         <div
            className={`duration-200 ${
               isEnglish ? "text-white" : "text-gray-300"
            }`}
         >
            In english
         </div>
         <div
            className={`rounded-full h-4 w-7 bg-orange-900 flex ${
               isEnglish ? "justify-start" : "justify-end"
            }`}
         >
            <motion.div
               layout
               className="bg-white rounded-full aspect-square h-full"
            />
         </div>
         <div
            className={`duration-200 ${
               isEnglish ? "text-gray-300" : "text-white"
            }`}
         >
            En español
         </div>
      </motion.button>
   );
}
