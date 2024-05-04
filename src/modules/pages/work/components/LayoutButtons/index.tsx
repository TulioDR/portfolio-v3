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
      </LayoutButtonsContainer>
   );
}
