import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
};

export default function SendButton({ onClick }: Props) {
   return (
      <motion.button
         whileTap={{ scale: 0.9 }}
         className="py-2 px-7 text-white bg-orange-700"
         onClick={onClick}
      >
         Send
      </motion.button>
   );
}
