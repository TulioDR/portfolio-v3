import allSkills from "@/assets/skills/allSkills";
import SkillModel from "@/models/SkillModel";
import { motion } from "framer-motion";
import FilterHeader from "./FilterHeader";
import ResetButton from "./ResetButton";
import useLanguageContext from "@/context/LanguageContext";
import TechnologiesDisplayed from "./TechnologiesDisplayed";

type Props = {
   close: () => void;
   selectedTech: SkillModel[];
   setSelectedTech: React.Dispatch<React.SetStateAction<SkillModel[]>>;
   notSelectedTech: SkillModel[];
   setNotSelectedTech: React.Dispatch<React.SetStateAction<SkillModel[]>>;
};

export default function Filter({
   close,
   selectedTech,
   setSelectedTech,
   notSelectedTech,
   setNotSelectedTech,
}: Props) {
   const addToSelectedTech = (newTech: SkillModel) => {
      setSelectedTech((oldArray) => [...oldArray, newTech]);

      const newArray = notSelectedTech.filter(
         ({ name }) => name !== newTech.name
      );
      setNotSelectedTech(newArray);
   };
   const removeFromSelectedTech = (oldTech: SkillModel) => {
      const newArray = selectedTech.filter(({ name }) => name !== oldTech.name);
      setSelectedTech(newArray);

      const newTechToSelect = allSkills.filter((tech) =>
         newArray.every(({ name }) => tech.name !== name)
      );
      setNotSelectedTech(newTechToSelect);
   };

   const resetFilter = () => {
      setNotSelectedTech(allSkills);
      setSelectedTech([]);
   };

   const { currentLanguage } = useLanguageContext();
   const { title, message1, message2, technologies } =
      currentLanguage.projects.filer;
   return (
      <motion.div
         drag={true}
         dragMomentum={false}
         className="fixed bottom-10 right-10 bg-white rounded-xl z-50 shadow-xl p-3 pt-0 border-white cursor-grab active:cursor-grabbing"
      >
         <FilterHeader close={close} />
         <div
            onPointerDownCapture={(e) => e.stopPropagation()}
            className="w-full md:w-[600px] h-auto shadow-inner bg-main-white rounded-xl pt-2 pl-2 cursor-default"
         >
            <div className="w-full flex justify-between">
               <div className="text-lg font-medium">{title}</div>
               <ResetButton onClick={resetFilter} />
            </div>
            <TechnologiesDisplayed
               technologies={selectedTech}
               addTech={removeFromSelectedTech}
               emptyMessage={message1}
            />

            <div className="mb-2">{technologies}</div>
            <TechnologiesDisplayed
               technologies={notSelectedTech}
               addTech={addToSelectedTech}
               emptyMessage={message2}
            />
         </div>
      </motion.div>
   );
}
