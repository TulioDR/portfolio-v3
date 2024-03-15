import React from "react";

type Props = {
   children: React.ReactNode;
   large?: true;
};

export default function SelectedContainer({ children, large }: Props) {
   return (
      <div
         className={`flex items-center justify-center ${
            large ? "flex-1 w-full" : "w-1/2 h-full"
         }`}
      >
         {children}
      </div>
   );
}
