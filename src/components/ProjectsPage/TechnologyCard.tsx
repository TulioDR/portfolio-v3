import Image from "next/image";
import tailwind from "@/assets/images/tailwind.svg";

type Props = {
   name: string;
};

export default function TechnologyCard({ name }: Props) {
   return (
      <div className="h-10 w-full cursor-pointer flex items-center rounded-full overflow-hidden hover:shadow-lg hover:bg-slate-800 hover:text-white">
         <div className="aspect-square h-full flex-shrink-0 p-2">
            <div className="relative h-full w-full">
               <Image src={tailwind} alt="logo" fill sizes="100%" />
            </div>
         </div>
         <div className="font-semibold">{name}</div>
      </div>
   );
}
