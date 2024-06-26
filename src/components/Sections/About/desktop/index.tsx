import MainContainer from "@/components/MainContainer";
import AboutCardDesktop from "./AboutCardDesktop";
import AboutPhrases from "./AboutPhrases";
import AboutTitle from "./AboutTitle";
import { useScroll } from "framer-motion";
import { useRef } from "react";

interface Props {}

export default function AboutSectionDesktop({}: Props) {
   const aboutInfoRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: aboutInfoRef,
      offset: ["start end", "end end"],
   });

   return (
      <>
         <div className="overflow-hidden h-screen w-full sticky top-0 bg-gradient-to-t from-main-gray to-stone-500">
            <MainContainer>
               <div className="flex flex-col h-full pb-20">
                  <AboutTitle scrollYProgress={scrollYProgress} />
                  <AboutPhrases scrollYProgress={scrollYProgress} />
               </div>
            </MainContainer>
            <AboutCardDesktop scrollYProgress={scrollYProgress} />
         </div>
         <div
            ref={aboutInfoRef}
            id="about-info"
            className="h-screen w-full bg-black"
         ></div>
      </>
   );
}
