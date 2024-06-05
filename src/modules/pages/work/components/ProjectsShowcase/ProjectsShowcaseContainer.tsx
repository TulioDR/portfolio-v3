import { useEffect, useState } from "react";

type Props = {
   children: React.ReactNode;
   onWheel: () => void;
};

export default function ProjectsShowcaseContainer({
   children,
   onWheel,
}: Props) {
   const [width, setWidth] = useState<number>(0);

   useEffect(() => {
      const el = document.getElementById("width-selector")!;
      const handleResize = () => {
         const windowWidth = window.innerWidth;
         const parent = el.parentElement!;
         const style = window.getComputedStyle(parent);
         const gap = parseInt(style.getPropertyValue("gap"));

         const width = el.clientWidth;
         setWidth(windowWidth / 2 - width / 2 - gap);
      };
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return (
      <div onWheel={onWheel} className="h-screen flex items-center">
         <div className="gap-5 2xl:gap-10 relative h-1/2 flex">
            <div id="width-selector" className="h-full absolute aspect-[6/9]" />
            <div style={{ width }} className="h-full flex-shrink-0" />
            {width > 0 && children}
            <div style={{ width }} className="h-full flex-shrink-0" />
         </div>
      </div>
   );
}
