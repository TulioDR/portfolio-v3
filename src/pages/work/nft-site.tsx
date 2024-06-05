import Image from "next/image";
import React from "react";
import projects from "@/assets/projects";

type Props = {};

export default function NftSite({}: Props) {
   return (
      <div className="w-screen h-screen bg-blue-300 relative">
         <Image
            src={projects[0].img}
            alt={projects[0].link}
            fill
            sizes="100%"
            quality={100}
            className="object-cover"
         />
      </div>
   );
}
