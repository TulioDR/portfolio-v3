import MainContainer from "@/components/MainContainer";
import HomeLogo from "./HomeLogo/HomeLogo";
import HomeTitle from "./HomeTitle";
import SectionContainer from "../SectionContainer";

export default function HomeSection() {
   return (
      <SectionContainer>
         <div className="bg-main-primary h-screen w-full">
            <MainContainer>
               <div className="h-full w-full relative">
                  <HomeLogo />
                  <HomeTitle />
               </div>
            </MainContainer>
         </div>
      </SectionContainer>
   );
}
