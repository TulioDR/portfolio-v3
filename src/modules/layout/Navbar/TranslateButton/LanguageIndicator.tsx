import React from "react";

type Props = {
   children: React.ReactNode;
   isActive: boolean;
};

export default function LanguageIndicator({ children, isActive }: Props) {
   return (
      <div
         className={`uppercase ${isActive ? "text-orange-600" : "text-white"}`}
      >
         {children}
      </div>
   );
}
