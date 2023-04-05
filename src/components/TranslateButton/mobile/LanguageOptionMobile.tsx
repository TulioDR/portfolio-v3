import { AnimatePresence, motion } from "framer-motion";

type Props = {
   isEnglish: boolean;
   onClick: () => void;
   children: React.ReactNode;
   isPreEnglish: boolean;
};

export default function LanguageOptionMobile({
   children,
   onClick,
   isEnglish,
   isPreEnglish,
}: Props) {
   return (
      <li
         onClick={onClick}
         className="text-xl sm:text-2xl cursor-pointer font-bold tracking-wider relative pb-1"
      >
         {children}
         <AnimatePresence>
            {isEnglish === isPreEnglish && (
               <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  className="absolute h-1 bg-primary"
               ></motion.div>
            )}
         </AnimatePresence>
      </li>
   );
}
