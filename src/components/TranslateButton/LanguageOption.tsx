import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function LanguageOption({ children }: Props) {
   return (
      <div className="h-9 flex items-center justify-between rounded-lg hover:bg-primary hover:text-white pl-2 cursor-pointer bg-white text-black">
         <span className="text-sm font-bold">{children}</span>
      </div>
   );
}
