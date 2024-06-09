import ReactLenis, { LenisInstance } from "@studio-freight/react-lenis";
import React, { useEffect, useRef, useState } from "react";
import MobileWork from "@/modules/pages/work/components/MobileWork";
import DesktopWork from "@/modules/pages/work/components/DesktopWork";

export default function WorkPage() {
   const [isMobile, setIsMobile] = useState<boolean>(false);
   useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 1024);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const lenisRef = useRef<LenisInstance>(null);
   return (
      <ReactLenis
         ref={lenisRef}
         root
         options={{ orientation: isMobile ? "vertical" : "horizontal" }}
      >
         {isMobile ? <MobileWork /> : <DesktopWork lenisRef={lenisRef} />}
      </ReactLenis>
   );
}
