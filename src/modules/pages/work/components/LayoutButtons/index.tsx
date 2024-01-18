import React from "react";
import LayoutButtonsContainer from "./LayoutButtonsContainer";
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
      <LayoutButtonsContainer>
         <div className="bg-white rounded-full flex gap-1 p-1 pointer-events-auto shadow-xl">
            <LayoutButton
               onClick={() => setCurrentLayout("carousel")}
               isActive={currentLayout === "carousel"}
               icon="view_column_2"
            />
            <LayoutButton
               onClick={() => setCurrentLayout("list")}
               isActive={currentLayout === "list"}
               icon="splitscreen"
            />
            <LayoutButton
               onClick={() => setCurrentLayout("grid")}
               isActive={currentLayout === "grid"}
               icon="grid_view"
            />
         </div>
      </LayoutButtonsContainer>
   );
}
