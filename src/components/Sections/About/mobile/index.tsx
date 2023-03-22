import MainContainer from "@/components/MainContainer";
import SectionTitle from "../../SectionTitle";
import AboutCardMobile from "./AboutCardMobile";

import PhraseMobile from "./PhraseMobile";

export default function AboutSectionMobile() {
   return (
      <div className="py-24 lg:hidden bg-gradient-to-b from-stone-700 to-stone-500">
         <MainContainer>
            <SectionTitle>About me</SectionTitle>
            <AboutCardMobile />
            <div className="w-full space-y-5 py-10">
               <div className="pr-10">
                  <PhraseMobile>To try new Things</PhraseMobile>
               </div>
               <div className="ml-auto max-w-max pl-10">
                  <PhraseMobile>I learn fast</PhraseMobile>
               </div>
               <div className="pr-10">
                  <PhraseMobile>
                     I'm Disciplined with a high attention to Detail
                  </PhraseMobile>
               </div>
               <div className="ml-auto max-w-max pl-10">
                  <PhraseMobile>Clean Code Enyoer</PhraseMobile>
               </div>
               <div className="pr-10">
                  <PhraseMobile>
                     I Speak English Spanish and Coding
                  </PhraseMobile>
               </div>
            </div>
         </MainContainer>
      </div>
   );
}
