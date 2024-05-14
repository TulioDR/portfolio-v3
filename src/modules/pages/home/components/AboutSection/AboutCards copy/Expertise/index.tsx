import React, { useState } from "react";
import ExpertiseCard from "./ExpertiseCard";
import { useAnimationControls, motion } from "framer-motion";
import CardContainer from "../CardContainer";

type Props = {
   right?: true;
   left?: true;
};

export default function Expertise({ right, left }: Props) {
   const frontControls = useAnimationControls();
   const backControls = useAnimationControls();
   const containerControls = useAnimationControls();

   const animateCardsOut = (out: boolean) => {
      const duration = 0.15;
      const animation1 = {
         x: out ? "-50%" : "0%",
         transition: { duration },
      };
      const animation2 = {
         x: out ? "50%" : "0%",
         transition: { duration },
      };
      return Promise.all([
         frontControls.start(animation1),
         backControls.start(animation2),
      ]);
   };

   const [isCardOn, setIsCardOn] = useState<boolean>(false);
   const onMouseEnter = async () => {
      const duration = 0.3;
      frontControls.start({ y: "4%", transition: { duration } });
      backControls.start({ y: "-4%", transition: { duration } });
      setIsCardOn(true);
      await animateCardsOut(true);
      containerControls.start({ zIndex: 0 });
      animateCardsOut(false);
   };
   const onMouseLeave = async () => {
      const duration = 0.3;
      frontControls.start({ y: "0%", transition: { duration } });
      backControls.start({ y: "0%", transition: { duration } });
      setIsCardOn(false);
      await animateCardsOut(true);
      containerControls.start({ zIndex: 10 });
      animateCardsOut(false);
   };

   return (
      <CardContainer
         right={right}
         left={left}
         isCardOn={isCardOn}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         <div className="w-full aspect-square flex items-center justify-center relative">
            <motion.div
               animate={containerControls}
               initial={{ zIndex: 50 }}
               className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center"
            >
               <ExpertiseCard animationControls={frontControls} front />
            </motion.div>
            <ExpertiseCard animationControls={backControls} />
         </div>
      </CardContainer>
   );
}
