import LayoutButton from "./LayoutButton";
import { LayoutModel } from "@/models/ProjectModel";
import RevealToRight from "@/animations/RevealToRight";

type Props = {
   currentLayout: LayoutModel;
   setCurrentLayout: React.Dispatch<React.SetStateAction<LayoutModel>>;
};

export default function LayoutButtons({
   currentLayout,
   setCurrentLayout,
}: Props) {
   return (
      <div className="w-max ml-auto">
         <RevealToRight main reverse>
            <div className="flex gap-1">
               <LayoutButton
                  onClick={() => setCurrentLayout("list")}
                  isActive={currentLayout === "list"}
               >
                  List
               </LayoutButton>
               <LayoutButton
                  onClick={() => setCurrentLayout("cascade")}
                  isActive={currentLayout === "cascade"}
               >
                  Cascade
               </LayoutButton>
               <LayoutButton
                  onClick={() => setCurrentLayout("carousel")}
                  isActive={currentLayout === "carousel"}
               >
                  Carousel
               </LayoutButton>
            </div>
         </RevealToRight>
      </div>
   );
}
