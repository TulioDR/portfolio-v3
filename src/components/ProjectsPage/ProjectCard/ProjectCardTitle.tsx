import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isFinished: boolean;
};

export default function ProjectCardTitle({ children, isFinished }: Props) {
   return (
      <motion.div
         className={`absolute w-full bottom-0 bg-gradient-to-t from-black to-transparent px-7 pb-7 pt-20 pointer-events-none group-hover:opacity-0 duration-300`}
      >
         <motion.div
            layout="position"
            className="text-3xl font-bold text-center text-white"
         >
            <div>{children}</div>
            <div>{!isFinished && <div>(Coming Soon)</div>}</div>
         </motion.div>
      </motion.div>
   );
}
