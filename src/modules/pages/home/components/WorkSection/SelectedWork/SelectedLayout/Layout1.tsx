import ProjectModel from "@/models/ProjectModel";
import { AnimatePresence } from "framer-motion";
import React from "react";
import SelectedContainer from "../SelectedContainer";
import SelectedDescription from "../SelectedDescription";
import SelectedTitle from "../SelectedTitle";
import SelectedImage from "../SelectedImage";

type Props = {
   currentWork: ProjectModel;
   showProject: boolean;
};

export default function Layout1({ currentWork, showProject }: Props) {
   return (
      <AnimatePresence>
         {showProject && (
            <div className="h-full absolute top-0 left-0 w-full flex flex-col">
               <SelectedContainer large>
                  <SelectedDescription>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Possimus, odit.
                  </SelectedDescription>
               </SelectedContainer>
               <div className="flex w-full">
                  <SelectedContainer>
                     <SelectedTitle>{currentWork.title}</SelectedTitle>
                  </SelectedContainer>
                  <SelectedImage currentWork={currentWork} fromBottom />
               </div>
            </div>
         )}
      </AnimatePresence>
   );
}
