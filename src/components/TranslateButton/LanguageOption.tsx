import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   src: StaticImageData;
   alt: string;
};

export default function LanguageOption({ src, alt }: Props) {
   return (
      <div className="w-1/2 h-full flex-shrink-0 relative">
         <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            className="object-cover"
         />
      </div>
   );
}
