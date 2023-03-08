import MainContainer from "@/components/MainContainer";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import AboutCard from "./AboutCard";
import AboutTitle from "./AboutTitle";

export default function AboutSection() {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end end"],
   });

   return (
      <div className=" ">
         <div className="">
            <div className="overflow-hidden h-screen w-full sticky top-0 bg-gradient-to-b from-stone-700 to-stone-500">
               <MainContainer>
                  <AboutTitle scrollYProgress={scrollYProgress} />
               </MainContainer>
               <AboutCard scrollYProgress={scrollYProgress} />
            </div>
            <div ref={ref} className="h-screen w-full"></div>
         </div>
         <div className="py-24 bg-stone-500">
            <MainContainer>This is where the text goes</MainContainer>
         </div>
      </div>
   );
}
