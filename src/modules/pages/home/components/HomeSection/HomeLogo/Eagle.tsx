import Image from "next/image";
import eagle from "@/assets/images/logo/eagle.svg";
type Props = {};

export default function Eagle({}: Props) {
   return (
      <div data-depth="0.8" className="absolute top-0 left-0 h-full w-full">
         <div className="relative w-1/2 h-full mx-auto">
            <Image src={eagle} alt="eagle" fill sizes="100%" />
         </div>
      </div>
   );
}
