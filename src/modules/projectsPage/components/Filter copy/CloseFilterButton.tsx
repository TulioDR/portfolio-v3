import React from "react";

type Props = {
   onClick: () => void;
};

export default function CloseFilterButton({ onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="border border-white rounded-full h-full aspect-square text-white grid place-content-center"
      >
         <span className="material-icons">close</span>
      </button>
   );
}
