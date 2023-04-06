import Image from "next/image";
import shield from "@/assets/images/logo/shield.svg";

type Props = {};

export default function ShieldLogo({}: Props) {
   return (
      <div className="card-logo mx-auto aspect-[9/16] w-2/3 sm:w-52 p-2 bg-gradient-to-b from-red-900 to-yellow-700 rounded-2xl shadow-xl">
         <div className="bg-main-primary w-full h-full rounded-2xl grid place-content-center p-5">
            <Image src={shield} alt="shield" className="w-full" />
         </div>
      </div>
   );
}
