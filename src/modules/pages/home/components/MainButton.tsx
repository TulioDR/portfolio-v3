import React from "react";

type Props = {
   children: React.ReactNode;
   light?: boolean;
};

export default function MainButton({ children, light }: Props) {
   return (
      <button
         className={`w-44 2xl:w-52 z-50 aspect-square rounded-full shadow-xl pointer-events-auto ${
            light ? "bg-gray-200 text-black" : "bg-primary text-white"
         }`}
      >
         {children}
      </button>
   );
}
