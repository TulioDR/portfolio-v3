import React from "react";
import MainButton from "../MainButton";
import ProjectsBackground from "./ProjectsBackground";

type Props = {};

export default function WorkSection({}: Props) {
   return (
      <div>
         <div
            id="work"
            className="h-screen sticky top-0 w-full overflow-hidden "
         >
            <ProjectsBackground />
            <div className="absolute top-0 left-0 flex justify-end w-full h-full py-20 px-40">
               <div className="h-full w-1/2 grid place-content-center z-50">
                  <MainButton light>View Work</MainButton>
               </div>
            </div>
         </div>
         <div className="h-screen" />
         <div className="h-screen" />
      </div>
   );
}
