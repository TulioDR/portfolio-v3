import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });
   const scrollYProgressVelocity = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
   });

   const width = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["100%", "25%", "25%"]
   );
   const height = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["100%", "80%", "80%"]
   );
   const borderRadius = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["0px", "24px", "24px"]
   );

   const marginRight = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["0%", "25%", "25%"]
   );

   const padding = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["150px 250px", "56px 40px", "56px 40px"]
   );
   return (
      <div>
         <div className="h-screen bg-stone-500 w-full sticky top-0">
            <div className="w-full h-full flex items-center justify-end overflow-hidden">
               <motion.div
                  style={{ height, width, borderRadius, marginRight, padding }}
                  className="rounded-3xl bg-slate-800 text-white font-semibold text-3xl"
               >
                  <div className="w-40">Breaking out if the box</div>
               </motion.div>
            </div>
         </div>
         <div ref={ref} className="h-screen bg-green-500 w-full"></div>
      </div>
   );
}
