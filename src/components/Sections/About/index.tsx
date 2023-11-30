import SectionContainer from "../SectionContainer";
import AboutDescription from "./AboutDescription";
import AboutSectionDesktop from "./desktop";
import AboutSectionMobile from "./mobile";

export default function AboutSection() {
   return (
      <SectionContainer>
         <div id="about">
            <div className="hidden lg:block">
               <AboutSectionDesktop />
            </div>
            <div className="lg:hidden">
               <AboutSectionMobile />
            </div>
            <AboutDescription />
         </div>
      </SectionContainer>
   );
}
