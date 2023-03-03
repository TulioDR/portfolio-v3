import Image from "next/image";
import tailwind from "@/assets/images/tailwind.svg";

type Props = {
   name: string;
};

export default function TechnologyCard({ name }: Props) {
   return (
      <div className="h-10 rounded-full shadow-lg w-full cursor-pointer bg-white flex items-center overflow-hidden">
         <div className="aspect-square h-full flex-shrink-0 p-2">
            <div className="relative h-full w-full">
               <Image src={tailwind} alt="logo" fill sizes="100%" />
            </div>
         </div>
         <div className="text-lg font-semibold">{name}</div>
      </div>
   );
}
