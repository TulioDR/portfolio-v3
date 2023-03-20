import MainContainer from "@/components/MainContainer";
import useNavbarContext from "@/context/NavbarContext";
import { useScroll } from "framer-motion";
import AboutCardDesktop from "./AboutCardDesktop";
import AboutPhrases from "./AboutPhrases";
import AboutTitle from "./AboutTitle";

export default function AboutSection() {
   const { aboutRef, aboutInfoRef } = useNavbarContext();

   const { scrollYProgress } = useScroll({
      target: aboutInfoRef,
      offset: ["start end", "end end"],
   });

   return (
      <div ref={aboutRef} className="">
         <div className="">
            <div className="overflow-hidden h-screen w-full sticky top-0 bg-gradient-to-b from-stone-700 to-stone-500">
               <MainContainer>
                  <div className="flex flex-col h-full pb-20">
                     <AboutTitle scrollYProgress={scrollYProgress} />
                     <AboutPhrases />
                  </div>
               </MainContainer>
               <AboutCardDesktop scrollYProgress={scrollYProgress} />
            </div>
            <div ref={aboutInfoRef} className="h-screen w-full"></div>
         </div>
         <div className="pb-24 bg-stone-500">
            <MainContainer>Since the beginning of my journey...</MainContainer>
         </div>
      </div>
   );
}
