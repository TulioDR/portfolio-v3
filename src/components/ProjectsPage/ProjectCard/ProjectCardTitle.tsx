import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isFinished: boolean;
};

export default function ProjectCardTitle({ children, isFinished }: Props) {
   return (
      <motion.div
         className={`absolute w-full bottom-0 bg-gradient-to-t from-black to-transparent px-2 sm:px-3 md:px-5 lg:px-6 pb-2 pt-20 pointer-events-none group-hover:opacity-0 duration-300`}
      >
         <motion.div
            layout="position"
            className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl md:font-semibold lg:font-bold text-center text-white"
         >
            <div>{children}</div>
            <div>{!isFinished && <div>(Coming Soon)</div>}</div>
         </motion.div>
      </motion.div>
   );
}
