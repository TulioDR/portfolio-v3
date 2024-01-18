import React from "react";

type Props = {
   icon: string;
   onClick: () => void;
};

export default function FilterHeaderButton({ icon, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="flex items-center justify-center h-10"
      >
         <span className="material-symbols-outlined">{icon}</span>
      </button>
   );
}
