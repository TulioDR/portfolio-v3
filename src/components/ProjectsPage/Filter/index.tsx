import allSkills from "@/assets/skills/allSkills";
import SkillModel from "@/models/SkillModel";
import { AnimatePresence, useAnimationControls } from "framer-motion";
import ResetButton from "./ResetButton";
import useLanguageContext from "@/context/LanguageContext";
import TechnologiesDisplayed from "./TechnologiesDisplayed";
import { useState } from "react";
import FilterHeaderContainer from "./FilterHeader/FilterHeaderContainer";
import CloseFilterButton from "./FilterHeader/CloseFilterButton";
import FilterMessage from "./FilterHeader/FilterMessage";
import FilterContainer from "./FilterContainer";
import FilterBodyContainer from "./FilterBody/FilterBodyContainer";
import DragMessage from "./FilterHeader/DragMessage";

type Props = {
   open: () => void;
   close: () => void;
   selectedTech: SkillModel[];
   setSelectedTech: React.Dispatch<React.SetStateAction<SkillModel[]>>;
   notSelectedTech: SkillModel[];
   setNotSelectedTech: React.Dispatch<React.SetStateAction<SkillModel[]>>;
   isFilterOpen: boolean;
};

export default function Filter({
   open,
   close,
   selectedTech,
   setSelectedTech,
   notSelectedTech,
   setNotSelectedTech,
   isFilterOpen,
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

   const buttonAnimationsControls = useAnimationControls();

   const [showFilterBody, setShowFilterBody] = useState<boolean>(false);

   const animateControls = useAnimationControls();

   const [showDragMessage, setShowDragMessage] = useState<boolean>(false);

   const closeFilter = () => {
      setShowDragMessage(false);
      setShowFilterBody(false);
      close();
   };

   const expandFilterButton = async () => {
      let width: number = 0;
      if (window.innerWidth < 640) width = window.innerWidth - 40;
      else if (window.innerWidth < 768) width = 540;
      else width = 610;
      open();
      await buttonAnimationsControls.start({
         width: width,
         borderBottomLeftRadius: 0,
         borderBottomRightRadius: 0,
         transition: { duration: 0.4, ease: "easeInOut" },
      });
      setShowFilterBody(true);
   };
   const contractFilterButton = () => {
      animateControls.start({ x: 0, y: 0, transition: { duration: 0.4 } });
      buttonAnimationsControls.start({
         width: 40,
         borderBottomLeftRadius: 8,
         borderBottomRightRadius: 8,
         transition: { duration: 0.4, ease: "easeInOut" },
      });
   };

   const onAnimationComplete = (definition: any) => {
      if (definition.height === 300) setShowDragMessage(true);
   };

   return (
      <FilterContainer
         animationControls={animateControls}
         isFilterOpen={isFilterOpen}
      >
         <FilterHeaderContainer
            onClick={expandFilterButton}
            isFilterOpen={isFilterOpen}
            animationControls={buttonAnimationsControls}
         >
            <FilterMessage isFilterOpen={isFilterOpen} />
            <AnimatePresence>
               {showDragMessage && <DragMessage />}
            </AnimatePresence>
            <AnimatePresence>
               {showFilterBody && <CloseFilterButton onClick={closeFilter} />}
            </AnimatePresence>
         </FilterHeaderContainer>
         <AnimatePresence onExitComplete={contractFilterButton}>
            {showFilterBody && (
               <FilterBodyContainer onAnimationComplete={onAnimationComplete}>
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
               </FilterBodyContainer>
            )}
         </AnimatePresence>
      </FilterContainer>
   );
}
