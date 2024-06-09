import ProjectModel from "@/models/ProjectModel";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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

   const [alpha, setAlpha] = useState<number | null>(0);
   const [beta, setBeta] = useState<number | null>(0);
   const [gamma, setGamma] = useState<number | null>(0);

   useEffect(() => {
      const handleOrientation = (event: DeviceOrientationEvent) => {
         const alpha = event.alpha;
         const beta = event.beta;
         const gamma = event.gamma;
         setAlpha(alpha);
         setBeta(beta);
         setGamma(gamma);
         console.log(alpha, beta, gamma);
      };

      if ("DeviceOrientationEvent" in window) {
         window.addEventListener("deviceorientation", handleOrientation, true);
      } else {
         console.log("go to mobile");
      }

      // Cleanup function to remove the event listener
      return () => {
         if ("DeviceOrientationEvent" in window) {
            window.removeEventListener(
               "deviceorientation",
               handleOrientation,
               true
            );
         }
      };
   }, []);

   return (
      <div
         style={{ height: `calc(100vh - ${GAP + GAP / 2}px)` }}
         className="w-full flex flex-col gap-5"
      >
         <div
            id={sceneId}
            className="w-full flex-1 flex justify-center overflow-hidden"
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
               <div className="absolute top-0 left-0 bg-white w-full h-full z-10 text-black flex flex-col justify-center items-center">
                  <div>Alpha:{alpha?.toFixed(3)}</div>
                  <div> Beta:{beta?.toFixed(3)}</div>
                  <div>Gamma:{gamma?.toFixed(3)}</div>
               </div>
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
