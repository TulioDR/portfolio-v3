import SkillModel from "@/models/SkillModel";
import TechnologyCard from "./TechnologyCard";

type Props = {
   technologies: SkillModel[];
   emptyMessage: string;
   addTech: (newTech: SkillModel) => void;
};

export default function TechnologiesDisplayed({
   technologies,
   emptyMessage,
   addTech,
}: Props) {
   return (
      <>
         {technologies.length > 0 ? (
            <div>
               {technologies.map((tech) => (
                  <TechnologyCard
                     key={tech.name}
                     name={tech.name}
                     logo={tech.logo}
                     onClick={() => addTech(tech)}
                  />
               ))}
               <div className="clear-both" />
            </div>
         ) : (
            <div className="text-gray-500 text-sm ml-2 mb-2 h-10 flex items-center">
               {emptyMessage}
            </div>
         )}
      </>
   );
}
