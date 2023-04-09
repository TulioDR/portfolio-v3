import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
   name: string;
   logo: StaticImageData;
   onClick: () => void;
};

export default function TechnologyCard({ name, logo, onClick }: Props) {
   return (
      <motion.li
         layoutId={name}
         onClick={onClick}
         transition={{ duration: 0.4 }}
         className="h-10 mr-2 mb-2 ml-auto pr-4 float-left list-none cursor-pointer rounded-full shadow-lg bg-white hover:bg-main-primary group"
      >
         <div className="w-full h-full flex items-center">
            <div className="aspect-square h-full p-2 flex items-center justify-center">
               <Image src={logo} alt={name} />
            </div>
            <div className="font-light text-main-primary group-hover:text-white">
               {name}
            </div>
         </div>
      </motion.li>
   );
}
