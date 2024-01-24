import React from "react";
import MainButton from "../MainButton";

type Props = {};

export default function ContactSection({}: Props) {
   return (
      <div className="h-screen w-full p-20 bg-gradient-to-b from-primary via-[#141B25] to-[#141B25]">
         <div className="w-full h-full flex justify-between">
            <div className="grid place-content-center w-1/2">
               <div className="flex flex-col justify-center gap-10">
                  <div className="text-[8vw] leading-none text-white font-light">
                     <span className="block">Let`s work</span>
                     <span className="block">together</span>
                  </div>
                  <div className="flex gap-10">
                     <button className="rounded-full border border-white text-white py-5 px-10">
                        tulioruzo29@gmail.com
                     </button>
                     <button className="rounded-full border border-white text-white py-5 px-10">
                        Linkedin
                     </button>
                  </div>
               </div>
            </div>
            <div className="w-1/2 h-full grid place-content-center pointer-events-none">
               <MainButton light>Get in Touch</MainButton>
            </div>
         </div>
      </div>
   );
}
