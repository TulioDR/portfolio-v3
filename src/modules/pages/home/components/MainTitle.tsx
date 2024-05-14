import React from "react";

type Props = {
   children: React.ReactNode;
   white?: true;
};

export default function MainTitle({ children, white }: Props) {
   return (
      <div
         className={`font-black text-center my-10 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl ${
            white ? "text-white" : "text-black"
         }`}
      >
         {children}
      </div>
   );
}
