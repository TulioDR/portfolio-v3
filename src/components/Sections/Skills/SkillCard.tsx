import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
   name: string;
   logo: StaticImageData;
   link: string;
};

export default function SkillCard({ logo, name, link }: Props) {
   const onTap = () => {
      console.log(link);
   };
   return (
      <motion.div
         onTap={onTap}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="aspect-square rounded-2xl shadow-xl bg-white flex flex-col items-center justify-center p-2 sm:p-5 flex-grow-0 cursor-pointer"
      >
         <div className="aspect-square relative w-1/2 flex items-center">
            <Image src={logo} alt={name} />
         </div>
         <div className="text-slate-700 text-xs sm:text-sm md:text-base">
            {name}
         </div>
      </motion.div>
   );
}
