import React from "react";
import MainButton from "../MainButton";
import ContactTitle from "./ContactTitle";
import ContactButton from "./ContactButton";

type Props = {};

export default function ContactSection({}: Props) {
   return (
      <div className="h-screen w-full pt-20 px-20 pb-10 bg-gradient-to-b from-primary to-secondary">
         <div className="w-full h-full flex">
            <div className="grid place-content-center w-1/2">
               <div className="flex flex-col justify-center gap-10">
                  <ContactTitle />
                  <div className="flex gap-5 2xl:gap-10">
                     <ContactButton>tulioruzo29@gmail.com</ContactButton>
                     <ContactButton>Linkedin</ContactButton>
                  </div>
               </div>
            </div>
            <div className="w-1/2 h-full grid place-content-center pointer-events-none">
               <MainButton>Get in Touch</MainButton>
            </div>
         </div>
      </div>
   );
}
