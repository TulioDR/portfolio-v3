import LayoutButton from "./LayoutButton";
import { motion } from "framer-motion";
import FilterButton from "./FilterButton";

type Props = {
   currentLayout: "normal" | "grid" | "list";
   setCurrentLayout: React.Dispatch<
      React.SetStateAction<"normal" | "grid" | "list">
   >;
   toggleFilter: () => void;
   toggleProjectsExpanded: () => void;
   isProjectExpanded: boolean;
   isFilterOpen: boolean;
};

export default function LayoutButtons({
   currentLayout,
   setCurrentLayout,
   toggleFilter,
   toggleProjectsExpanded,
   isProjectExpanded,
   isFilterOpen,
}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="flex justify-between w-full mb-7"
      >
         <FilterButton onClick={toggleFilter} isFilterOpen={isFilterOpen} />
         <div className="flex space-x-2 items-center">
            <LayoutButton
               icon="dashboard"
               layout="normal"
               currentLayout={currentLayout}
               setCurrentLayout={setCurrentLayout}
            />
            <LayoutButton
               sharp
               icon="grid_view"
               layout="grid"
               currentLayout={currentLayout}
               setCurrentLayout={setCurrentLayout}
            />
            <LayoutButton
               sharp
               icon="view_agenda"
               layout="list"
               currentLayout={currentLayout}
               setCurrentLayout={setCurrentLayout}
            />
            <div className="h-full w-[2px] bg-primary"></div>
            <button
               onClick={toggleProjectsExpanded}
               className="h-10 aspect-square bg-main-primary rounded-lg text-white grid place-content-center"
            >
               <span className="material-icons">
                  {isProjectExpanded ? "zoom_out_map" : "zoom_in_map"}
               </span>
            </button>
         </div>
      </motion.div>
   );
}
