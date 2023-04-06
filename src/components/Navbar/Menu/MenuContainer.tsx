import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
   children: ReactNode;
   isMenuOpen: boolean;
};

export default function MenuContainer({ children, isMenuOpen }: Props) {
   return (
      <motion.aside
         className={`fixed left-0 top-0 z-10 text-white w-full overflow-hidden flex duration-500 ${
            isMenuOpen ? "h-screen" : "h-0"
         }`}
      >
         <div className="w-full h-screen bg-gradient-to-br from-orange-900 to-main-orange">
            <motion.div className="relative h-full w-full flex flex-col">
               {children}
            </motion.div>
         </div>
      </motion.aside>
   );
}
