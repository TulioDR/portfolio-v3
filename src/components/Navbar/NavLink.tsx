import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   simple?: boolean;
   outline?: boolean;
   children: React.ReactNode;
   onClick: () => void;
};

export default function NavLink({ simple, outline, children, onClick }: Props) {
   const [isHovering, setIsHovering] = useState<boolean>(false);

   return simple ? (
      <motion.button
         onClick={onClick}
         onHoverStart={() => setIsHovering(true)}
         onHoverEnd={() => setIsHovering(false)}
         className="relative overflow-hidden pointer-events-auto"
      >
         {children}
         <AnimatePresence>
            {isHovering && (
               <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.2 }}
                  className="absolute w-full h-[2px] bottom-0 left-0 bg-main-orange"
               ></motion.div>
            )}
         </AnimatePresence>
      </motion.button>
   ) : (
      <motion.button
         onClick={onClick}
         onHoverStart={() => setIsHovering(true)}
         onHoverEnd={() => setIsHovering(false)}
         className={`w-28 h-10 rounded-full pointer-events-auto ${
            outline
               ? "border border-main-orange relative overflow-hidden"
               : "bg-main-orange text-white"
         }`}
      >
         {children}
         <AnimatePresence>
            {isHovering && outline && (
               <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.2 }}
                  className="absolute w-full h-full top-0 left-0 bg-main-orange -z-10"
               ></motion.div>
            )}
         </AnimatePresence>
      </motion.button>
   );
}
