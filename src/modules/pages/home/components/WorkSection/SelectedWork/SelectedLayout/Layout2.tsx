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

export default function Layout2({ currentWork, showProject }: Props) {
   return (
      <AnimatePresence>
         {showProject && (
            <div className="h-full absolute top-0 left-0 w-full flex flex-col">
               <div className="flex w-full">
                  <SelectedContainer>
                     <SelectedDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, odit.
                     </SelectedDescription>
                  </SelectedContainer>
                  <SelectedImage currentWork={currentWork} fromRight />
               </div>
               <SelectedContainer large>
                  <SelectedTitle>{currentWork.title}</SelectedTitle>
               </SelectedContainer>
            </div>
         )}
      </AnimatePresence>
   );
}
