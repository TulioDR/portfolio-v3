import LayoutButton from "./LayoutButton";
import TechnologyCard from "./TechnologyCard";

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
   toggle,
   showFilter,
}: Props) {
   return (
      <>
         <div
            className={`flex justify-end overflow-hidden ${
               showFilter ? "w-64" : "w-20"
            }`}
         >
            <div
               className={`fixed bottom-0 duration-300 bg-white shadow-xl ${
                  showFilter ? "w-64" : "w-20"
               }`}
               style={{ height: "calc(100vh - 96px - 28px)" }}
            >
               <div className="w-full h-full pl-5 pr-5 hover:pr-3 pb-5 main-scrollbar overflow-hidden hover:overflow-auto">
                  <div className="z-10 flex items-center justify-between pt-5 w-full sticky top-0 bg-white">
                     <span className="truncate text-xl font-semibold">
                        Filter Projects
                     </span>
                     <button
                        onClick={toggle}
                        className="w-10 flex-shrink-0 aspect-square grid place-content-center hover:text-white hover:bg-slate-800 rounded-lg"
                     >
                        <span className="material-icons">menu</span>
                     </button>
                  </div>
                  <div>
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
                  </div>
               </div>
            </div>
         </div>
         {/* <div
            className={`w-full ${
               showFilter ? "flex space-x-2" : "flex flex-col-reverse"
            }`}
         >
            <LayoutButton onClick={setNormal} icon="dashboard" />
            <LayoutButton onClick={setGrid} icon="grid_view" sharp />
            <LayoutButton onClick={setList} icon="view_agenda" sharp />
         </div> */}
      </>
   );
}
