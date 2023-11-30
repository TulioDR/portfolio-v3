import React from "react";
import ScrollProgress from "../ScrollProgress";
import Navbar from "../Navbar/Navbar";

type Props = {
   children: React.ReactNode;
   lightBg?: true;
};

export default function SectionContainer({ children, lightBg }: Props) {
   return (
      <main style={{ clipPath: "inset(0)" }}>
         <Navbar lightBg={lightBg} />
         <ScrollProgress black={lightBg} />
         {children}
      </main>
   );
}
