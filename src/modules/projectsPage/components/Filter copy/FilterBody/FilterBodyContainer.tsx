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
         transition={{ duration: 0.3 }}
         className="overflow-hidden w-full"
      >
         <div className="w-full h-full">
            <div className="w-full h-full p-3 sm:p-5 overflow-hidden">
               {children}
            </div>
         </div>
      </motion.div>
   );
}