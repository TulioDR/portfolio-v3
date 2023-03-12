import Image from "next/image";
import moon from "@/assets/images/logo/moon.svg";
import eagle from "@/assets/images/logo/eagle.svg";
import { motion, useAnimationControls } from "framer-motion";

export default function HomeLogo() {
   const controls = useAnimationControls();
   const handleClick = () => {
      controls.start({
         x: "-75%",
         y: "-75%",
         transition: { duration: 1, ease: "easeInOut" },
      });
   };
   return (
      <div
         onClick={handleClick}
         className="absolute top-20 right-0 overflow-hidden rounded-full"
      >
         <div className="relative rounded-full overflow-hidden">
            <div className="relative w-80 aspect-square rounded-full overflow-hidden border border-slate-900">
               <Image src={moon} alt="moon" fill sizes="100%" />
            </div>
         </div>
         <motion.div
            initial={{ x: 0, y: 0 }}
            animate={controls}
            className="bg-slate-900 h-full w-full rounded-full absolute top-0 left-0"
         ></motion.div>
         <div className="absolute top-0 left-0 h-full w-full">
            <div className="relative w-40 h-full mx-auto">
               <Image src={eagle} alt="eagle" fill sizes="100%" />
            </div>
         </div>
      </div>
   );
}
