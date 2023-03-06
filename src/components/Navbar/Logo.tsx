import Image from "next/image";
import eagle from "@/assets/images/logo/eagle.svg";

type Props = {};

export default function Logo({}: Props) {
   return (
      <div className="flex flex-col items-center h-full justify-center">
         <div className="relative">
            <Image src={eagle} alt="eagle" className="h-10" />
         </div>
         <div className="flex flex-col items-center -mt-4">
            <span className="text-lg font-black uppercase">Sic Parvis</span>
            <span className="text-xs -mt-2 uppercase tracking-widest">
               Magna
            </span>
         </div>
      </div>
   );
}
