import LayoutButton from "./LayoutButton";
import { motion } from "framer-motion";

type Props = {
   currentLayout: "normal" | "grid" | "list";
   setCurrentLayout: React.Dispatch<
      React.SetStateAction<"normal" | "grid" | "list">
   >;
   toggleFilter: () => void;
   toggleProjectsExpanded: () => void;
   isProjectExpanded: boolean;
};

export default function LayoutButtons({
   currentLayout,
   setCurrentLayout,
   toggleFilter,
   toggleProjectsExpanded,
   isProjectExpanded,
}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="flex space-x-2 w-full mb-7"
      >
         <LayoutButton
            icon="dashboard"
            layout="normal"
            currentLayout={currentLayout}
            setCurrentLayout={setCurrentLayout}
         />
         <LayoutButton
            sharp
            icon="grid_view"
            layout="grid"
            currentLayout={currentLayout}
            setCurrentLayout={setCurrentLayout}
         />
         <LayoutButton
            sharp
            icon="view_agenda"
            layout="list"
            currentLayout={currentLayout}
            setCurrentLayout={setCurrentLayout}
         />
         <div className="h-full w-[2px] bg-primary"></div>
         <button
            onClick={toggleProjectsExpanded}
            className="h-10 aspect-square bg-primary rounded-lg text-white grid place-content-center"
         >
            <span className="material-icons">
               {isProjectExpanded ? "zoom_out_map" : "zoom_in_map"}
            </span>
         </button>
         <div className="h-full w-[2px] bg-primary"></div>
         <button
            onClick={toggleFilter}
            className="h-10 aspect-square bg-primary rounded-lg text-white grid place-content-center"
         >
            <span className="material-icons">sort</span>
         </button>
      </motion.div>
   );
}