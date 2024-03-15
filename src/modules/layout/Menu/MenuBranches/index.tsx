import React from "react";
import VerticalBranch from "./VerticalBranch";
import HorizontalBranch from "./HorizontalBranch";

type Props = {};

export default function MenuBranches({}: Props) {
   return (
      <div className="flex flex-col items-center w-full">
         <VerticalBranch />
         <HorizontalBranch />
         <div className="w-full flex justify-between">
            <VerticalBranch />
            <VerticalBranch />
         </div>
      </div>
   );
}
