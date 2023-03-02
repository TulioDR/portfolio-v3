import Image from "next/image";
import logo from "@/assets/images/tailwind.svg";
import { motion } from "framer-motion";

type Props = {};

export default function SkillCard({}: Props) {
   return (
      <motion.div
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="aspect-square rounded-2xl shadow-xl bg-white flex flex-col items-center justify-center p-5 flex-grow-0 cursor-pointer"
      >
         <div className="aspect-square relative w-1/2">
            <Image src={logo} alt="logo" fill sizes="100%" />
         </div>
         <div className="text-slate-700 font-bold text-sm md:text-base">
            Tailwind CSS
         </div>
      </motion.div>
   );
}
