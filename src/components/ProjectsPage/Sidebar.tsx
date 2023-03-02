import LayoutButton from "./LayoutButton";
import TechnologyCard from "./TechnologyCard";
import { motion } from "framer-motion";

type Props = {
   setNormal: () => void;
   setGrid: () => void;
   setList: () => void;
   toggle: () => void;
   showFilter: boolean;
};

export default function Sidebar({
   setNormal,
   setGrid,
   setList,
   showFilter,
   toggle,
}: Props) {
   return (
      <div className={`flex justify-end ${showFilter ? "w-72" : "w-24"}`}>
         <div
            className={`fixed bottom-7 origin-right hover:overflow-y-auto overflow-hidden main-scrollbar duration-500 ${
               showFilter ? "w-72" : "w-24"
            }`}
            style={{ height: "calc(100vh - 96px - 56px)" }}
         >
            <div className="pl-7 hover:pr-5 pr-7 relative">
               <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-black"
               ></motion.div>
               <div className="flex items-center justify-between h-10 mb-5 w-full sticky top-0 bg-gray-200 z-10">
                  <span className="text-xl font-semibold overflow-hidden truncate">
                     Filter Projects
                  </span>
                  <button
                     onClick={toggle}
                     className="aspect-square h-full rounded-lg bg-white shadow-lg hover:bg-gray-900 hover:text-white grid place-content-center"
                  >
                     <span className="material-icons">sort</span>
                  </button>
               </div>
               <div
                  className={`w-full ${
                     showFilter ? "flex space-x-2" : "flex flex-col-reverse"
                  }`}
               >
                  <LayoutButton onClick={setNormal} icon="dashboard" />
                  <LayoutButton onClick={setGrid} icon="grid_view" sharp />
                  <LayoutButton onClick={setList} icon="view_agenda" sharp />
               </div>
               <div className="space-y-5 pb-5">
                  {/* <TechnologyCard name="HTML" />
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
                  <TechnologyCard name="Axios" />
                  <TechnologyCard name="Axios" />
                  <TechnologyCard name="Axios" /> */}
               </div>
            </div>
         </div>
      </div>
   );
}
