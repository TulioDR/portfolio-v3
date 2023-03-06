import SidebarContainer from "../Sidebar/SidebarContainer";
import TechnologyCard from "./TechnologyCard";
import FilterHeader from "./FilterHeader";
import { AnimatePresence, motion } from "framer-motion";
import allSkills from "@/assets/skills/allSkills";
import { useState } from "react";
import LayoutButtons from "./LayoutButtons";
import SkillModel from "@/models/SkillModel";
import { StaticImageData } from "next/image";

type Props = {
   toggle: () => void;
   isSidebarExpanded: boolean;
   currentLayout: "normal" | "grid" | "list";
   setCurrentLayout: React.Dispatch<
      React.SetStateAction<"normal" | "grid" | "list">
   >;
};

export default function Sidebar({
   toggle,
   isSidebarExpanded,
   currentLayout,
   setCurrentLayout,
}: Props) {
   const [selectedTech, setSelectedTech] = useState<SkillModel[]>([]);
   const [NonSelectedTech, setNonSelectedTech] =
      useState<SkillModel[]>(allSkills);

   const addToSelectedTech = (
      name: string,
      logo: StaticImageData,
      link: string
   ) => {
      const newArray = NonSelectedTech.filter((tech) => tech.name !== name);
      setNonSelectedTech(newArray);
      setTimeout(() => {
         setSelectedTech((oldArray) => [...oldArray, { name, logo, link }]);
      }, 300);
   };

   const removeFromSelectedTech = (
      name: string,
      logo: StaticImageData,
      link: string
   ) => {
      setNonSelectedTech((oldArray) => [...oldArray, { name, logo, link }]);
      const newArray = selectedTech.filter((tech) => tech.name !== name);
      setSelectedTech(newArray);
   };

   return (
      <SidebarContainer isSidebarExpanded={isSidebarExpanded}>
         <div className="w-full flex flex-col justify-between pt-20 pb-5">
            <LayoutButtons
               currentLayout={currentLayout}
               setCurrentLayout={setCurrentLayout}
               isSidebarExpanded={isSidebarExpanded}
            />
         </div>
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
            className="w-full flex-1 pl-5 pr-5 hover:pr-3 pb-5 main-scrollbar overflow-hidden hover:overflow-y-scroll bg-white shadow-xl"
         >
            <FilterHeader toggle={toggle} />
            <div className="text-sm">Selected</div>
            <ul>
               <AnimatePresence>
                  {selectedTech.map(({ name, logo, link }) => (
                     <TechnologyCard
                        key={name}
                        name={name}
                        logo={logo}
                        onClick={() => removeFromSelectedTech(name, logo, link)}
                     />
                  ))}
               </AnimatePresence>
            </ul>
            <div className="text-sm">Technologies</div>
            <ul>
               <AnimatePresence>
                  {NonSelectedTech.map(({ name, logo, link }) => (
                     <TechnologyCard
                        key={name}
                        name={name}
                        logo={logo}
                        onClick={() => addToSelectedTech(name, logo, link)}
                     />
                  ))}
               </AnimatePresence>
            </ul>
         </motion.div>
      </SidebarContainer>
   );
}
