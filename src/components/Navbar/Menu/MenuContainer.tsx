import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function MenuContainer({ children }: Props) {
   return (
      <motion.aside
         initial={{ height: "0", bottom: 0, alignItems: "flex-end" }}
         animate={{ height: "100vh" }}
         exit={{ height: "0", top: 0, alignItems: "flex-start" }}
         transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
         className={`fixed left-0 z-20 text-white w-full overflow-hidden flex`}
      >
         <div className="w-full h-screen bg-gradient-to-br from-orange-900 to-orange-600">
            <motion.div className="relative h-full w-full flex flex-col">
               {children}
            </motion.div>
         </div>
      </motion.aside>
   );
}
