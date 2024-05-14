import React from "react";
// import ScrollIndicator from "../../ScrollIndicator";
import { MotionValue } from "framer-motion";
import ScrollIndicator from "../ScrollIndicator";
import MainContainer from "../../MainContainer";

type Props = {
   scroll: MotionValue<number>;
};

export default function HomeText({ scroll }: Props) {
   return (
      <div className="h-full w-full absolute top-0 left-0 py-20 2xl:py-40 z-10">
         <MainContainer hFull>
            <div className="w-full h-full flex flex-col justify-between text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-monserrat uppercase">
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
         </MainContainer>
      </div>
   );
}
