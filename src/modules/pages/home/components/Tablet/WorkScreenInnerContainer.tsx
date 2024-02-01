import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function WorkScreenInnerContainer({ children }: Props) {
   return (
      <div className="w-full h-full bg-gradient-to-tl from-orange-700 to-yellow-600 flex items-center justify-center rounded-2xl overflow-hidden">
         {/* <div className="w-full h-full bg-gradient-to-tl from-orange-700 to-[#FFF16A] flex items-center justify-center rounded-2xl overflow-hidden"> */}
         <div className="w-[95%] h-[95%] overflow-hidden bg-primary rounded-2xl">
            {children}
         </div>
      </div>
   );
}
