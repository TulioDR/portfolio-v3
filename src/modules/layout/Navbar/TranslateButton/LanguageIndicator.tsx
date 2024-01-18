import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function LanguageIndicator({ children }: Props) {
   return (
      <div
         className={`uppercase aspect-square h-full grid place-content-center`}
      >
         {children}
      </div>
   );
}
