import Image from "next/image";
import eagle from "@/assets/images/logo/eagle.svg";
import eagleWhite from "@/assets/images/logo/eagle-white.svg";
import { AnimatePresence } from "framer-motion";

type Props = {
   black?: true;
};

export default function NavLogo({ black }: Props) {
   return (
      <div className="flex flex-col items-center h-full justify-center">
         <AnimatePresence>
            <div className="relative">
               <Image
                  src={black ? eagle : eagleWhite}
                  alt="eagle"
                  className="h-10 w-auto"
               />
            </div>
         </AnimatePresence>
         <div className="flex flex-col items-center -mt-4">
            <span className="font-black uppercase">Sic Parvis</span>
            <span className="text-xs -mt-2 uppercase tracking-widest">
               Magna
            </span>
         </div>
      </div>
   );
}
