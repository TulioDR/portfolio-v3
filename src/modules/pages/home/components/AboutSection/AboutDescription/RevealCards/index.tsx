import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { motion, useMotionValue, useSpring } from "framer-motion";

import projects from "@/assets/projects";
import CardContainer from "../CardContainer";
import Wand from "./Wand";

type Props = {};

export default function RevealCards({}: Props) {
   const divRef = useRef<HTMLDivElement>(null);

   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothX = useSpring(x, smoothOptions);

   const xPercentage = useMotionValue(0);

   useEffect(() => {
      const { width, height } = divRef.current!.getBoundingClientRect();
      const element = document.querySelectorAll(".card")[1] as HTMLDivElement;
      const left = element.offsetLeft;
      y.set(height / 4);
      x.set(left);
      xPercentage.set(left / width);
   }, [xPercentage, x, y]);

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top, width, height } =
         divRef.current!.getBoundingClientRect();
      const positionX = e.clientX - left;
      const positionY = e.clientY - top;
      const wandX = positionX * 1.3 + -0.15 * width;
      const wandY = positionY * 0.4 + 0.1 * height;

      x.set(wandX);
      y.set(wandY);
      const percentage = wandX / width;
      xPercentage.set(percentage);
   };

   const handleHoverEnd = () => {
      const { width, height } = divRef.current!.getBoundingClientRect();
      const element = document.querySelectorAll(".card")[1] as HTMLDivElement;
      const left = element.offsetLeft;
      y.set(height / 4);
      x.set(left);
      xPercentage.set(left / width);
   };

   const [isCardOn, setIsCardOn] = useState<boolean>(false);
   const onMouseEnterContainer = () => {
      setIsCardOn(true);
   };
   const onMouseLeaveContainer = () => {
      setIsCardOn(false);
   };

   return (
      <CardContainer
         large
         right
         isCardOn={isCardOn}
         onMouseEnter={onMouseEnterContainer}
         onMouseLeave={onMouseLeaveContainer}
      >
         <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onHoverEnd={handleHoverEnd}
            className="w-full aspect-[16/7] relative flex items-center justify-center px-10"
         >
            <Wand xPercentage={xPercentage} x={x} y={y} isCardOn={isCardOn} />
            <Card tile1 value={smoothX} src={projects[0].img} alt="1" />
            <Card tile2 value={smoothX} src={projects[1].img} alt="2" />
            <Card tile3 value={smoothX} src={projects[2].img} alt="3" />
         </motion.div>
      </CardContainer>
   );
}
