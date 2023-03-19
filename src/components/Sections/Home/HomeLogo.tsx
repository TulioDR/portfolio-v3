import Image from "next/image";
import moon from "@/assets/images/logo/moon.svg";
import eagle from "@/assets/images/logo/eagle.svg";
import cloud1 from "@/assets/images/logo/cloud1.svg";
import cloud2 from "@/assets/images/logo/cloud2.svg";
import cloud3 from "@/assets/images/logo/cloud3.svg";
import cloud4 from "@/assets/images/logo/cloud4.svg";
import cloud5 from "@/assets/images/logo/cloud5.svg";
import { motion, useAnimationControls } from "framer-motion";

export default function HomeLogo() {
   const moonControls = useAnimationControls();
   const cloudControls = useAnimationControls();
   const handleClick = () => {
      moonControls.start({
         x: "-75%",
         y: "-75%",
         transition: { duration: 1, ease: "easeInOut" },
      });
      cloudControls.start({
         opacity: 1,
         transition: { duration: 1, ease: "easeInOut" },
      });
   };
   return (
      <div
         onClick={handleClick}
         className="absolute top-40 right-20 rounded-full w-1/2 lg:w-96 2xl:w-[30rem]"
      >
         <div className="relative w-full">
            <div className="relative rounded-full overflow-hidden">
               <div className="relative aspect-square rounded-full overflow-hidden border border-slate-900">
                  <Image src={moon} alt="moon" fill sizes="100%" />
               </div>
            </div>
            <motion.div
               initial={{ x: 0, y: 0 }}
               animate={moonControls}
               className="bg-[#161B21] h-full w-full rounded-full absolute top-0 left-0"
            ></motion.div>
            <div className="absolute top-0 left-0 h-full w-full">
               <div className="relative w-1/2 h-full mx-auto">
                  <Image src={eagle} alt="eagle" fill sizes="100%" />
               </div>
            </div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={cloudControls}
               className="absolute top-0 left-0 w-2/3 -translate-x-1/3"
            >
               <Image src={cloud1} alt="cloud1" />
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={cloudControls}
               className="absolute top-0 right-0 w-2/3 translate-x-1/4 -translate-y-1/3"
            >
               <Image src={cloud2} alt="cloud2" />
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={cloudControls}
               className="absolute top-1/2 right-0 w-2/3 translate-x-1/2 -translate-y-1/2"
            >
               <Image src={cloud5} alt="cloud3" />
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={cloudControls}
               className="absolute bottom-0 right-0 w-2/3 translate-x-1/4 translate-y-1/3"
            >
               <Image src={cloud4} alt="cloud4" />
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={cloudControls}
               className="absolute bottom-0 left-0 w-2/3 -translate-x-1/2"
            >
               <Image src={cloud3} alt="cloud5" />
            </motion.div>
         </div>
      </div>
   );
}
