import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   img: StaticImageData;
   alt: string;
};

export default function ProjectImage({ alt, img }: Props) {
   return (
      <div className="w-full aspect-video relative flex-shrink-0">
         <Image src={img} alt={alt} fill sizes="100%" />
      </div>
   );
}
