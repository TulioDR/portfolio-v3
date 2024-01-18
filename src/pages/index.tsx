import Head from "next/head";

import { useEffect } from "react";

import ReactLenis from "@studio-freight/react-lenis";
import HomeSection from "@/modules/pages/home/components/HomeSection";
import AboutSection from "@/modules/pages/home/components/AboutSection";
import ContactSection from "@/modules/pages/home/components/ContactSection";

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
            <div className="bg-primary">
               <HomeSection />
            </div>
            <AboutSection />
            <div className="bg-[#1C1D20]">
               <ContactSection />
            </div>
         </ReactLenis>
      </>
   );
}
