import React from "react";

type Props = {};

export default function MenuTitle({}: Props) {
   return (
      <div className="absolute top-0 left-0 w-full flex justify-center items-center h-20">
         <h1 className="text-2xl font-semibold uppercase">Navigation</h1>
      </div>
   );
}
