import React from "react";

type Props = {
   children: React.ReactNode;
   hFull?: true;
};

export default function MainContainer({ children, hFull }: Props) {
   return (
      <div
         className={` w-full px-5 md:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto ${
            hFull ? "h-full" : ""
         }`}
      >
         {children}
      </div>
   );
}
