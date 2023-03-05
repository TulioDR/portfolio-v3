import { motion } from "framer-motion";
// import useLanguageContext from "../../context/LanguageContext";

export default function MenuFooter() {
   // const { currentIdiom } = useLanguageContext();
   // const { footer1, footer2 } = currentIdiom.menu;
   return (
      <motion.div
         initial={{ y: "100%", opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{
            duration: 0.4,
            delay: 0.5,
         }}
         className="absolute bottom-8 flex flex-col sm:flex-row items-center sm:space-x-1 text-gray-300 text-xs sm:text-sm"
      >
         <div className="flex items-center">
            <span className="material-icons mx-1">copyright</span>
            <span>2022 Tulio Ruzo.</span>
         </div>
         <div className="flex items-center">
            <span>made with</span>
            <span className="material-icons mx-1">favorite</span>
            <span>from Venezuela</span>
         </div>
      </motion.div>
   );
}
