import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function ContactButton({ children }: Props) {
   return (
      <button className="rounded-full border border-white text-white py-3 2xl:py-5 px-5 2xl:px-10">
         {children}
      </button>
   );
}
