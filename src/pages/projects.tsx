import MainContainer from "@/components/MainContainer";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import Sidebar from "@/components/ProjectsPage/Sidebar";
import { useState } from "react";

export default function projects() {
   const [showFilter, setShowFilter] = useState<boolean>(true);
   const toggle = () => {
      setShowFilter((prev) => !prev);
   };

   const [layout, setLayout] = useState<"normal" | "grid" | "list">("normal");

   const setNormal = () => {
      setLayout("normal");
   };
   const setGrid = () => {
      setLayout("grid");
   };
   const setList = () => {
      setLayout("list");
   };
   return (
      <MainContainer>
         <h1 className="text-8xl mb-7 font-semibold">Projects</h1>
         <div className="flex justify-between overflow-y-hidden">
            <div
               className={`grid gap-7 pr-7 pb-7 flex-1 ${
                  layout === "list"
                     ? showFilter
                        ? "grid-cols-1"
                        : "grid-cols-2"
                     : showFilter
                     ? "grid-cols-2"
                     : "grid-cols-3"
               } ${
                  layout === "normal"
                     ? showFilter
                        ? "grid-rows-6"
                        : "grid-rows-4"
                     : ""
               }`}
            >
               <ProjectCard layout={layout} />
               <ProjectCard layout={layout} small />
               <ProjectCard layout={layout} />
               <ProjectCard layout={layout} />
               <ProjectCard layout={layout} />
               <ProjectCard layout={layout} />
               <ProjectCard layout={layout} small />
            </div>
            <Sidebar
               setNormal={setNormal}
               setGrid={setGrid}
               setList={setList}
               toggle={toggle}
               showFilter={showFilter}
            />
         </div>
      </MainContainer>
   );
}
