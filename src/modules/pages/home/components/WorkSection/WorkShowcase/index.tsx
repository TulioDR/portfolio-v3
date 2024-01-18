import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import projects from "@/assets/projects";
import ProjectImage from "./ProjectImage";
import ViewWorkButton from "./ViewWorkButton";

type Props = {
   scroll: MotionValue<number>;
};
export default function WorkShowcase({ scroll }: Props) {
   const y = useTransform(scroll, [0.7, 0.9], ["-10%", "-75%"]);

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="h-full w-full pointer-events-auto overflow-hidden rounded-2xl relative"
      >
         <ViewWorkButton scroll={scroll} />
         <motion.div
            style={{
               rotateX: 60,
               rotateZ: 35,
               x: "-40%",
               y: "-25%",
            }}
            className="w-full h-full"
         >
            <motion.div style={{ y }} className="space-y-[5%]">
               {projects.map(({ title, img }) => (
                  <ProjectImage key={title} alt={title} img={img} />
               ))}
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
