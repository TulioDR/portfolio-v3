import MainContainer from "@/components/MainContainer";
import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import DescriptionText from "./DescriptionText";
import Rhetorician from "./Rhetorician";

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
      <div ref={ref} className="pb-24 bg-main-gray">
         <MainContainer>
            <div className="grid md:grid-cols-2 gap-y-5">
               <DescriptionText scrollVelocity={scrollVelocity} />
               <div className="bg-main-primary rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing">
                  <Rhetorician />
               </div>
            </div>
         </MainContainer>
      </div>
   );
}
