import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function Phrase({ children }: Props) {
   return (
      <div className="text-white text-2xl font-semibold rounded-2xl">
         {children}
      </div>
   );
}
