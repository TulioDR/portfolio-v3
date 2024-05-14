import SkillModel from "@/models/SkillModel";
import Image from "next/image";
import React from "react";

type Props = {
   skill: SkillModel;
};

export default function LearningCard({ skill }: Props) {
   return (
      <div className="w-full flex-shrink-0 aspect-square flex flex-col items-center justify-center rounded-2xl bg-gray-400">
         <div className="relative w-1/2 aspect-square">
            <Image
               src={skill.logo}
               alt={skill.name}
               fill
               sizes="100%"
               className="object-contain"
            />
         </div>
         <span className="text-black font-semibold text-sm md:text-base lg:text-xl">
            {skill.name}
         </span>
      </div>
   );
}
