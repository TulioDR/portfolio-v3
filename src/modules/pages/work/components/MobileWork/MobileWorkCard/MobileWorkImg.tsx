import React, { useRef } from "react";
import { MotionValue, motion, useInView } from "framer-motion";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   project: ProjectModel;
   objectPosition: MotionValue<string>;
};

export default function MobileWorkImg({ objectPosition, project }: Props) {
   const mobileImgRef = useRef(null);
   const isInView = useInView(mobileImgRef);
   return (
      <div
         ref={mobileImgRef}
         className="w-full flex-1 flex justify-center overflow-hidden relative"
      >
         <motion.img
            src={project.img.src}
            alt={project.link}
            style={{ objectPosition: isInView ? objectPosition : "50% 50%" }}
            className="object-cover w-full h-full"
         />
      </div>
   );
}
