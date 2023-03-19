import MainContainer from "@/components/MainContainer";
import HomeLogo from "./HomeLogo";

export default function HomeSection() {
   return (
      <main className="h-screen bg-primary ">
         <MainContainer>
            <div className="h-full w-full relative">
               <HomeLogo />
               <h1 className="absolute bottom-0 left-0 w-full pb-7 text-white">
                  <div className="text-lg">Software Developer</div>
                  <div className="lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-semibold w-min">
                     Tulio Ruzo
                  </div>
               </h1>
            </div>
         </MainContainer>
      </main>
   );
}
