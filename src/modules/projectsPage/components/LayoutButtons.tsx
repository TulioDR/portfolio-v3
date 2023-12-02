import LayoutButton from "./LayoutButton";
import { LayoutModel } from "@/models/ProjectModel";
import RevealToRight from "@/animations/RevealToRight";

type Props = {
   currentLayout: LayoutModel;
   setCurrentLayout: React.Dispatch<React.SetStateAction<LayoutModel>>;
   toggleExpanded: () => void;
   isProjectExpanded: boolean;
};

export default function LayoutButtons({
   currentLayout,
   setCurrentLayout,
   toggleExpanded,
   isProjectExpanded,
}: Props) {
   return (
      <div className="w-max ml-auto">
         <RevealToRight main reverse>
            <div className="flex gap-1">
               <LayoutButton
                  onClick={() => setCurrentLayout("mixed")}
                  isActive={currentLayout === "mixed"}
               >
                  List
               </LayoutButton>
               <LayoutButton
                  onClick={() => setCurrentLayout("grid")}
                  isActive={currentLayout === "grid"}
               >
                  Cascade
               </LayoutButton>
               <LayoutButton
                  onClick={() => setCurrentLayout("list")}
                  isActive={currentLayout === "list"}
               >
                  Carousel
               </LayoutButton>
               <div className="h-full w-[2px] bg-main-primary hidden md:block"></div>
               <button
                  onClick={toggleExpanded}
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
