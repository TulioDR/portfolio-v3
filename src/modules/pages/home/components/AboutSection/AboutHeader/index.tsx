import { MotionValue, useScroll } from "framer-motion";
import AboutHeaderContainer from "./AboutHeaderContainer";
import { useRef } from "react";
import HeaderCard from "./HeaderCard";
import AboutTitle from "./AboutHeaderTitle";
import AboutHeaderMessage from "./AboutHeaderMessage";

interface Props {
   scroll: MotionValue<number>;
   containerRef: React.RefObject<HTMLDivElement>;
}

export default function AboutHeader({ scroll, containerRef }: Props) {
   const aboutHeaderRef = useRef(null);

   const { scrollYProgress: headerScroll } = useScroll({
      target: aboutHeaderRef,
      offset: ["start end", "end end"],
   });

   return (
      <AboutHeaderContainer
         scroll={scroll}
         containerRef={containerRef}
         aboutHeaderRef={aboutHeaderRef}
      >
         <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-center items-center p-5">
            <AboutTitle scroll={scroll} />
         </div>
         <AboutHeaderMessage scroll={scroll} />
         <HeaderCard firstScroll={headerScroll} secondScroll={scroll} />
      </AboutHeaderContainer>
   );
}
