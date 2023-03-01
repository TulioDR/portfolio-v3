import {
   motion,
   useScroll,
   useTransform,
   useSpring,
   useAnimationControls,
} from "framer-motion";
import { useRef, useState } from "react";

import ProjectSlider from "./ProjectSlider";

export default function ProjectsSection() {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });

   const scrollYProgressVelocity = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
   });

   const y = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["-150%", "-50%", "-50%"]
   );
   const bottomY = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["150%", "-50%", "-50%"]
   );

   const [showScreen, setShowScreen] = useState<boolean>(false);
   const controls = useAnimationControls();

   const handleClick = () => {
      ref.current!.scrollIntoView({ behavior: "smooth" });
      setShowScreen(!showScreen);
      controls.start({ scale: 1.7, transition: { duration: 1, delay: 0.4 } });
   };

   return (
      <div>
         <div className="h-screen bg-black w-full sticky top-0">
            <div className=" w-full h-full flex items-center justify-center overflow-hidden">
               <ProjectSlider
                  controls={controls}
                  showScreen={showScreen}
                  scrollYProgressVelocity={scrollYProgressVelocity}
               />
               <motion.div
                  style={{ y }}
                  className="text-yellow-600 text-9xl absolute left-10 top-1/2 pointer-events-none"
               >
                  Projects
               </motion.div>
               <motion.div
                  onClick={handleClick}
                  style={{ y: bottomY }}
                  className="bg-yellow-600 text-black cursor-pointer rounded-full aspect-square w-min text-xl p-7 absolute right-96 top-1/2"
               >
                  View Projects
               </motion.div>
            </div>
         </div>
         <div ref={ref} className="h-screen bg-green-500 w-full"></div>
      </div>
   );
}
