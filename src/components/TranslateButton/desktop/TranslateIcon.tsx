import { motion } from "framer-motion";
type Props = {};

export default function TranslateIcon({}: Props) {
   return (
      <div className="w-full flex justify-end">
         <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.2 }}
            className="h-14 w-14 flex items-center justify-center"
         >
            <span className="material-icons">translate</span>
         </motion.div>
      </div>
   );
}
