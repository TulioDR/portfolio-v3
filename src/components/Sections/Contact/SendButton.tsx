import { motion } from "framer-motion";

type Props = {};

export default function SendButton({}: Props) {
   return (
      <motion.button
         whileTap={{ scale: 0.9 }}
         className="py-2 px-7 text-white bg-orange-700"
      >
         Send
      </motion.button>
   );
}