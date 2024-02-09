import AboutCard from "./AboutCard";

export default function AboutDescription() {
   return (
      <div className="flex flex-col h-screen w-3/4 py-20 px-40">
         <div className="h-full grid grid-cols-2 gap-5 2xl:gap-10 w-full pr-5 2xl:pr-10">
            <AboutCard />
            <AboutCard />
            <AboutCard large />
         </div>
      </div>
   );
}
