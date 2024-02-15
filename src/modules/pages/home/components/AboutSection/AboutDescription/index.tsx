import { MotionValue } from "framer-motion";
import AboutCard from "./AboutCard";

interface Props {
   scroll: MotionValue<number>;
}

export default function AboutDescription({ scroll }: Props) {
   return (
      <div className="flex flex-col h-screen w-3/4 py-20 px-35">
         <div className="h-full grid grid-cols-2 gap-5 2xl:gap-10 w-full pr-5 2xl:pr-10">
            <AboutCard scroll={scroll} initial={0.3} final={0.8} />
            <AboutCard scroll={scroll} initial={0.5} final={1.0} />
            <AboutCard scroll={scroll} initial={0.4} final={0.9} large />
         </div>
      </div>
   );
}
