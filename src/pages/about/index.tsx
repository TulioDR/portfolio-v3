import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
   return (
      <div>
         <div className="h-screen w-full bg-green-500"></div>
         <div className="h-[200vh] w-full bg-red-900">
            <div className="h-[90vh] w-full sticky top-0 bg-yellow-800 border-8 border-black">
               <div className="relative h-full">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500/50 z-10"></div>
                  <div className="h-1/2 w-full bg-blue-500 sticky top-0 grid grid-cols-2 gap-10 p-10">
                     <div className="bg-black rounded-3xl w-full h-full"></div>
                     <div className="bg-black rounded-3xl w-full h-full"></div>
                     <div className="bg-black rounded-3xl w-full h-full"></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="h-screen w-full "></div>
         <div className="h-screen w-full "></div>
         <div className="h-screen w-full bg-red-900"></div>
      </div>
   );
}
