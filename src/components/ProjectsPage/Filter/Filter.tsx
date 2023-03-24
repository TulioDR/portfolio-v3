import SkillModel from "@/models/SkillModel";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
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
         <div className="flex h-10 bg-white items-center">
            <span className="material-icons">drag_indicator</span>
            <div className="flex-1 text-center">Drag me!</div>
            <button
               onClick={close}
               className="h-full aspect-square grid place-content-center hover:bg-primary hover:text-white"
            >
               <span className="material-icons">close</span>
            </button>
         </div>
         <div
            onPointerDownCapture={(e) => e.stopPropagation()}
            className="w-full md:w-[600px] h-auto shadow-inner bg-gray-200 rounded-xl p-2 cursor-default"
         >
            <div className="text-lg font-medium">Filter Projects</div>
            {selectedTech.length > 0 ? (
               <>
                  <div className="">
                     {selectedTech.map(({ name, logo, link }) => (
                        <TechnologyCard
                           key={name}
                           name={name}
                           logo={logo}
                           onClick={() =>
                              removeFromSelectedTech(name, logo, link)
                           }
                        />
                     ))}
                  </div>
                  <div className="clear-both" />
               </>
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
