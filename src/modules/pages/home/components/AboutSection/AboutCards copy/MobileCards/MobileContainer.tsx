import React from "react";

type Props = {
   children: React.ReactNode;
   tall?: true;
   large?: true;
};

export default function MobileContainer({ children, tall, large }: Props) {
   return (
      <div
         className={`rounded-xl bg-white shadow-xl border-[12px] border-white
         ${tall ? "row-span-2" : ""} 
         ${large ? "col-span-2" : ""}`}
      >
         {children}
      </div>
   );
}
