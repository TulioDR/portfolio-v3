import Head from "next/head";

import { useEffect } from "react";

import ReactLenis from "@studio-freight/react-lenis";
import HomeSection from "@/modules/pages/home/components/HomeSection";
import AboutSection from "@/modules/pages/home/components/AboutSection";
import ContactSection from "@/modules/pages/home/components/ContactSection";
import WorkSection from "@/modules/pages/home/components/WorkSection";
import Tablet from "@/modules/pages/home/components/Tablet";
import { TabletPositionProvider } from "@/modules/pages/home/context/TabletPositionContext";
import ProgressBar from "@/modules/pages/home/components/ProgressBar";
import PositionDots from "@/modules/pages/home/components/PositionDots.tsx";

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
         <ReactLenis root>
            <TabletPositionProvider>
               <Tablet />
               <PositionDots />
            </TabletPositionProvider>
            <ProgressBar />
            <HomeSection />
            <AboutSection />
            <WorkSection />
            <ContactSection />
         </ReactLenis>
      </>
   );
}
