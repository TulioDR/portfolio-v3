import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
type Props = {
   black?: true;
};

export default function ScrollProgress({ black }: Props) {
   const { scrollYProgress } = useScroll();
   const springMotion = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });

   const top = useTransform(springMotion, [0, 1], ["0%", "100%"]);
   const percentage = useTransform(springMotion, [0, 1], [0, 100]);

   const [scrolledValue, setScrolledValue] = useState<number>(0);

   useEffect(() => {
      const doSomething = () => {
         const value = Math.trunc(percentage.get());
         setScrolledValue(value);
      };
      const unsubY = percentage.on("change", doSomething);
      return () => unsubY();
   }, [percentage]);

   return (
      <div className="fixed right-0 top-0 w-20 h-screen z-10 flex items-center pointer-events-none">
         <div className="h-1/3 w-full relative">
            <motion.div
               style={{ top }}
               className={`absolute right-0 -translate-x-1 w-max text-sm ${
                  black ? "text-black" : "text-white"
               } `}
            >
               {scrolledValue}%
            </motion.div>
         </div>
      </div>
   );
}
