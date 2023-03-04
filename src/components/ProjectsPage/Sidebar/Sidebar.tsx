import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import Link from "next/link";
import LayoutButton from "./LayoutButton";
import SidebarContainer from "../Sidebar/SidebarContainer";
import TechnologyCard from "./TechnologyCard";
import FilterHeader from "./FilterHeader";
import { motion } from "framer-motion";

type Props = {
   toggle: () => void;
   isSidebarExpanded: boolean;
   currentLayout: "normal" | "grid" | "list";
   setCurrentLayout: React.Dispatch<
      React.SetStateAction<"normal" | "grid" | "list">
   >;
};

export default function Sidebar({
   toggle,
   isSidebarExpanded,
   currentLayout,
   setCurrentLayout,
}: Props) {
   const { setIsBackFromProjects } = useBackFromProjectsContext();
   const handleClick = () => {
      setIsBackFromProjects(true);
   };
   return (
      <SidebarContainer isSidebarExpanded={isSidebarExpanded}>
         <div className="h-32 w-full flex flex-col justify-between">
            <motion.div
               initial={{ width: 0 }}
               animate={{ width: 80 }}
               exit={{ width: 0 }}
               transition={{ duration: 0.4 }}
               className="ml-auto mt-4 overflow-hidden flex justify-end"
            >
               <Link
                  onClick={handleClick}
                  href="/#projects"
                  className="py-2 bg-slate-800 text-white w-20 text-center block shrink-0"
               >
                  Go Back
               </Link>
            </motion.div>
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
         </div>
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
            className="w-full flex-1 pl-5 pr-5 hover:pr-3 pb-5 main-scrollbar overflow-hidden hover:overflow-y-scroll bg-white shadow-xl"
         >
            <FilterHeader toggle={toggle} />
            <ul>
               <TechnologyCard name="HTML" />
               <TechnologyCard name="CSS" />
               <TechnologyCard name="Javascript" />
               <TechnologyCard name="Axios" />
               <TechnologyCard name="Axios" />
               <TechnologyCard name="Axios" />
               <TechnologyCard name="Axios" />
               <TechnologyCard name="Axios" />
               <TechnologyCard name="Axios" />
               <TechnologyCard name="Axios" />
               <TechnologyCard name="Axios" />
               <TechnologyCard name="Axios" />
               <TechnologyCard name="Axios" />
               <TechnologyCard name="Axios" />
            </ul>
         </motion.div>
      </SidebarContainer>
   );
}
