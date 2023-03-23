import allSkills from "@/assets/skills/allSkills";
import { motion } from "framer-motion";
import TechnologyCard from "./TechnologyCard";

type Props = {
   close: () => void;
};

export default function Filter({ close }: Props) {
   return (
      <motion.div
         drag
         dragMomentum={false}
         className="fixed bottom-10 right-10 bg-white rounded-xl z-50 shadow-xl p-3 pt-0 border-white"
      >
         <div className="flex h-10 bg-white items-center">
            <div>
               <span className="material-icons">drag_indicator</span>
            </div>
            <div className="flex-1 text-center">Drag me!</div>
            <button
               onClick={close}
               className="h-full aspect-square grid place-content-center"
            >
               <span className="material-icons">close</span>
            </button>
         </div>
         <div className="w-full md:w-[600px] h-auto shadow-inner bg-gray-200 rounded-xl p-2">
            <div className="text-lg font-medium">Filter Projects</div>
            <div className="text-gray-500 text-sm ml-2 mb-2 h-10 flex items-center">
               Select a technology from below to filter the projects
            </div>
            <div className="mb-2">Technologies</div>
            <div className="overflow-auto">
               {allSkills.map(({ name, logo }) => (
                  <TechnologyCard key={name} name={name} logo={logo} />
               ))}
            </div>
         </div>
      </motion.div>
   );
}
