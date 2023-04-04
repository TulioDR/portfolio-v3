import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
};

export default function SendButton({ onClick }: Props) {
   return (
      <motion.button
         whileTap={{ scale: 0.9 }}
         className="h-11 px-7 text-white bg-orange-700 flex items-center space-x-2"
         onClick={onClick}
      >
         <span className="material-icons">send</span>
         <span>Send</span>
      </motion.button>
   );
}
