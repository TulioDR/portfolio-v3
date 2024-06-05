import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projects from "@/assets/projects";

type Props = {};

export default function BackImage({}: Props) {
   const duration = 1;
   return (
      <motion.div
         initial={{ y: "25%" }}
         exit={{ y: "0%" }}
         transition={{ duration, ease: "easeInOut" }}
         className="relative w-full h-full"
      >
         <Image
            src={projects[0].img}
            alt={projects[0].link}
            fill
            sizes="100%"
            quality={100}
            className="object-cover"
         />
      </motion.div>
   );
}
