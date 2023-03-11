import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   simple?: boolean;
   outline?: boolean;
   children: React.ReactNode;
};

export default function NavLink({ simple, outline, children }: Props) {
   const [isHovering, setIsHovering] = useState<boolean>(false);

   return simple ? (
      <motion.button
         onHoverStart={() => setIsHovering(true)}
         onHoverEnd={() => setIsHovering(false)}
         className="relative overflow-hidden"
      >
         <span>{children}</span>
         <AnimatePresence>
            {isHovering && (
               <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.2 }}
                  className="absolute w-full h-[2px] bottom-0 left-0 bg-orange-700"
               ></motion.div>
            )}
         </AnimatePresence>
      </motion.button>
   ) : (
      <motion.button
         onHoverStart={() => setIsHovering(true)}
         onHoverEnd={() => setIsHovering(false)}
         className={`w-28 h-10 rounded-full ${
            outline
               ? "border border-orange-700 relative overflow-hidden"
               : "bg-orange-700 text-white"
         }`}
      >
         <span>{children}</span>
         <AnimatePresence>
            {isHovering && outline && (
               <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.2 }}
                  className="absolute w-full h-full top-0 left-0 bg-orange-700 -z-10"
               ></motion.div>
            )}
         </AnimatePresence>
      </motion.button>
   );
}
