import Expertise from "./Expertise";
import Eye from "./Eye";
import RevealCards from "./RevealCards";
import Skills from "./Skills";
import Clock from "./Clock";
import Learning from "./Learning";
import MainContainer from "../../MainContainer";

interface Props {
   // containerRef: React.RefObject<HTMLDivElement>;
}

export default function AboutCards({}: Props) {
   return (
      <MainContainer>
         <div className="xl:grid grid-cols-3 gap-5 w-full about-cards-container">
            <Skills right />
            <Clock right />
            <Expertise />
            <Eye />
            <Learning />
            <RevealCards />
         </div>
      </MainContainer>
   );
}
