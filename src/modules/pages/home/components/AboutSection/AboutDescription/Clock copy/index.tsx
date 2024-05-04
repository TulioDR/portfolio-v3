import React, { useState } from "react";
import CardContainer from "../CardContainer";
import ClockHand from "./ClockHand";
import HourMark from "./HourMark";
import ClockMessage from "./ClockMessage";

type Props = {};

export default function Clock({}: Props) {
   const [isCardOn, setIsCardOn] = useState<boolean>(false);
   const onMouseEnter = async () => {
      setIsCardOn(true);
   };
   const onMouseLeave = async () => {
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
            <div className="w-full aspect-square bg-gray-200 rounded-full relative">
               {hours.map((hour) => (
                  <HourMark key={hour} hour={hour} />
               ))}
               <ClockMessage isCardOn={isCardOn} />
               <ClockHand isCardOn={isCardOn} minute />
               <ClockHand isCardOn={isCardOn} />
               <div className="absolute h-3 z-10 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
            </div>
         </div>
      </CardContainer>
   );
}
