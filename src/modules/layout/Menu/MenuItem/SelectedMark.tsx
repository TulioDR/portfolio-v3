import React from "react";

type Props = {};

export default function SelectedMark({}: Props) {
   return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
         <span className="text-2xl text-white w-min text-center">
            Currently here
         </span>
      </div>
   );
}
