import MainContainer from "@/components/MainContainer";
import SectionTitle from "../../SectionTitle";
import AboutCardMobile from "./AboutCardMobile";

import PhraseMobile from "./PhraseMobile";
import useLanguageContext from "@/context/LanguageContext";

export default function AboutSectionMobile() {
   const { currentLanguage } = useLanguageContext();
   const { title, sub1, sub2, sub3, sub4, sub5 } = currentLanguage.about;
   return (
      <div className="py-24 lg:hidden bg-gradient-to-b from-stone-700 to-stone-500">
         <MainContainer>
            <SectionTitle>{title}</SectionTitle>
            <AboutCardMobile />
            <div className="w-full space-y-5 py-10">
               <div className="pr-10">
                  <PhraseMobile>{sub1}</PhraseMobile>
               </div>
               <div className="ml-auto max-w-max pl-10">
                  <PhraseMobile>{sub2}</PhraseMobile>
               </div>
               <div className="pr-10">
                  <PhraseMobile>{sub3}</PhraseMobile>
               </div>
               <div className="ml-auto max-w-max pl-10">
                  <PhraseMobile>{sub4}</PhraseMobile>
               </div>
               <div className="pr-10">
                  <PhraseMobile>{sub5}</PhraseMobile>
               </div>
            </div>
         </MainContainer>
      </div>
   );
}
