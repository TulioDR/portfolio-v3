import React from "react";

type Props = {};

export default function InitialLearningMessage({}: Props) {
   return (
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none group-hover:opacity-0 bg-black/70 duration-300">
         <div className="flex flex-col h-full items-center justify-center text-white text-4xl font-bold uppercase gap-5">
            <div>I</div>
            <div>Learn</div>
            <div>Fast</div>
         </div>
      </div>
   );
}
