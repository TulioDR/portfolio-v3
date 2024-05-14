import React, { useEffect, useRef } from "react";
import { useAnimationControls, useMotionValue } from "framer-motion";
import Pupil from "./Pupil";
import MobileContainer from "../MobileContainer";

type Props = {};

export default function Eye({}: Props) {
   const pupilControls = useAnimationControls();
   const element = useRef<HTMLDivElement>(null);
   const distanceFromCenter = useMotionValue(0);
   const rotate = useMotionValue(0);
   const rotateReverse = useMotionValue(0);
   const getDistanceFromCenter = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = element.current!.getBoundingClientRect();
      const width = rect.width;
      const radius = width / 2;
      const centerX = rect.left + radius;
      const centerY = rect.top + radius;
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;
      const distance = Math.sqrt(x * x + y * y);
      const percentage = distance / radius;
      distanceFromCenter.set(percentage);
   };

   useEffect(() => {
      const getRotationAngle = (event: MouseEvent) => {
         const { clientX: x, clientY: y } = event;
         const { left, width, top, height } =
            element.current!.getBoundingClientRect();
         const centerX = left + width / 2;
         const centerY = top + height / 2;
         const angleRad = Math.atan2(y - centerY, x - centerX);
         const angle = (angleRad * 180) / Math.PI;
         rotate.set(angle);
         rotateReverse.set(-angle);
      };
      window.addEventListener("mousemove", getRotationAngle);
      return () => window.removeEventListener("mousemove", getRotationAngle);
   }, [rotate, rotateReverse]);

   const showBigEyes = () => {
      pupilControls.start({
         scaleX: 1.1,
         scaleY: 1.4,
         transition: {
            type: "spring",
            duration: 0.3,
            bounce: 0.5,
         },
      });
   };

   const showNormalEyes = () => {
      pupilControls.start({
         scaleX: 1,
         scaleY: 1,
         height: "100%",
         transition: {
            type: "spring",
            duration: 0.3,
            bounce: 0.5,
            height: { type: "spring", duration: 0.5, bounce: 0.5 },
         },
      });
   };

   const onMouseEnter = () => {
      showBigEyes();
   };
   const onMouseLeave = () => {
      showNormalEyes();
      distanceFromCenter.set(1);
   };

   return (
      <MobileContainer
         title="High attention to detail"
         text="I have a good eye for details..."
      >
         <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={element}
            onMouseMove={getDistanceFromCenter}
            className="w-full aspect-square flex items-center p-5"
         >
            <Pupil
               rotate={rotate}
               rotateReverse={rotateReverse}
               pupilControls={pupilControls}
               distanceFromCenter={distanceFromCenter}
            />
            <Pupil
               rotate={rotate}
               rotateReverse={rotateReverse}
               pupilControls={pupilControls}
               distanceFromCenter={distanceFromCenter}
            />
         </div>
      </MobileContainer>
   );
}
