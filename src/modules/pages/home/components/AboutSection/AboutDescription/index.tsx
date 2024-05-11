import Expertise from "./Expertise";
import Eye from "./Eye";
import RevealCards from "./RevealCards";
import Skills from "./Skills";
import Clock from "./Clock";
import Learning from "./Learning";
import MainContainer from "../../MainContainer";

interface Props {
   containerRef: React.RefObject<HTMLDivElement>;
}

export default function AboutDescription({ containerRef }: Props) {
   return (
      <MainContainer>
         <div
            ref={containerRef}
            className="grid grid-cols-2 xl:grid-cols-3 gap-5 w-full"
         >
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
