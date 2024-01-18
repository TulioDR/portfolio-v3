import { AnimationControls, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
type Props = {
   cloudControls: AnimationControls;
   src: StaticImageData;
   alt: string;
   position: string;
   flex?: "items-center" | "items-end";
};

export default function Cloud({
   cloudControls,
   src,
   alt,
   position,
   flex,
}: Props) {
   return (
      <motion.div
         data-depth="0.6"
         initial={{ opacity: 0 }}
         animate={cloudControls}
         className="w-full h-full"
      >
         <div className={`w-full h-full ${flex ? `flex ${flex}` : ""}`}>
            <Image src={src} alt={alt} className={`w-2/3 ${position}`} />
         </div>
      </motion.div>
   );
}
