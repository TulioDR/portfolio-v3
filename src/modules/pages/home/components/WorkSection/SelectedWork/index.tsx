import ProjectModel from "@/models/ProjectModel";
import React from "react";
import Layout1 from "./SelectedLayout/Layout1";
import Layout2 from "./SelectedLayout/Layout2";
import Layout3 from "./SelectedLayout/Layout3";

type Props = {
   selectedWork: ProjectModel[];
   layout: number | null;
};

export default function SelectedWork({ selectedWork, layout }: Props) {
   return (
      <>
         <Layout1 currentWork={selectedWork[0]} showProject={layout === 1} />
         <Layout2 currentWork={selectedWork[1]} showProject={layout === 2} />
         <Layout3 currentWork={selectedWork[2]} showProject={layout === 3} />
      </>
   );
}
