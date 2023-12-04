import LayoutButton from "./LayoutButton";
import { LayoutModel } from "@/models/ProjectModel";

type Props = {
   currentLayout: LayoutModel;
   setCurrentLayout: React.Dispatch<React.SetStateAction<LayoutModel>>;
};

export default function LayoutButtons({
   currentLayout,
   setCurrentLayout,
}: Props) {
   return (
      <div className="bg-black max-h-min rounded-full border border-white flex gap-1 p-2 pointer-events-auto">
         <LayoutButton
            onClick={() => setCurrentLayout("carousel")}
            isActive={currentLayout === "carousel"}
         >
            Carousel
         </LayoutButton>
         <LayoutButton
            onClick={() => setCurrentLayout("list")}
            isActive={currentLayout === "list"}
         >
            List
         </LayoutButton>
         <LayoutButton
            onClick={() => setCurrentLayout("grid")}
            isActive={currentLayout === "grid"}
         >
            Grid
         </LayoutButton>
      </div>
   );
}
