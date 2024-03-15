import { MotionValue } from "framer-motion";
import React from "react";

type Props = {
   large?: true;
   scroll: MotionValue<number>;
   tall?: true;
   center?: true;
   children: React.ReactNode;
};

export default function AboutCard({ large, tall, center, children }: Props) {
   return (
      <div
         className={`w-full rounded-3xl flex items-center justify-center shadow-xl text-white 
            ${large ? "col-span-2" : ""}
            ${
               center
                  ? "row-span-2 bg-gradient-to-br from-orange-700 to-yellow-600"
                  : "bg-primary"
            }
            ${tall ? "row-span-4 border-gray-200 border-dashed border-2" : ""}
         `}
      >
         <div className="">{children}</div>
      </div>
   );
}
