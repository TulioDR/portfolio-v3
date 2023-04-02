import MainContainer from "@/components/MainContainer";
import AboutCardDesktop from "./AboutCardDesktop";
import AboutPhrases from "./AboutPhrases";
import AboutTitle from "./AboutTitle";
import { useScroll } from "framer-motion";
import useNavbarContext from "@/context/NavbarContext";

type Props = {};

export default function AboutSectionDesktop({}: Props) {
   const { aboutInfoRef } = useNavbarContext();
   const { scrollYProgress } = useScroll({
      target: aboutInfoRef,
      offset: ["start end", "end end"],
   });

   return (
      <div className="hidden lg:block">
         <div className="overflow-hidden h-screen w-full sticky top-0 bg-gradient-to-b from-stone-700 to-stone-500">
            <MainContainer>
               <div className="flex flex-col h-full pb-20">
                  <AboutTitle scrollYProgress={scrollYProgress} />
                  <AboutPhrases scrollYProgress={scrollYProgress} />
               </div>
            </MainContainer>
            <AboutCardDesktop scrollYProgress={scrollYProgress} />
         </div>
         <div ref={aboutInfoRef} className="h-screen w-full"></div>
      </div>
   );
}
