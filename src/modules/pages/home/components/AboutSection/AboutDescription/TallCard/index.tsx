import React, { useState } from "react";
import CardContainer from "../CardContainer";

type Props = {};

export default function TallCard({}: Props) {
   const [isCardOn, setIsCardOn] = useState<boolean>(false);
   const onMouseEnter = async () => {
      setIsCardOn(true);
   };
   const onMouseLeave = async () => {
      setIsCardOn(false);
   };

   return (
      <CardContainer
         tall
         left
         isCardOn={isCardOn}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         <div className="flex items-center justify-center w-full h-full">
            <div className="text-white text-4xl font-bold text-center uppercase flex flex-col gap-5">
               <div>I</div>
               <div>Learn</div>
               <div>Fast</div>
            </div>
         </div>
      </CardContainer>
   );
}
