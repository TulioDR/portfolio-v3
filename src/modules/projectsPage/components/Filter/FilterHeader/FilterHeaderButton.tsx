import React from "react";

type Props = {
   icon: string;
   onClick: () => void;
};

export default function FilterHeaderButton({ icon, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="aspect-square h-full grid place-content-center"
      >
         <span className="material-icons">{icon}</span>
      </button>
   );
}
