import Expertise from "./Expertise";
import Eye from "./Eye";
import RevealCards from "./RevealCards";
import Skills from "./Skills";
import Clock from "./Clock";
import TallCard from "./TallCard";

interface Props {}

export default function AboutDescription({}: Props) {
   return (
      <div className="grid grid-cols-3 gap-5 xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
         <Skills />
         <Clock />
         <Expertise />
         <Eye />
         <TallCard />
         <RevealCards />
      </div>
   );
}
