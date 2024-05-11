import React from "react";

type Props = {
   large?: true;
   tall?: true;
   right?: true;
   left?: true;
   children: React.ReactNode;
   onMouseEnter: () => void;
   onMouseLeave: () => void;
   isCardOn: boolean;
};

export default function CardContainer({
   onMouseEnter,
   onMouseLeave,
   large,
   tall,
   right,
   left,
   children,
   isCardOn,
}: Props) {
   return (
      <div
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         className={`flex bg-white shadow-xl p-3 rounded-3xl
            ${tall ? "row-span-2" : ""}
            ${large ? "col-span-2" : "col-span-1"} 
            ${right ? "pr-0" : "flex-row-reverse"}
            ${left ? "pl-0" : ""}
         `}
      >
         <div className="w-full h-full rounded-2xl bg-primary overflow-hidden">
            {children}
         </div>
         <div className="w-15 h-full flex justify-center">
            <div
               className={`w-1 h-full rounded-full duration-500 ${
                  isCardOn ? "bg-accent" : "bg-gray-400"
               }`}
            />
         </div>
      </div>
   );
}
