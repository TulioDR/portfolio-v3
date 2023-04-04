import { motion } from "framer-motion";

export default function SendButton() {
   return (
      <motion.button
         whileTap={{ scale: 0.9 }}
         className="h-11 px-7 text-white bg-orange-700 flex items-center space-x-2"
         type="submit"
      >
         <span className="material-icons">send</span>
         <span>Send</span>
      </motion.button>
   );
}
