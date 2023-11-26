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
      <div className="w-full flex items-center justify-between mb-5">
         <div className="text-3xl font-medium">{title}</div>
         <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={resetFilter}
            className="rounded-xl h-10 px-4 text-white bg-main-primary text-sm"
         >
            {reset}
         </motion.button>
      </div>
   );
}
