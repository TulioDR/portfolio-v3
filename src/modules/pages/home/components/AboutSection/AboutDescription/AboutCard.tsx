import React from "react";

type Props = {
   large?: true;
};

export default function AboutCard({ large }: Props) {
   return (
      <div
         className={`w-full rounded-3xl bg-gray-200 shadow-xl ${
            large ? "col-span-2" : ""
         }`}
      ></div>
   );
}
