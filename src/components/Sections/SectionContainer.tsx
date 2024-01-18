import React from "react";
import ScrollProgress from "../ScrollProgress";

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
         <ScrollProgress black={lightBg} />
         {children}
      </main>
   );
}
