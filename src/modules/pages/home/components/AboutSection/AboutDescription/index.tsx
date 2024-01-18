import { motion } from "framer-motion";
type Props = {};

export default function AboutDescription({}: Props) {
   return (
      <motion.div className="flex flex-col h-full w-3/4 px-20 py-10">
         <div className="w-full h-full pr-10">
            <div className="w-full h-full grid grid-cols-2 gap-10">
               <div className="w-full rounded-3xl bg-gray-400 row-span-2"></div>
               <div className="w-full rounded-3xl bg-gray-500"></div>
               <div className="w-full rounded-3xl bg-gray-600"></div>
            </div>
         </div>
         {/* <AboutTitle scrollYProgress={scrollYProgress} /> */}
      </motion.div>
   );
}
