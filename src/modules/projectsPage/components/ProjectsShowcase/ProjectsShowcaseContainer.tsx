import { LayoutModel } from "@/models/ProjectModel";

type Props = {
   children: React.ReactNode;
   currentLayout: LayoutModel;
   handleWheel: (e: React.WheelEvent<HTMLDivElement>) => void;
};

export default function ProjectsShowcaseContainer({
   currentLayout,
   children,
   handleWheel,
}: Props) {
   const isGrid = currentLayout === "grid";
   const isList = currentLayout === "list";
   const isCarousel = currentLayout === "carousel";

   return (
      <div
         onWheel={handleWheel}
         className={`bg-[#141414] relative overflow-hidden w-screen h-screen
            ${isGrid ? "flex flex-col items-center" : ""}
            ${isList ? "flex flex-col items-center" : ""}
            ${isCarousel ? "flex items-center" : ""}
         `}
      >
         {children}
      </div>
   );
}
