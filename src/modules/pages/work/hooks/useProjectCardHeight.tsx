import { useEffect, useState } from "react";

export default function useProjectCardHeight(id: string) {
   const [height, setHeight] = useState<number>(0);
   useEffect(() => {
      const handleResize = () => {
         const card = document.getElementById(id)!;
         const { height: newHeight } = card.getBoundingClientRect();
         setHeight(newHeight);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [id]);
   return { height };
}
