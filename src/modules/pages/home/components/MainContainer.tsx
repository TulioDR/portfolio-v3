import React from "react";

type Props = {
   children: React.ReactNode;
   hFull?: true;
};

export default function MainContainer({ children, hFull }: Props) {
   return (
      <div
         className={`lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto ${
            hFull ? "h-full" : ""
         }`}
      >
         {children}
      </div>
   );
}
