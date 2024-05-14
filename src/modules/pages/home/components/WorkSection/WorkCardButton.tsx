import React from "react";

type Props = { children: React.ReactNode; href: string; disabled: boolean };

export default function WorkCardButton({ children, href, disabled }: Props) {
   const handleClick = () => {
      window.open(href, "_blank");
   };

   return (
      <button
         onClick={handleClick}
         className={`aspect-square w-1/2 flex items-center justify-center rounded-full border  text-black ${
            disabled ? "pointer-events-none bg-gray-400" : "bg-white"
         }`}
      >
         {children}
      </button>
   );
}
