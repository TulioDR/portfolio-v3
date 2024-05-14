import MainContainer from "../../MainContainer";
import Skills from "./MobileCards/Skills";
import Clock from "./MobileCards/Clock";
import Expertise from "./MobileCards/Expertise";
import Eye from "./MobileCards/Eye";
import Learning from "./MobileCards/Learning";
import RevealCards from "./MobileCards/RevealCards";

interface Props {
   // containerRef: React.RefObject<HTMLDivElement>;
}

export default function AboutCards({}: Props) {
   return (
      <MainContainer>
         <div className="flex flex-col sm:grid w-full sm:grid-cols-2 lg:hidden gap-5">
            <Skills />
            <Clock />
            <Learning />
            <Expertise />
            <RevealCards />
         </div>
         <div className="row-span-3 grid-cols-3 gap-5 hidden lg:grid w-full about-cards-container ">
            <Skills />
            <Clock />
            <Expertise />
            <Eye />
            <Learning />
            <RevealCards />
         </div>
      </MainContainer>
   );
}
