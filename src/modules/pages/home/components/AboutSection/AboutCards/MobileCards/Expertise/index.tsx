import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import { useAnimationControls, motion } from "framer-motion";

import reactLogo from "@/assets/images/logo/react.svg";
import nextLogo from "@/assets/images/logo/nextjs2.svg";
import MobileContainer from "../MobileContainer";

type Props = {};

export default function Expertise({}: Props) {
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

   const onMouseEnter = async () => {
      const duration = 0.3;
      frontControls.start({ y: "4%", transition: { duration } });
      backControls.start({ y: "-4%", transition: { duration } });
      await animateCardsOut(true);
      containerControls.start({ zIndex: 0 });
      animateCardsOut(false);
   };
   const onMouseLeave = async () => {
      const duration = 0.3;
      frontControls.start({ y: "0%", transition: { duration } });
      backControls.start({ y: "0%", transition: { duration } });
      await animateCardsOut(true);
      containerControls.start({ zIndex: 10 });
      animateCardsOut(false);
   };

   return (
      <MobileContainer
         title="My expertise"
         text="Although my skills are focused on React and Next.js, I am interested in the entire spectrum of Front End and BackEnd"
      >
         <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="w-full aspect-square flex items-center justify-center relative"
         >
            <motion.div
               animate={containerControls}
               initial={{ zIndex: 50 }}
               className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center"
            >
               <ExpertiseCard
                  src={reactLogo}
                  animationControls={frontControls}
                  front
               />
            </motion.div>
            <ExpertiseCard src={nextLogo} animationControls={backControls} />
         </div>
      </MobileContainer>
   );
}
