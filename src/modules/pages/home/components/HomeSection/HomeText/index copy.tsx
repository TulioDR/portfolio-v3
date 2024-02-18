import React from "react";

type Props = {};

export default function HomeText({}: Props) {
   return (
      <div className="w-full h-full flex flex-col items-center justify-center text-white z-10">
         <div className="text-8xl 2xl:text-9xl text-center font-monserrat uppercase">
            Tulio Ruzo
         </div>
         <div className="text-center">
            SOFTWARE ENGINEER, FRONT END DEVELOPER
         </div>
      </div>
   );
}
