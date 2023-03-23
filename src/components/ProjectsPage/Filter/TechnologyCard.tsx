import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
   name: string;
   logo: StaticImageData;
};

export default function TechnologyCard({ name, logo }: Props) {
   return (
      <motion.li
         layout
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.9 }}
         transition={{ duration: 0.3 }}
         className="h-10 mr-3 mb-3 float-left pr-4 cursor-pointer flex items-center rounded-full overflow-hidden shadow-lg bg-white hover:bg-slate-800 group"
      >
         <div className="aspect-square h-full flex-shrink-0 p-2 flex items-center justify-center">
            <Image src={logo} alt={name} />
         </div>
         <div className="font-semibold text-gray-800 group-hover:text-white">
            {name}
         </div>
      </motion.li>
   );
}
