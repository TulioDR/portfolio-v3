import MainContainer from "@/components/MainContainer";
import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import DescriptionText from "./DescriptionText";

type Props = {};

export default function AboutDescription({}: Props) {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });

   const scrollVelocity = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
   });

   return (
      <div ref={ref} className="pb-24 bg-stone-500">
         <MainContainer>
            <div className="grid sm:grid-cols-2 gap-10">
               <DescriptionText scrollVelocity={scrollVelocity} />
               <div className="bg-primary"></div>
            </div>
         </MainContainer>
      </div>
   );
}
