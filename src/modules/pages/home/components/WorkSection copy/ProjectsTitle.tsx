import { motion } from "framer-motion";

import useLanguageContext from "@/context/LanguageContext";

type Props = {};

export default function ProjectsTitle({}: Props) {
   const { currentLanguage } = useLanguageContext();
   const { title } = currentLanguage.projects;
   return (
      <motion.h1 className="text-white font-bold text-8xl absolute left-10 top-1/2 -translate-y-1/2 uppercase">
         <span className="bg-gradient-to-br from-orange-900 to-orange-700 bg-clip-text text-transparent">
            {title}
         </span>
      </motion.h1>
   );
}
