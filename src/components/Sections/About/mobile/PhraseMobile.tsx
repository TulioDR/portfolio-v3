import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function PhraseMobile({ children }: Props) {
   return (
      <div className="text-main-white text-lg sm:text-xl xl:text-2xl font-semibold rounded-2xl border border-main-primary py-3 px-4 max-w-max sm:w-auto">
         {children}
      </div>
   );
}
