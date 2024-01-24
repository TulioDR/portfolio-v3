import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import projects from "@/assets/projects";
import ProjectImage from "./ProjectImage";
import useTabletPositionContext from "../../../context/TabletPositionContext";

type Props = {
   scroll: MotionValue<number>;
};
export default function WorkShowcase({ scroll }: Props) {
   const { positions } = useTabletPositionContext();
   const { w1, w3 } = positions;
   const y = useTransform(scroll, [w1, w3], ["-10%", "-80%"]);

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="h-full w-full pointer-events-auto relative"
      >
         <motion.div
            style={{ rotateX: 60, rotateZ: 35 }}
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
