import React, { useRef, useState } from "react";
import CardContainer from "../CardContainer";
import { motion, useMotionValue, useSpring } from "framer-motion";
import allSkills from "@/assets/skills/allSkills";
import LearningCard from "./LearningCard";
import InitialLearningMessage from "./InitialLearningMessage";
import VelocityMeter from "./VelocityMeter";

type Props = {};

export default function Learning({}: Props) {
   const containerRef = useRef<HTMLDivElement>(null);
   const sliderRef = useRef<HTMLDivElement>(null);

   const [isCardOn, setIsCardOn] = useState<boolean>(false);
   const onMouseEnter = async () => {
      setIsCardOn(true);
   };
   const onMouseLeave = async () => {
      setIsCardOn(false);
   };

   const y = useMotionValue(0);

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current!.getBoundingClientRect();
      const mouseY = e.clientY - container.top;
      const containerHeight = container.height;
      const percentage = mouseY / containerHeight;

      let newPercentage = percentage;
      if (percentage < 0) newPercentage = 0;
      if (percentage > 1) newPercentage = 1;

      const slider = sliderRef.current!.getBoundingClientRect();
      const sliderHeight = slider.height;
      y.set((containerHeight - sliderHeight) * newPercentage);
   };

   const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
   const smoothY = useSpring(y, smoothOptions);

   const handleScreenMouseLeave = () => {
      const container = containerRef.current!.getBoundingClientRect();
      const containerHeight = container.height;

      const slider = sliderRef.current!.getBoundingClientRect();
      const sliderHeight = slider.height;

      y.set((containerHeight - sliderHeight) * 0.5);
   };

   return (
      <CardContainer
         tall
         left
         isCardOn={isCardOn}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleScreenMouseLeave}
            className="w-full h-full py-5 relative group"
         >
            <div ref={containerRef} className="w-full h-full relative">
               <motion.div
                  ref={sliderRef}
                  style={{ y: smoothY }}
                  className="w-full flex flex-col gap-2 top-0 absolute px-5"
               >
                  {allSkills.map((skill) => (
                     <LearningCard skill={skill} key={skill.name} />
                  ))}
               </motion.div>
            </div>
            <VelocityMeter smoothY={smoothY} />
            <InitialLearningMessage />
         </div>
      </CardContainer>
   );
}
