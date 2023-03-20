import React from "react";
import Phrase from "./Phrase";

type Props = {};

export default function AboutPhrases({}: Props) {
   return (
      <>
         <div className="w-full md:hidden space-y-5">
            <div className="pr-10">
               <Phrase>To try new Things</Phrase>
            </div>
            <div className="ml-auto max-w-max pl-10">
               <Phrase>I learn fast</Phrase>
            </div>
            <div className="pr-10">
               <Phrase>I'm Disciplined with a high attention to Detail</Phrase>
            </div>
            <div className="ml-auto max-w-max pl-10">
               <Phrase>Clean Code Enyoer</Phrase>
            </div>
            <div className="pr-10">
               <Phrase>I Speak English Spanish and Coding</Phrase>
            </div>
         </div>
         <div className="hidden md:flex justify-between h-full w-full flex-1">
            <div className="w-1/2 h-full flex flex-col justify-around pr-5 2xl:pr-10">
               <Phrase>To try new Things</Phrase>
               <Phrase>I'm Disciplined with a high attention to Detail</Phrase>
               <Phrase>I Speak English Spanish and Coding</Phrase>
            </div>
            <div className="w-1/2 h-full lg:pl-80">
               <div className="flex flex-col items-end justify-evenly h-full pl-5 2xl:pl-10">
                  <Phrase>I learn fast</Phrase>
                  <Phrase>Clean Code Enyoer</Phrase>
               </div>
            </div>
         </div>
      </>
   );
}
