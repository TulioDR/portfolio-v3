import React from "react";

type Props = {};

export default function ContactTitle({}: Props) {
   return (
      <div className="text-6xl xl:text-7xl 2xl:text-8xl leading-none text-white font-light">
         <span className="block">Let`s work</span>
         <span className="block">together</span>
      </div>
   );
}
