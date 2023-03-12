import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MenuOptionsContainer({ children }: Props) {
   const container = {
      hidden: { opacity: 1 },
      visible: {
         transition: {
            delayChildren: 0.35,
            staggerChildren: 0.05,
         },
      },
   };

   return (
      <motion.ul
         variants={container}
         initial="hidden"
         animate="visible"
         className="flex flex-col justify-center items-center h-full"
      >
         {children}
      </motion.ul>
   );
}
