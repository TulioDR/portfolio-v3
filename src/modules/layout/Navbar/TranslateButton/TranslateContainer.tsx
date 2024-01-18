import React from "react";

type Props = {
   onClick: () => void;
   children: React.ReactNode;
};

export default function TranslateContainer({ onClick, children }: Props) {
   return (
      <button
         onClick={onClick}
         className="absolute right-0 top-0 pointer-events-auto p-1 bg-white rounded-full shadow-xl"
      >
         <div className="h-10 w-24 flex justify-between items-center relative text-black">
            {children}
         </div>
      </button>
   );
}
