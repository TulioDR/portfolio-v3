import React from "react";

type Props = {
   close: () => void;
};

export default function FilterHeader({ close }: Props) {
   return (
      <div className="flex h-10 bg-white items-center">
         <span className="material-icons">drag_indicator</span>
         <div className="flex-1 text-center">Drag me!</div>
         <button
            onClick={close}
            className="h-full aspect-square grid place-content-center hover:bg-primary hover:text-white"
         >
            <span className="material-icons">close</span>
         </button>
      </div>
   );
}
