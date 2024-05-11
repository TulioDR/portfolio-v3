import React from "react";
// import ScrollIndicator from "../../ScrollIndicator";
import { MotionValue } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";

type Props = {
   scroll: MotionValue<number>;
};

export default function HomeText({ scroll }: Props) {
   return (
      <div className="h-full w-full flex absolute pl-30 pt-24 pr-10 pb-10 z-10">
         <div className="w-full h-full flex flex-col justify-between text-white text-6xl xl:text-7xl 2xl:text-8xl font-monserrat uppercase">
            <div className="">
               <div>Tulio Ruzo</div>
               <div>Developer</div>
            </div>
            <div className="flex justify-between items-end">
               <ScrollIndicator alwaysShow scroll={scroll} />
               <div className="text-end">
                  <div>Software</div>
                  <div>Engineer</div>
               </div>
            </div>
         </div>
      </div>
   );
}
