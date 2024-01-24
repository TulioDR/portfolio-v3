import React from "react";
import MainButton from "../MainButton";

type Props = {};

export default function WorkSection({}: Props) {
   return (
      <div>
         <div
            id="work"
            className="h-screen sticky top-0 w-full bg-gradient-to-b from-gray-200 to-gray-300 "
         >
            <div className="flex flex-col items-center pt-20 h-full">
               <div className="aspect-video w-[calc(50%-80px)]"></div>
               <div className="flex-1 w-full grid place-content-center">
                  <MainButton>View Work</MainButton>
               </div>
            </div>
         </div>
         <div className="h-screen" />
         <div className="h-screen" />
      </div>
   );
}
