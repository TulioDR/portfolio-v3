import React from "react";
import ScrollProgress from "../ScrollProgress";
import Navbar from "../Navbar/Navbar";

type Props = {
   children: React.ReactNode;
   lightBg?: true;
   hScreen?: true;
   minHScreen?: true;
};

export default function SectionContainer({
   children,
   lightBg,
   hScreen,
   minHScreen,
}: Props) {
   return (
      <main
         style={{ clipPath: "inset(0)" }}
         className={`
         ${hScreen ? `h-screen` : ""} 
         ${minHScreen ? "min-h-screen" : ""}`}
      >
         <Navbar lightBg={lightBg} />
         <ScrollProgress black={lightBg} />
         {children}
      </main>
   );
}
