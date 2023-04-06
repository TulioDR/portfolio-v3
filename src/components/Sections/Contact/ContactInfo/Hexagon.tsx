import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface Props {
   children: React.ReactNode;
   src?: StaticImageData;
   onClick?: () => void;
}

export default function Hexagon({ children, src, onClick }: Props) {
   return (
      <motion.div
         whileTap={{ scale: 0.9 }}
         onTap={onClick}
         className="bg-main-orange w-[100px] h-[125px] cursor-pointer"
         style={{
            clipPath:
               "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",
         }}
      >
         <div className="flex flex-col items-center justify-center text-center w-full h-full">
            {src && <Image src={src} alt="logo" className="w-1/3 mb-1" />}
            <div className="text-sm w-min">{children}</div>
         </div>
      </motion.div>
   );
}
