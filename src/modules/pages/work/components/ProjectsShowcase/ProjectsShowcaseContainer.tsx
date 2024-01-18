import { LayoutModel } from "@/models/ProjectModel";
import { useEffect, useState } from "react";

type Props = {
   children: React.ReactNode;
   currentLayout: LayoutModel;
};

export default function ProjectsShowcaseContainer({
   currentLayout,
   children,
}: Props) {
   const isGrid = currentLayout === "grid";
   const isList = currentLayout === "list";
   const isCarousel = currentLayout === "carousel";

   const [padding, setPadding] = useState<string>("");

   useEffect(() => {
      const el = document.getElementById("padding-selector");
      if (!el) return;
      if (currentLayout === "carousel") {
         const width = el.clientWidth;
         setPadding(`calc(50vw - ${width / 2}px)`);
      } else {
         const height = el.clientHeight;
         setPadding(`calc(50vh - ${height / 2}px)`);
      }
   }, [currentLayout]);

   return (
      <div
         style={
            isCarousel
               ? { paddingLeft: padding, paddingRight: padding }
               : { paddingTop: padding, paddingBottom: padding }
         }
         className={`
            ${isCarousel ? "flex items-center h-screen min-w-max" : ""}
            ${isList ? "flex flex-col items-center w-full" : ""}
            ${isGrid ? "flex flex-col items-center w-full" : ""}
         `}
      >
         <div
            className={`gap-5 relative
            ${isGrid ? "w-2/3 grid grid-cols-2" : ""}
            ${isList ? "w-1/2 flex flex-col" : ""}
            ${isCarousel ? "h-1/2 flex" : ""}
         `}
         >
            <div
               id="padding-selector"
               className={`absolute pointer-events-none
                  ${isCarousel ? "aspect-[7/9] h-full" : ""}
                  ${isList ? "aspect-[16/5] w-full" : ""}
                  ${isGrid ? "aspect-video w-1/2" : ""}
               `}
            />
            {padding.length > 0 && children}
         </div>
      </div>
   );
}
