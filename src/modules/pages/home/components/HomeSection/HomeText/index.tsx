import React from "react";

type Props = {};

export default function HomeText({}: Props) {
   return (
      <div className="w-full h-full flex flex-col justify-between text-white text-6xl xl:text-7xl 2xl:text-8xl z-10 font-monserrat uppercase">
         <div className="">
            <div>Tulio Ruzo</div>
            <div>Developer</div>
         </div>
         <div className="text-end">
            <div>Software</div>
            <div>Engineer</div>
         </div>
      </div>
   );
}
