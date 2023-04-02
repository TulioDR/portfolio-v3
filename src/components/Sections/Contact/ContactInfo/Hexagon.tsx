type Props = { children: React.ReactNode };
import { motion } from "framer-motion";

export default function Hexagon({ children }: Props) {
   return (
      <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="bg-orange-600 w-[100px] h-[125px] grid place-content-center cursor-pointer"
         style={{
            clipPath:
               "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",
         }}
      >
         <div className="text-sm w-min flex flex-col items-center justify-center text-center">
            {children}
         </div>
      </motion.div>
   );
}
