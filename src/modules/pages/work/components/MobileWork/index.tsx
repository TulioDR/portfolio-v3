import React, { useEffect } from "react";
import MobileWorkCard from "./MobileWorkCard";
import projects from "@/assets/projects";
import {
   motion,
   useMotionTemplate,
   useMotionValue,
   useSpring,
   useTransform,
} from "framer-motion";

type Props = {};

export default function MobileWork({}: Props) {
   const GAP = 80;

   const turn = useMotionValue(0);
   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothTurn = useSpring(turn, smoothOptions);
   const x = useTransform(smoothTurn, [-45, 45], ["0%", "100%"]);
   const objectPosition = useMotionTemplate`${x} 50%`;

   useEffect(() => {
      const handleTurn = (e: DeviceOrientationEvent) => turn.set(e.gamma || 0);
      const DOE = "DeviceOrientationEvent";

      if (DOE in window)
         window.addEventListener("deviceorientation", handleTurn, true);

      return () => {
         if (DOE in window)
            window.removeEventListener("deviceorientation", handleTurn, true);
      };
   }, []);
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
            <MobileWorkCard
               key={project.link}
               project={project}
               GAP={GAP}
               objectPosition={objectPosition}
            />
         ))}
      </motion.div>
   );
}
