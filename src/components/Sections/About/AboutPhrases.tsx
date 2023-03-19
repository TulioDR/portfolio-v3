import React from "react";
import Phrase from "./Phrase";

type Props = {};

export default function AboutPhrases({}: Props) {
   return (
      <div className="h-full w-full flex-1 flex justify-between py-20">
         <div className="w-1/2 h-full flex flex-col justify-between">
            <Phrase>To try new Things</Phrase>
            <Phrase>I'm Disciplined with a high attention to Detail</Phrase>
            <Phrase>I Speak English Spanish and Coding</Phrase>
         </div>
         <div className="w-1/2 h-full flex flex-col justify-evenly">
            <Phrase>I learn fast</Phrase>
            <Phrase>Clean Code Enyoer</Phrase>
         </div>
      </div>
   );
}
