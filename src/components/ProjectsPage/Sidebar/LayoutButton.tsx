import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
   icon: string;
   sharp?: boolean;
   layout: "normal" | "grid" | "list";
   currentLayout: "normal" | "grid" | "list";
   setCurrentLayout: React.Dispatch<
      React.SetStateAction<"normal" | "grid" | "list">
   >;
   isSidebarExpanded: boolean;
};

export default function LayoutButton({
   icon,
   sharp,
   layout,
   currentLayout,
   setCurrentLayout,
   isSidebarExpanded,
}: Props) {
   const [showButton, setShowButton] = useState<boolean>(false);

   useEffect(() => {
      if (currentLayout === layout || isSidebarExpanded) {
         var handler = setTimeout(() => setShowButton(true), 300);
      } else setShowButton(false);

      return () => clearTimeout(handler);
   }, [currentLayout, layout, isSidebarExpanded]);

   const handleClick = () => setCurrentLayout(layout);
   return (
      <AnimatePresence>
         {showButton && (
            <motion.button
               initial={{ opacity: 0 }}
               animate={{
                  opacity: 1,
                  transition: { duration: 0.3 },
               }}
               onClick={handleClick}
               className={`rounded-lg aspect-square w-10 flex-shrink-0 grid place-content-center ${
                  currentLayout === layout
                     ? "bg-slate-800 text-white"
                     : "bg-white hover:bg-slate-800 hover:text-white"
               }`}
            >
               <span className={`material-icons${sharp ? "-sharp" : ""}`}>
                  {icon}
               </span>
            </motion.button>
         )}
      </AnimatePresence>
   );
}
