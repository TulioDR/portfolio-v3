import React from "react";

type Props = {
   isCardOn: boolean;
};

export default function ClockMessage({ isCardOn }: Props) {
   return (
      <div
         className={`absolute top-0 left-0 w-full h-full font-light duration-[6s] flex items-end ${
            isCardOn ? "opacity-100" : "opacity-0"
         }`}
      >
         <div className="w-full h-2/5 flex flex-col items-center text-gray-600 text-base">
            <div>Great at time</div>
            <div>management</div>
         </div>
      </div>
   );
}
