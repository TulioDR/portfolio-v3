import Head from "next/head";

import HomeSection from "@/components/Sections/Home";
import AboutSection from "@/components/Sections/About";
import SkillsSection from "@/components/Sections/Skills";
import ProjectsSection from "@/components/Sections/Projects";
import ContactSection from "@/components/Sections/Contact";
import { useEffect } from "react";

export default function Home() {
   useEffect(() => {
      const hash = window.location.hash;
      if (hash) document.querySelector(hash)?.scrollIntoView();
   }, []);
   return (
      <>
         <Head>
            <title>Tulio Ruzo Portfolio</title>
            <meta name="description" content="Check out my portfolio!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <HomeSection />
         <AboutSection />
         <SkillsSection />
         <ProjectsSection />
         <ContactSection />
      </>
   );
}
