import FilterBodyContainer from "./FilterBodyContainer";
import FilterBodyHeader from "./FilterBodyHeader";
import allSkills from "@/assets/skills/allSkills";
import TechnologyCard from "./TechnologyCard";
import SkillModel from "@/models/SkillModel";

type Props = {
   resetFilter: () => void;
   addTech: (tech: SkillModel) => void;
   removeTech: (tech: SkillModel) => void;
   selectedTech: SkillModel[];
};

export default function FilterBody({
   resetFilter,
   addTech,
   removeTech,
   selectedTech,
}: Props) {
   return (
      <FilterBodyContainer>
         <FilterBodyHeader resetFilter={resetFilter} />
         <div className="grid gap-2 grid-cols-4 sm:grid-cols-6">
            {allSkills.map((tech) => (
               <TechnologyCard
                  key={tech.name}
                  name={tech.name}
                  logo={tech.logo}
                  addTech={() => addTech(tech)}
                  removeTech={() => removeTech(tech)}
                  isSelected={selectedTech.some(
                     ({ name }) => tech.name === name
                  )}
               />
            ))}
         </div>
      </FilterBodyContainer>
   );
}
