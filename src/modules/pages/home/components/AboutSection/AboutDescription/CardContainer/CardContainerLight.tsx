import React from "react";

type Props = {
   onClick: () => void;
   isCardOn: boolean;
   isCardOpen: boolean;
   right?: true;
};

export default function CardContainerLight({
   onClick,
   isCardOn,
   isCardOpen,
   right,
}: Props) {
   return (
      <div className="w-15 h-full flex flex-col items-center relative z-10 flex-shrink-0">
         <div
            className={`w-1 flex-1 rounded-t-full duration-500 ${
               isCardOn ? "bg-accent" : "bg-gray-400"
            }`}
         />
         <button
            onClick={onClick}
            className={`aspect-square w-10 rounded-full duration-500 text-white 
               ${isCardOn ? "bg-accent " : "bg-gray-400"}
               ${right ? "rotate-180" : ""}
            `}
         >
            <div
               className={`flex items-center justify-center w-full h-full duration-300 ${
                  isCardOpen ? "rotate-180" : ""
               }`}
            >
               <span className="material-symbols-outlined !text-2xl">
                  chevron_left
               </span>
            </div>
         </button>
         <div
            className={`w-1 flex-1 rounded-b-full duration-500 ${
               isCardOn ? "bg-accent" : "bg-gray-400"
            }`}
         />
      </div>
   );
}
