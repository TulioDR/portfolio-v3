import { MotionValue } from "framer-motion";
import React from "react";

type Props = {
   large?: true;
   scroll: MotionValue<number>;
   initial: number;
   final: number;
   tall?: true;
   children: React.ReactNode;
};

export default function AboutCard({ large, tall, children }: Props) {
   return (
      <div
         className={`w-full rounded flex items-center justify-center shadow-xl  text-white 
            ${large ? "col-span-2" : ""}
            ${
               tall
                  ? "row-span-2 border-gray-200 border-dashed border-2"
                  : "bg-primary"
            }
         `}
      >
         <div className="">{children}</div>
      </div>
   );
}
