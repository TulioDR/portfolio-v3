import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
   name: string;
   logo: StaticImageData;
   addTech: () => void;
   removeTech: () => void;
   isSelected: boolean;
};

export default function TechnologyCard({
   name,
   logo,
   isSelected,
   addTech,
   removeTech,
}: Props) {
   return (
      <motion.li
         onTap={isSelected ? removeTech : addTech}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className={`aspect-square list-none cursor-pointer rounded-xl ${
            isSelected ? "bg-main-primary text-white" : "bg-white text-black"
         }`}
      >
         <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="aspect-square flex items-center justify-center w-1/2 relative">
               <Image
                  src={logo}
                  alt={name}
                  fill
                  sizes="100%"
                  className="object-contain"
               />
            </div>
            <div className="font-light text-xs sm:text-sm text-center">
               {name}
            </div>
         </div>
      </motion.li>
   );
}
