import Head from "next/head";

import HomeSection from "@/components/Sections/Home";
import AboutSection from "@/components/Sections/About";
import SkillsSection from "@/components/Sections/Skills";
import ProjectsSection from "@/components/Sections/Projects";
import ContactSection from "@/components/Sections/Contact";
import { useEffect } from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import Footer from "@/components/Footer";

export default function Home() {
   useEffect(() => {
      const hash = window.location.hash;
      if (hash) document.querySelector(hash)?.scrollIntoView();
   }, []);

   const {
      aboutRef,
      aboutInfoRef,
      skillsRef,
      projectsRef,
      projectsSliderRef,
      contactRef,
   } = useScrollPosition();
   return (
      <>
         <Head>
            <title>Tulio Ruzo Portfolio</title>
            <meta name="description" content="Check out my portfolio!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <HomeSection />
         <AboutSection aboutRef={aboutRef} aboutInfoRef={aboutInfoRef} />
         <SkillsSection skillsRef={skillsRef} />
         <ProjectsSection
            projectsRef={projectsRef}
            projectsSliderRef={projectsSliderRef}
         />
         <ContactSection contactRef={contactRef} />
         <Footer />
      </>
   );
}
