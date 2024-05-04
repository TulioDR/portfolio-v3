import React, { useState } from "react";
import CardContainer from "../CardContainer";
import {
   useAnimationControls,
   useMotionValue,
   useMotionValueEvent,
} from "framer-motion";
import ClockHand from "./ClockHand";
import HourMark from "./HourMark";
import ClockMessage from "./ClockMessage";
import ClockContainer from "./ClockContainer";

type Props = {};

export default function Clock({}: Props) {
   const [isCardOn, setIsCardOn] = useState<boolean>(false);

   const hourHandControl = useAnimationControls();
   const minuteHandControl = useAnimationControls();
   const circleControl = useAnimationControls();

   const pathLength = useMotionValue(0);

   const [showMessage, setShowMessage] = useState<boolean>(false);

   useMotionValueEvent(pathLength, "change", (current) => {
      setShowMessage(current === 1);
   });

   const isClockStarting = (isStart: boolean) => {
      const currentPathLength = pathLength.get();
      const maxDuration = 6;
      const ease = "easeOut";

      let duration;
      if (isStart) duration = maxDuration - currentPathLength * maxDuration;
      else duration = currentPathLength * maxDuration;

      const transition = { duration, ease };

      const rotateHour = isStart ? "360deg" : "0deg";
      const rotateMinutes = isStart ? "4320deg" : "0deg";
      const pathLengthAnimation = isStart ? 1 : 0;

      hourHandControl.start({ rotate: rotateHour, transition });
      minuteHandControl.start({ rotate: rotateMinutes, transition });
      circleControl.start({ pathLength: pathLengthAnimation, transition });
   };

   const onMouseEnter = async () => {
      isClockStarting(true);
      setIsCardOn(true);
   };
   const onMouseLeave = async () => {
      isClockStarting(false);
      setIsCardOn(false);
   };

   const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

   return (
      <CardContainer
         right
         isCardOn={isCardOn}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         <div className="w-full aspect-square p-5">
            <div className="w-full aspect-square relative">
               <ClockMessage showMessage={showMessage} />
               <ClockContainer
                  pathLength={pathLength}
                  animationControls={circleControl}
               />
               {hours.map((hour) => (
                  <HourMark key={hour} hour={hour} />
               ))}
               <ClockHand animationControls={hourHandControl} />
               <ClockHand animationControls={minuteHandControl} minute />
               <div className="absolute h-3 z-10 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
            </div>
         </div>
      </CardContainer>
   );
}
