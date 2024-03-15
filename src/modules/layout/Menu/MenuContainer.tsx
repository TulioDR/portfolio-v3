import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MenuContainer({ children }: Props) {
   const duration = 0.8;
   const ease = [0.7, 0, 0.2, 1];

   return (
      <motion.div
         initial={{ x: "-100%" }}
         animate={{ x: "0%" }}
         exit={{ x: "-100%" }}
         transition={{ duration }}
         className="w-screen h-screen text-white fixed top-0 left-0 z-40  overflow-hidden"
      >
         <motion.div
            initial={{ width: "0%", x: "0%" }}
            animate={{ width: "100%", x: "100%" }}
            exit={{ width: "0%", x: "0%" }}
            transition={{ duration, ease }}
            className="bg-gray-200 h-full absolute top-0 right-0 z-50"
         />
         <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration }}
            className="w-full h-full relative p-20 bg-gradient-to-tl from-primary to-secondary"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
