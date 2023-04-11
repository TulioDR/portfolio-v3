import useLanguageContext from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import LanguageOptionMobile from "./LanguageOptionMobile";

export default function TranslateButtonMobile() {
   const { isEnglish, setIsEnglish } = useLanguageContext();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggleIsOpen = () => setIsOpen((prev) => !prev);

   const selectEn = () => {
      setIsEnglish(true);
      setIsOpen(false);
   };
   const selectEs = () => {
      setIsEnglish(false);
      setIsOpen(false);
   };
   return (
      <>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100vh" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed top-0 left-0 w-full text-white bg-main-orange shadow-xl -z-10 overflow-hidden"
               >
                  <div className="h-screen w-full grid place-content-center">
                     <ul className="flex flex-col items-center space-y-5">
                        <LanguageOptionMobile
                           onClick={selectEn}
                           isEnglish={isEnglish}
                           isPreEnglish={true}
                        >
                           English
                        </LanguageOptionMobile>
                        <LanguageOptionMobile
                           onClick={selectEs}
                           isEnglish={isEnglish}
                           isPreEnglish={false}
                        >
                           Español
                        </LanguageOptionMobile>
                     </ul>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
         <button
            onClick={toggleIsOpen}
            className={`h-14 aspect-square rounded-full  text-white grid place-content-center duration-300 ${
               isOpen ? "bg-main-primary" : "bg-main-orange"
            }`}
         >
            <span className="material-icons">translate</span>
         </button>
      </>
   );
}
