import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

type Props = {
   isSelected: boolean;
   thickness: number;
};

export default function SelectorBorder({ isSelected, thickness }: Props) {
   const hControls = useAnimationControls();
   const vControls = useAnimationControls();

   useEffect(() => {
      const handleAnimations = async () => {
         const transition = { duration: 0.3 };
         if (isSelected) {
            hControls.stop();
            vControls.stop();
            await hControls.start({ width: "100%", transition });
            vControls.start({ height: "100%", transition });
         } else {
            hControls.stop();
            vControls.stop();
            await vControls.start({ height: 0, transition });
            hControls.start({ width: 0, transition });
         }
      };
      handleAnimations();
   }, [isSelected, hControls, vControls]);
   return (
      <>
         <motion.div
            style={{ height: thickness, left: thickness }}
            animate={hControls}
            className="absolute top-0 bg-accent"
         />
         <motion.div
            style={{ width: thickness }}
            animate={vControls}
            className="absolute top-0 right-0 bg-accent"
         />
         <motion.div
            style={{ height: thickness, right: thickness }}
            animate={hControls}
            className="absolute bottom-0 bg-accent"
         />
         <motion.div
            style={{ width: thickness }}
            animate={vControls}
            className="absolute bottom-0 left-0 bg-accent"
         />
      </>
   );
}
