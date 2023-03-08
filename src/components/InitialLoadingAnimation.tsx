import { motion } from "framer-motion";

export default function InitialLoadingAnimation() {
   return (
      <motion.div
         initial={{ y: 0 }}
         animate={{ y: "-100%" }}
         transition={{ duration: 2, ease: "easeInOut" }}
         className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black text-white z-20"
      >
         Initial Loading
      </motion.div>
   );
}
