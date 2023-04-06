import MainContainer from "@/components/MainContainer";
import HomeLogo from "./HomeLogo/HomeLogo";
import HomeTitle from "./HomeTitle";

export default function HomeSection() {
   return (
      <main className="h-screen bg-main-primary overflow-hidden">
         <MainContainer>
            <div className="h-full w-full relative">
               <HomeLogo />
               <HomeTitle />
            </div>
         </MainContainer>
      </main>
   );
}
