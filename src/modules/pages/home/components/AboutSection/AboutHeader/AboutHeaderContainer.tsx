import React, { useEffect, useState } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
type Props = {
   children: React.ReactNode;
   scroll: MotionValue<number>;
   containerRef: React.RefObject<HTMLDivElement>;
   aboutHeaderRef: React.RefObject<HTMLDivElement>;
};

export default function AboutHeaderContainer({
   children,
   scroll,
   containerRef,
   aboutHeaderRef,
}: Props) {
   const [fullWidth, setFullWidth] = useState<number>(0);
   const [containerWidth, setContainerWidth] = useState<number>(0);

   useEffect(() => {
      const { width } = containerRef.current!.getBoundingClientRect();
      setContainerWidth(width);
      setFullWidth(window.innerWidth);
   }, []);

   useEffect(() => {
      const handleResize = () => {
         const { width } = containerRef.current!.getBoundingClientRect();
         setContainerWidth(width);
         setFullWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const width = useTransform(scroll, [0, 1], [fullWidth, containerWidth]);
   const height = useTransform(
      scroll,
      [0, 1],
      ["calc(100% - 0rem)", "calc(100% - 10rem)"]
   );
   const borderRadius = useTransform(scroll, [0, 1], [0, 24]);
   return (
      <div
         ref={aboutHeaderRef}
         className="w-full sticky top-0 h-screen hidden lg:flex items-center justify-center"
      >
         <motion.div
            initial={{ width: fullWidth }}
            style={{ height, width, borderRadius }}
            className="bg-white shadow-xl p-3"
         >
            <div className="w-full h-full rounded-xl bg-primary text-white relative overflow-hidden">
               {children}
            </div>
         </motion.div>
      </div>
   );
}
