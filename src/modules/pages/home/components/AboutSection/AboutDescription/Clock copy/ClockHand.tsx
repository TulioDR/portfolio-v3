import React from "react";

type Props = {
   isCardOn: boolean;
   minute?: true;
};

export default function ClockHand({ minute, isCardOn }: Props) {
   return (
      <div className="absolute top-0 left-0 w-full h-1/2 flex items-end justify-center">
         <div
            className={`w-1 bg-black origin-bottom duration-[6s] 
            ${minute ? "h-4/5" : "h-1/2"} 
            ${
               isCardOn
                  ? minute
                     ? "rotate-[4320deg]"
                     : "rotate-[360deg]"
                  : "rotate-0"
            }`}
         />
      </div>
   );
}
