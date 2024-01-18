import Image from "next/image";
import shield from "@/assets/images/logo/shield.svg";

type Props = {};

export default function ShieldLogo({}: Props) {
   return (
      <div className="card-logo cursor-pointer mx-auto aspect-[9/16] w-2/3 sm:w-52 py-2 px-1 bg-gradient-to-b from-red-900 to-yellow-700 rounded-2xl">
         <div className="bg-primary w-full h-full rounded-2xl grid place-content-center p-5">
            {/* <div className="flex flex-col gap-1">
               <Image src={shield} alt="shield" className="w-full" />
               <div className="uppercase text-white text-center">
                  Learn more about me
               </div>
            </div> */}
         </div>
      </div>
   );
}
