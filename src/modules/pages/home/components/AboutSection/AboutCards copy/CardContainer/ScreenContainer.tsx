import React from "react";

type Props = {
   children: React.ReactNode;
   largeHeight: number;
   large?: true;
   tall?: true;
};

export default function ScreenContainer({
   children,
   large,
   largeHeight,
   tall,
}: Props) {
   return (
      <div
         style={{ height: large ? largeHeight : undefined }}
         className={`w-full rounded-2xl relative z-10 bg-primary overflow-hidden
   ${!large && !tall ? "aspect-square square-about-card" : ""}
`}
      >
         {children}
      </div>
   );
}
