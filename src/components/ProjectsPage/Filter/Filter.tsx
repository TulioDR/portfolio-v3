import SkillModel from "@/models/SkillModel";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import FilterHeader from "./FilterHeader";
import TechnologyCard from "./TechnologyCard";

type Props = {
   close: () => void;
   tech: SkillModel[];
   selectedTech: SkillModel[];
   addToSelectedTech: (
      name: string,
      logo: StaticImageData,
      link: string
   ) => void;
   removeFromSelectedTech: (
      name: string,
      logo: StaticImageData,
      link: string
   ) => void;
};

export default function Filter({
   close,
   tech,
   selectedTech,
   addToSelectedTech,
   removeFromSelectedTech,
}: Props) {
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
            <div className="text-lg font-medium">Filter Projects</div>
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
                  Select a technology from below to filter the projects
               </div>
            )}

            <div className="mb-2">Technologies</div>
            <div className="">
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
