import React, { useState } from "react";
import Dot from "./Dot";
import { useMotionValueEvent, useScroll } from "framer-motion";
import useTabletPositionContext from "../../context/TabletPositionContext";

type Props = {};

export default function PositionDots({}: Props) {
   type Position = "home" | "about" | "work" | "contact";

   const [currentP, setCurrentP] = useState<Position>("home");

   const { positions } = useTabletPositionContext();
   const { h1, h3, a4, w3, c1 } = positions;

   const { scrollYProgress } = useScroll();
   useMotionValueEvent(scrollYProgress, "change", (current) => {
      if (current < h3) {
         setCurrentP("home");
      } else if (current < a4) {
         setCurrentP("about");
      } else if (current < w3) {
         setCurrentP("work");
      } else {
         setCurrentP("contact");
      }
   });

   return (
      <div className="fixed top-0 left-20 w-10 flex items-center justify-center h-screen z-20">
         <div className="h-1/3 flex flex-col items-center justify-between">
            <Dot active={currentP === "home"} initial={h1} final={h3} />
            <Dot active={currentP === "about"} initial={h3} final={a4} />
            <Dot active={currentP === "work"} initial={a4} final={w3} />
            <Dot active={currentP === "contact"} initial={w3} final={c1} />
         </div>
      </div>
   );
}
