import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function FilterBodyContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ height: 0 }}
         animate={{ height: "auto" }}
         exit={{ height: 0 }}
         transition={{ duration: 0.4 }}
         className="overflow-hidden w-full"
      >
         <div className="w-full h-full p-3 sm:p-5 pt-0 sm:pt-0">
            <div className="w-full h-full p-3 sm:p-5 bg-main-white rounded-xl overflow-hidden">
               {children}
            </div>
         </div>
      </motion.div>
   );
}
