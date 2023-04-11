import LayoutButton from "./LayoutButton";
import FilterButton from "./FilterButton";
import { LayoutModel } from "@/models/ProjectModel";
import RevealToRight from "@/animations/RevealToRight";

type Props = {
   currentLayout: LayoutModel;
   setCurrentLayout: React.Dispatch<React.SetStateAction<LayoutModel>>;
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
      <div className="flex justify-between w-full mb-7 overflow-hidden">
         <RevealToRight main>
            <FilterButton onClick={toggleFilter} isFilterOpen={isFilterOpen} />
         </RevealToRight>
         <RevealToRight main reverse>
            <div className="flex space-x-2 items-center">
               <LayoutButton
                  icon="dashboard"
                  layout="mixed"
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
               <div className="h-full w-[2px] bg-main-primary hidden md:block"></div>
               <button
                  onClick={toggleProjectsExpanded}
                  className="h-10 aspect-square bg-main-primary rounded-lg text-white hidden md:grid place-content-center "
               >
                  <span className="material-icons">
                     {isProjectExpanded ? "zoom_out_map" : "zoom_in_map"}
                  </span>
               </button>
            </div>
         </RevealToRight>
      </div>
   );
}
