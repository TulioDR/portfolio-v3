import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
   name: string;
   logo: StaticImageData;
   onClick: () => void;
};

export default function TechnologyCard({ name, logo, onClick }: Props) {
   return (
      <motion.div
         layout
         onClick={onClick}
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.3, duration: 0.3 },
         }}
         exit={{
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.3 },
         }}
         className="h-10 w-full cursor-pointer flex items-center rounded-full overflow-hidden hover:shadow-lg hover:bg-slate-800 group"
      >
         <div className="aspect-square h-full flex-shrink-0 p-2 flex items-center justify-center">
            <Image src={logo} alt={name} />
         </div>
         <div className="font-semibold text-gray-800 group-hover:text-white">
            {name}
         </div>
      </motion.div>
   );
}
