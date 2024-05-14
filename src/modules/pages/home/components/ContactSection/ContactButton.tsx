import React from "react";

type Props = {
   children: React.ReactNode;
   onClick: () => void;
};

export default function ContactButton({ children, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="rounded border border-white text-white py-3 2xl:py-5 px-5 2xl:px-10"
      >
         {children}
      </button>
   );
}
