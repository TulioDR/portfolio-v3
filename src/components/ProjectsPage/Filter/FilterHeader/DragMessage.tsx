import { motion } from "framer-motion";

type Props = {};

export default function DragMessage({}: Props) {
   return (
      <div className="overflow-hidden">
         <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className=""
         >
            Drag Me!
         </motion.div>
      </div>
   );
}
