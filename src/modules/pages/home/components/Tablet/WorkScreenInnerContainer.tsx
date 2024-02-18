import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function WorkScreenInnerContainer({ children }: Props) {
   return (
      <div className="w-full h-full bg-gradient-to-tl from-orange-700 to-yellow-600 flex items-center justify-center rounded-md overflow-hidden">
         {/* <div className="w-full h-full bg-gradient-to-tl from-orange-700 to-[#FFF16A] flex items-center justify-center rounded-2xl overflow-hidden"> */}
         <div className="w-[96%] h-[96%] overflow-hidden bg-primary">
            {children}
         </div>
      </div>
   );
}
