import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import eagleBorder from "@/assets/images/logo/eagle-border.svg";

export default function InitialLoadingAnimation() {
   const removeLoadingScreen = useAnimationControls();
   const onLogoFillComplete = () => {
      removeLoadingScreen.start({
         y: "-110%",
         transition: { duration: 2, ease: "easeInOut" },
      });
   };

   return (
      <motion.div
         initial={{ y: 0 }}
         animate={removeLoadingScreen}
         className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black text-white z-20"
      >
         <div className="relative w-40 overflow-hidden">
            <motion.div
               initial={{ y: "110%" }}
               animate={{ y: 0 }}
               transition={{ duration: 2, ease: "easeInOut" }}
               onAnimationComplete={onLogoFillComplete}
               className="absolute w-full h-full top-0 left-0 bg-orange-600"
            ></motion.div>
            <div className="relative w-full">
               <Image
                  src={eagleBorder}
                  alt="eagle-template"
                  className="w-full"
                  priority
               />
            </div>
         </div>
      </motion.div>
   );
}
