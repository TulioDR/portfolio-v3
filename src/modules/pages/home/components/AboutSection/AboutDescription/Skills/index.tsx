import React, { useState } from "react";
import CardContainer from "../CardContainer";

type Props = {};

export default function Skills({}: Props) {
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
         right
         isCardOn={isCardOn}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         <div className="">index</div>
      </CardContainer>
   );
}
