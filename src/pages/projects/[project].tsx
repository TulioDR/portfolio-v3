import projects from "@/assets/projects";
import ProjectModel from "@/models/ProjectModel";
import { useEffect } from "react";
import Header from "@/components/ProjectDetails/Header";
import BackButton from "@/components/ProjectDetails/BackButton";

export async function getServerSideProps({ query }: any) {
   const project = projects.find((p) => p.link === query.project);
   return { props: { project } };
}

interface Props {
   project: ProjectModel;
}

export default function ProjectDetails({ project }: Props) {
   useEffect(() => {
      console.log(project);
   }, [project]);

   return (
      <>
         <BackButton />
         <Header project={project} />
         <div className="h-screen w-full py-20"></div>
      </>
   );
}
