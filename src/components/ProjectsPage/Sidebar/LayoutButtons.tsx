import { motion } from "framer-motion";
import LayoutButton from "./LayoutButton";

type Props = {
   currentLayout: "normal" | "grid" | "list";
   setCurrentLayout: React.Dispatch<
      React.SetStateAction<"normal" | "grid" | "list">
   >;
   isSidebarExpanded: boolean;
};

export default function LayoutButtons({
   currentLayout,
   setCurrentLayout,
   isSidebarExpanded,
}: Props) {
   return (
      <motion.div
         exit={{ opacity: 0, transition: { duration: 0.4 } }}
         className="flex-1 flex items-center w-full px-5"
      >
         <div className="mr-auto">
            <LayoutButton
               icon="dashboard"
               layout="normal"
               currentLayout={currentLayout}
               setCurrentLayout={setCurrentLayout}
               isSidebarExpanded={isSidebarExpanded}
            />
         </div>
         <div className="mx-auto">
            <LayoutButton
               sharp
               icon="grid_view"
               layout="grid"
               currentLayout={currentLayout}
               setCurrentLayout={setCurrentLayout}
               isSidebarExpanded={isSidebarExpanded}
            />
         </div>
         <div className="ml-auto">
            <LayoutButton
               sharp
               icon="view_agenda"
               layout="list"
               currentLayout={currentLayout}
               setCurrentLayout={setCurrentLayout}
               isSidebarExpanded={isSidebarExpanded}
            />
         </div>
      </motion.div>
   );
}
