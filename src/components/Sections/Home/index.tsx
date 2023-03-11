import MainContainer from "@/components/MainContainer";

export default function HomeSection() {
   return (
      <main className="h-screen grid place-content-center relative bg-primary">
         <h1 className="absolute bottom-0 left-0 w-full pb-7 text-white">
            <MainContainer>
               <div className="text-lg">Software Developer</div>
               <div className="lg:text-9xl xl:text-[10rem] font-semibold">
                  Tulio Ruzo
               </div>
            </MainContainer>
         </h1>
      </main>
   );
}
