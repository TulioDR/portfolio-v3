import MainContainer from "@/components/MainContainer";
import SectionTitle from "../../SectionTitle";
import AboutCardMobile from "../AboutCardMobile";
import AboutPhrasesMobile from "./AboutPhrasesMobile";

export default function AboutSectionMobile() {
   return (
      <div className="py-24 lg:hidden bg-gradient-to-b from-stone-700 to-stone-500">
         <MainContainer>
            <SectionTitle>About me</SectionTitle>
            <AboutCardMobile />
            <AboutPhrasesMobile />
         </MainContainer>
      </div>
   );
}
