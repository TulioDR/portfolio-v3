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
      <div ref={ref} className=" w-full bg-primary">
         <div className="sticky top-0 h-screen w-full grid place-content-center">
            <motion.div
               style={{ rotateY: rotateY }}
               className="w-80 aspect-square flex relative items-center justify-center bg-blue-500 overflow-hidden"
            >
               <motion.div
                  style={{
                     rotateY: rotateY2,
                     x: "-50%",
                     y: "-50%",
                  }}
                  className="w-full h-full block absolute top-1/2 left-1/2"
               >
                  <Image
                     src={projects[0].img}
                     alt="hello"
                     fill
                     sizes="100%"
                     className="object-cover"
                  />
               </motion.div>
            </motion.div>
         </div>
         <div className="h-screen"></div>
         <div className="h-screen"></div>
      </div>
   );
}
