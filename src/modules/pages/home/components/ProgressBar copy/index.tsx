import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import useTabletPositionContext from "../../context/TabletPositionContext";
import {
   useMotionValueEvent,
   useScroll,
   motion,
   useAnimationControls,
} from "framer-motion";

export default function ProgressBar() {
   type Position = "home" | "about" | "work" | "contact";
   const [currentP, setCurrentP] = useState<Position>("home");

   const { positions } = useTabletPositionContext();
   const { h1, h2, a3, w3, c1 } = positions;

   const { scrollYProgress } = useScroll();
   useMotionValueEvent(scrollYProgress, "change", (current) => {
      if (current < h2) setCurrentP("home");
      else if (current < a3) setCurrentP("about");
      else if (current < w3) setCurrentP("work");
      else setCurrentP("contact");
   });

   const controls = useAnimationControls();
   useEffect(() => {
      if (currentP === "home") controls.start({ y: "0%" });
      if (currentP === "about") controls.start({ y: "-25%" });
      if (currentP === "work") controls.start({ y: "-50%" });
      if (currentP === "contact") controls.start({ y: "-75%" });
   }, [currentP]);

   return (
      <div className="fixed top-0 right-20 h-screen w-20 z-20 flex items-center justify-center">
         <div className="h-1/3 overflow-hidden">
            <motion.div
               animate={controls}
               transition={{ duration: 0.3 }}
               className="w-full h-[400%] flex flex-col"
            >
               <Bar initial={h1} final={h2} number="01" />
               <Bar initial={h2} final={a3} number="02" />
               <Bar initial={a3} final={w3} number="03" />
               <Bar initial={w3} final={c1} number="04" />
            </motion.div>
         </div>
      </div>
   );
}
