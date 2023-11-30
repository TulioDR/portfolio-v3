import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
};

export default function CloseTranslateMobile({ onClick }: Props) {
   return (
      <motion.button
         onClick={onClick}
         initial={{ y: "100%" }}
         animate={{ y: 0 }}
         exit={{ y: "100%" }}
         transition={{ duration: 0.2 }}
         className="h-14 w-14 flex items-center justify-center"
      >
         <span className="material-icons">close</span>
      </motion.button>
   );
}
