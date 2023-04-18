import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
};

export default function CloseFilterButton({ onClick }: Props) {
   return (
      <div className="w-max overflow-hidden h-full">
         <motion.button
            onClick={onClick}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="grid place-content-center h-full aspect-square"
         >
            <span className="material-icons">close</span>
         </motion.button>
      </div>
   );
}
