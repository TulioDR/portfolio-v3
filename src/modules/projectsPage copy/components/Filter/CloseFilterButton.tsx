import React from "react";

type Props = {
   onClick: () => void;
};

export default function CloseFilterButton({ onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="absolute top-0 left-0 h-10 aspect-square rounded-lg bg-main-primary text-white grid place-content-center"
      >
         <span className="material-icons">close</span>
      </button>
   );
}
