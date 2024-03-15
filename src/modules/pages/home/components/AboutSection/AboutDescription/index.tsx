import { MotionValue } from "framer-motion";
import AboutCard from "./AboutCard";

interface Props {
   scroll: MotionValue<number>;
}

export default function AboutDescription({ scroll }: Props) {
   return (
      <div className="flex flex-col h-screen w-full pt-20 px-20 pb-10">
         <div className="h-full grid grid-cols-3 gap-5 w-full">
            <AboutCard scroll={scroll} tall>
               Bye
            </AboutCard>
            <AboutCard scroll={scroll}>top</AboutCard>
            <div className="row-span-4" />
            <AboutCard scroll={scroll} center>
               More about me
            </AboutCard>
            <AboutCard scroll={scroll}>bottom</AboutCard>
         </div>
      </div>
   );
}
