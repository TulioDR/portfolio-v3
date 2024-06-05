import ProjectModel from "@/models/ProjectModel";
import React from "react";

type Props = {
   isSelected: boolean;
   project: ProjectModel;
};

export default function SelectorTitle({ isSelected, project }: Props) {
   return (
      <div
         className={`absolute top-0 left-0 w-full h-full flex items-center justify-center duration-300 ${
            isSelected ? "bg-black/80" : "bg-black/60 group-hover:bg-black/80"
         }`}
      >
         <h4
            className={` text-center text-lg font-semibold  duration-300 ${
               isSelected ? "text-accent" : "text-white group-hover:text-accent"
            }`}
         >
            {project.title}
         </h4>
      </div>
   );
}
