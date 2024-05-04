import React from "react";

type Props = {
   onClick: () => void;
   children: React.ReactNode;
};

export default function EyeContainer({ onClick, children }: Props) {
   return (
      <div
         onClick={onClick}
         className="w-full border relative border-white flex"
      >
         {children}
      </div>
   );
}
