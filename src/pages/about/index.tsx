import Image from "next/image";
import React, { useRef } from "react";
import projects from "@/assets/projects";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {};

export default function AboutPage({}: Props) {
   const ref = useRef(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end end"],
   });

   const rotateY = useTransform(scrollYProgress, [0, 1], [0, 90]);
   const rotateY2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

   return (
      // <div className="h-screen w-full p-5 bg-gray-200 overflow-hidden">
      //    <div className="h-full w-full bg-primary relative">
      //       <div className="aspect-square absolute top-0 right-0 bg-gray-200 rotate-45 translate-x-1/2 -translate-y-1/2 h-[10%]"></div>
      //       <div className="aspect-square absolute bottom-0 right-0 bg-gray-200 rotate-45 translate-x-1/2 translate-y-1/2 h-[10%]"></div>
      //       <div className="aspect-square absolute top-0 left-0 bg-gray-200 rotate-45 -translate-x-1/2 -translate-y-1/2 h-[10%]"></div>
      //       <div className="aspect-square absolute bottom-0 left-0 bg-gray-200 rotate-45 -translate-x-1/2 translate-y-1/2 h-[10%]"></div>
      //    </div>
      // </div>
      <div ref={ref} className=" w-full bg-about">
         <div className="sticky top-0 h-screen w-full grid place-content-center"></div>
      </div>
   );
}
