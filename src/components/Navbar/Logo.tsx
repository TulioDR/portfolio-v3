import Image from "next/image";
import eagle from "@/assets/images/logo/eagle.svg";
import eagleWhite from "@/assets/images/logo/eagle-white.svg";
import useNavbarContext from "@/context/NavbarContext";
import { AnimatePresence } from "framer-motion";

type Props = {};

export default function Logo({}: Props) {
   const { isWhite } = useNavbarContext();
   return (
      <div className="flex flex-col items-center h-full justify-center">
         <AnimatePresence>
            <div className="relative">
               <Image
                  src={isWhite ? eagleWhite : eagle}
                  alt="eagle"
                  className="h-10"
               />
            </div>
         </AnimatePresence>
         <div className="flex flex-col items-center -mt-4">
            <span className="text-lg font-black uppercase">Sic Parvis</span>
            <span className="text-xs -mt-2 uppercase tracking-widest">
               Magna
            </span>
         </div>
      </div>
   );
}
