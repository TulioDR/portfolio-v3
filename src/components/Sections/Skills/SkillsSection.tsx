import MainContainer from "@/components/MainContainer";
import SectionTitle from "../SectionTitle";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
   return (
      <div className="bg-gray-200 w-full py-24">
         <MainContainer>
            <SectionTitle>Skills</SectionTitle>
            <div className="flex space-x-5 my-7 text-xl">
               <span>Main</span>
               <span>Secondary</span>
               <span>In Progress</span>
            </div>
            <div className="grid grid-cols-5 xl:grid-cols-6 2xl: gap-7">
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
               <SkillCard />
            </div>
         </MainContainer>
      </div>
   );
}
