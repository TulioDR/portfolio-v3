import MainContainer from "@/components/MainContainer";
import useLanguageContext from "@/context/LanguageContext";
import HomeLogo from "./HomeLogo/HomeLogo";

export default function HomeSection() {
   const { currentLanguage } = useLanguageContext();
   const { developer } = currentLanguage.home;
   return (
      <main className="h-screen bg-primary overflow-hidden">
         <MainContainer>
            <div className="h-full w-full relative">
               <HomeLogo />
               <h1 className="absolute bottom-0 left-0 w-full pb-7 text-white">
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                     {developer}
                  </div>
                  <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-semibold w-min">
                     Tulio Ruzo
                  </div>
               </h1>
            </div>
         </MainContainer>
      </main>
   );
}
