import React from "react";

type Props = {
   icon: string;
   onClick: () => void;
};

export default function FilterHeaderButton({ icon, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="aspect-square h-[66px] flex items-center justify-center"
      >
         <span className="material-icons">{icon}</span>
      </button>
   );
}
