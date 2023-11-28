import React from "react";

type Props = {
   children: React.ReactNode;
   onClick: () => void;
};

export default function ModalButton({ children, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="rounded-full min-w-max text-white border border-white h-10 px-5 hover:text-black hover:bg-white text-xs sm:text-sm md:text-base"
      >
         {children}
      </button>
   );
}
