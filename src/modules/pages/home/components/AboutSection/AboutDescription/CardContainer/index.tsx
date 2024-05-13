import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import CardContainerLight from "./CardContainerLight";
import CardBackground from "./CardBackground";
import ScreenContainer from "./ScreenContainer";

type Props = {
   large?: true;
   tall?: true;
   right?: true;
   left?: true;
   children: React.ReactNode;
   onMouseEnter: () => void;
   onMouseLeave: () => void;
   isCardOn: boolean;
};

export default function CardContainer({
   onMouseEnter,
   onMouseLeave,
   large,
   tall,
   right,
   left,
   children,
   isCardOn,
}: Props) {
   const [largeHeight, setLargeHeight] = useState<number>(0);

   const [extraWidth, setExtraWidth] = useState<number>(0);
   const [originalWidth, setOriginalWidth] = useState<number>(0);

   const cardRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!large) return;
      const handleResize = () => {
         const elements = document.getElementsByClassName("square-about-card");
         const { height } = elements[0].getBoundingClientRect();
         setLargeHeight(height);
      };
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [large]);

   const cardControls = useAnimationControls();
   const cardContainerControls = useAnimationControls();
   const [isCardOpen, setIsCardOpen] = useState<boolean>(false);

   useEffect(() => {
      const handleResize = () => {
         const { width: originalWidth } =
            cardRef.current!.getBoundingClientRect();
         setOriginalWidth(originalWidth);

         const div = document.getElementById("about-cards-container")!;
         const styles = window.getComputedStyle(div);
         const { gap } = styles;
         const gapNumber = parseInt(gap.slice(0, -2));
         const elements = document.getElementsByClassName(
            "about-card-exterior"
         );
         const { width } = elements[0].getBoundingClientRect();
         const extraWidth = width + gapNumber;
         setExtraWidth(extraWidth);
      };
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);
   const openCard = () => {
      setIsCardOpen(true);
      cardControls.start({ width: originalWidth + extraWidth });
      cardContainerControls.start({ zIndex: 20 });
   };

   const closeCard = async () => {
      setIsCardOpen(false);
      await cardControls.start({ width: "100%" });
      cardContainerControls.start({ zIndex: 0 });
   };

   return (
      <motion.div
         tabIndex={0}
         onBlur={closeCard}
         ref={cardRef}
         animate={cardContainerControls}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         className={`flex p-3 relative
            ${tall ? "row-span-2" : ""}
            ${large ? "col-span-2" : "col-span-1"} 
            ${right ? "pr-0" : "flex-row-reverse"}
            ${left ? "pl-0" : ""}
            ${!large && !tall ? "about-card-exterior" : ""}
         `}
      >
         <CardBackground
            right={right}
            animationControls={cardControls}
            extraWidth={extraWidth}
            originalWidth={originalWidth}
         />
         <ScreenContainer tall={tall} large={large} largeHeight={largeHeight}>
            {children}
         </ScreenContainer>
         <CardContainerLight
            onClick={isCardOpen ? closeCard : openCard}
            isCardOpen={isCardOpen}
            isCardOn={isCardOn}
            right={right}
         />
      </motion.div>
   );
}
