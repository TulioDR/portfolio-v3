import ProjectModel from "@/models/ProjectModel";
import React from "react";
import { MotionValue } from "framer-motion";
import MobileWorkImg from "./MobileWorkImg";

type Props = {
   GAP: number;
   project: ProjectModel;
   objectPosition: MotionValue<string>;
};

export default function MobileWorkCard({
   GAP,
   project,
   objectPosition,
}: Props) {
   return (
      <div
         style={{ height: `calc(100vh - ${GAP + GAP / 2}px)` }}
         className="w-full flex flex-col gap-5"
      >
         <MobileWorkImg objectPosition={objectPosition} project={project} />
         <div className="text-center flex-col flex items-center gap-2">
            <div className="text-3xl text-white">{project.title}</div>
            <button className="rounded-full h-10 max-w-min px-10 text-black bg-gray-200 text-sm">
               Discover
            </button>
         </div>
      </div>
   );
}
