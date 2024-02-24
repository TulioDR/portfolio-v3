import { MotionValue } from "framer-motion";
import AboutCard from "./AboutCard";

interface Props {
   scroll: MotionValue<number>;
}

export default function AboutDescription({ scroll }: Props) {
   return (
      <div className="flex flex-col h-screen w-full pt-20 px-20 pb-10">
         <div className="h-full grid grid-cols-3 gap-5 w-full">
            <AboutCard scroll={scroll} initial={0.3} final={0.8} tall />
            <AboutCard scroll={scroll} initial={0.5} final={1.0} />
            <div className="row-span-2"></div>
            <AboutCard scroll={scroll} initial={0.4} final={0.9} />
         </div>
      </div>
   );
}
