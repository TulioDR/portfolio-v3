import projects from "@/assets/projects";
import ProjectModel, { ProjectTranslations } from "@/models/ProjectModel";
import { useEffect, useState } from "react";
import Header from "@/components/ProjectDetails/Header";
import Head from "next/head";
import useLanguageContext from "@/context/LanguageContext";
import MainContainer from "@/components/MainContainer";
import Description from "@/components/ProjectDetails/Description";
import Subtitle from "@/components/ProjectDetails/Subtitle";
import Features from "@/components/ProjectDetails/Features";
import TechnologiesUsed from "@/components/ProjectDetails/TechnologiesUsed";
import TopBackButton from "@/components/ProjectDetails/TopBackButton";
import BottomBackButton from "@/components/ProjectDetails/BottomBackBtn";
import { useRouter } from "next/router";
import { animateScroll, Events } from "react-scroll";

export async function getServerSideProps({ query }: any) {
   const project = projects.find((p) => p.link === query.project);
   return { props: { project } };
}

interface Props {
   project: ProjectModel;
}

export default function ProjectDetails({ project }: Props) {
   const { isEnglish } = useLanguageContext();
   const { english, spanish } = project.translations;

   const [currentLan, setCurrentLan] = useState<ProjectTranslations>(english);
   useEffect(() => {
      if (isEnglish) setCurrentLan(english);
      else setCurrentLan(spanish);
   }, [isEnglish, english, spanish]);

   const router = useRouter();
   useEffect(() => {
      if (!router) return;
      Events.scrollEvent.register("end", () => {
         router.push("/projects");
         Events.scrollEvent.remove("end");
      });
   }, [router]);

   const goTopAndBack = () => {
      animateScroll.scrollToTop({ duration: 800, smooth: true });
   };

   return (
      <>
         <Head>
            <title>{project.title}</title>
            <meta name="description" content="Check out my projects!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <TopBackButton onClick={goTopAndBack} />
         <Header project={project} currentLan={currentLan} />
         <MainContainer>
            <div className="w-full py-20 space-y-20">
               <Description currentLan={currentLan} />
               <Subtitle>Features</Subtitle>
               <Features features={currentLan.features} />
               <Subtitle>Technologies Used</Subtitle>
               <TechnologiesUsed technologies={project.technologies} />
               <BottomBackButton onClick={goTopAndBack}>Back</BottomBackButton>
            </div>
         </MainContainer>
      </>
   );
}
