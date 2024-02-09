import React from "react";

type Props = {};

export default function HomeText({}: Props) {
   return (
      <div className="w-full h-full flex flex-col items-center justify-center text-white">
         <div className="text-8xl 2xl:text-9xl font-semibold text-center uppercase">
            <div>Tulio</div>
            <div>Ruzo</div>
         </div>
         <div className="text-center">
            <div>SOFTWARE ENGINEER,</div>
            <div>FRONT END DEVELOPER</div>
         </div>
      </div>
   );
}
