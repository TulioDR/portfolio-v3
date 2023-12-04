import useLanguageContext from "@/context/LanguageContext";
import React from "react";
import { motion } from "framer-motion";

type Props = {
   resetFilter: () => void;
};

export default function FilterBodyHeader({ resetFilter }: Props) {
   const { currentLanguage } = useLanguageContext();
   const { title, reset } = currentLanguage.projects.filer;
   return (
      <div className="w-full flex items-center justify-between">
         <div className="text-lg sm:text-xl font-medium">{title}</div>
         <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={resetFilter}
            className="rounded-full h-10 px-4 text-black bg-white text-sm"
         >
            {reset}
         </motion.button>
      </div>
   );
}
