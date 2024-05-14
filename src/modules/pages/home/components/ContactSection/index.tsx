import React from "react";
// import MainButton from "../MainButton";
import ContactTitle from "./ContactTitle";
import ContactButton from "./ContactButton";
import MainContainer from "../MainContainer";

type Props = {};

export default function ContactSection({}: Props) {
   const email = () => {
      window.location.href = "mailto:tulioruzo29@gmail.com";
   };

   const linkedin = () => {
      window.open("https://www.linkedin.com/in/tulio-ruzo/", "_blank");
   };

   const github = () => {
      window.open("https://github.com/TulioDR", "_blank");
   };

   return (
      <div className="h-screen w-full pb-10 bg-secondary">
         <MainContainer hFull>
            <div className="w-full h-full flex flex-col sm:flex-row">
               <div className="flex-1 flex items-center justify-center">
                  <ContactTitle />
               </div>
               <div className="flex-1 h-full flex flex-col justify-center items-center gap-5">
                  <ContactButton onClick={email}>
                     tulioruzo29@gmail.com
                  </ContactButton>
                  <ContactButton onClick={linkedin}>Linkedin</ContactButton>
                  <ContactButton onClick={github}>Github</ContactButton>
               </div>
            </div>
         </MainContainer>
      </div>
   );
}
