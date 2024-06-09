import ProjectModel from "@/models/ProjectModel";
import Image from "next/image";
import React, { useEffect } from "react";
import Parallax from "parallax-js";

type Props = {
   GAP: number;
   project: ProjectModel;
};

export default function MobileWorkCard({ GAP, project }: Props) {
   const sceneId = project.link + "-mobile-card";
   useEffect(() => {
      var scene = document.getElementById(sceneId);
      new Parallax(scene, {
         limitY: 0,
      });
   }, [sceneId]);
   return (
      <div
         style={{ height: `calc(100vh - ${GAP + GAP / 2}px)` }}
         className="w-full flex flex-col gap-5"
      >
         <div
            id={sceneId}
            className="w-full flex-1 border-8 border-white flex justify-center overflow-hidden"
         >
            <div data-depth="2" className="aspect-video relative h-full">
               <Image
                  src={project.img}
                  alt={project.link}
                  fill
                  sizes="100%"
                  quality={100}
                  priority
                  className="object-cover"
               />
            </div>
         </div>
         <div className="text-center flex-col flex items-center gap-2">
            <div className="text-3xl text-white">{project.title}</div>
            <button className="rounded-full h-10 max-w-min px-10 text-black bg-gray-200 text-sm">
               Discover
            </button>
         </div>
      </div>
   );
}
