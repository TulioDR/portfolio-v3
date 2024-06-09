import React from "react";
import MobileWorkCard from "./MobileWorkCard";
import projects from "@/assets/projects";
import { motion } from "framer-motion";

type Props = {};

export default function MobileWork({}: Props) {
   const GAP = 80;
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
         style={{ rowGap: GAP, paddingTop: GAP, paddingBottom: GAP }}
         className="w-screen px-5 grid md:grid-cols-2 gap-x-5"
      >
         {projects.map((project) => (
            <MobileWorkCard key={project.link} project={project} GAP={GAP} />
         ))}
      </motion.div>
   );
}
