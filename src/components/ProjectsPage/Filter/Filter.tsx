import allSkills from "@/assets/skills/allSkills";
import SkillModel from "@/models/SkillModel";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { useState } from "react";
import FilterHeader from "./FilterHeader";
import TechnologyCard from "./TechnologyCard";
import ResetButton from "./ResetButton";
import useLanguageContext from "@/context/LanguageContext";

type Props = {
   close: () => void;
   selectedTech: SkillModel[];
   setSelectedTech: React.Dispatch<React.SetStateAction<SkillModel[]>>;
};

export default function Filter({
   close,
   selectedTech,
   setSelectedTech,
}: Props) {
   const [tech, setTech] = useState<SkillModel[]>(allSkills);

   const addToSelectedTech = (
      name: string,
      logo: StaticImageData,
      link: string
   ) => {
      const newArray = tech.filter((tech) => tech.name !== name);
      setTech(newArray);
      setSelectedTech((oldArray) => [...oldArray, { name, logo, link }]);
   };

   const removeFromSelectedTech = (
      name: string,
      logo: StaticImageData,
      link: string
   ) => {
      setTech((oldArray) => [...oldArray, { name, logo, link }]);
      const newArray = selectedTech.filter((tech) => tech.name !== name);
      setSelectedTech(newArray);
   };

   const resetFilter = () => {
      setTech(allSkills);
      setSelectedTech([]);
   };

   const { currentLanguage } = useLanguageContext();
   const { title, message, technologies } = currentLanguage.projects.filer;
   return (
      <motion.div
         drag={true}
         dragMomentum={false}
         className="fixed bottom-10 right-10 bg-white rounded-xl z-50 shadow-xl p-3 pt-0 border-white cursor-grab active:cursor-grabbing"
      >
         <FilterHeader close={close} />
         <div
            onPointerDownCapture={(e) => e.stopPropagation()}
            className="w-full md:w-[600px] h-auto shadow-inner bg-gray-200 rounded-xl pt-2 pl-2 cursor-default"
         >
            <div className="w-full flex justify-between">
               <div className="text-lg font-medium">{title}</div>
               <ResetButton onClick={resetFilter} />
            </div>
            {selectedTech.length > 0 ? (
               <div>
                  {selectedTech.map(({ name, logo, link }) => (
                     <TechnologyCard
                        key={name}
                        name={name}
                        logo={logo}
                        onClick={() => removeFromSelectedTech(name, logo, link)}
                     />
                  ))}
                  <div className="clear-both" />
               </div>
            ) : (
               <div className="text-gray-500 text-sm ml-2 mb-2 h-10 flex items-center">
                  {message}
               </div>
            )}

            <div className="mb-2">{technologies}</div>
            <div>
               {tech.map(({ name, logo, link }) => (
                  <TechnologyCard
                     key={name}
                     name={name}
                     logo={logo}
                     onClick={() => addToSelectedTech(name, logo, link)}
                  />
               ))}
               <div className="clear-both" />
            </div>
         </div>
      </motion.div>
   );
}
